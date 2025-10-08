# Google Calendar Integration Setup Guide

This guide will help you integrate Google Calendar with the BookConsultation
page.

## Prerequisites

1. Google Cloud Console account
2. Google Calendar API enabled
3. OAuth 2.0 credentials

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Name it "Innovatx Booking System"

### 2. Enable Google Calendar API

```bash
1. In Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google Calendar API"
3. Click "Enable"
```

### 3. Create OAuth 2.0 Credentials

```bash
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application"
4. Add authorized JavaScript origins:
   - http://localhost:5173 (for development)
   - https://yourdomain.com (for production)
5. Add authorized redirect URIs:
   - http://localhost:5173
   - https://yourdomain.com
6. Click "Create"
7. Copy Client ID and Client Secret
```

### 4. Environment Variables

Create a `.env` file in your project root:

```env
# Google Calendar API
VITE_GOOGLE_CLIENT_ID=your_client_id_here
VITE_GOOGLE_API_KEY=your_api_key_here
VITE_GOOGLE_CALENDAR_ID=your_calendar_id@gmail.com

# Backend API (optional - for server-side integration)
VITE_API_BASE_URL=http://localhost:3000/api
```

### 5. Install Required Dependencies

```bash
npm install @react-oauth/google gapi-script
```

### 6. Get Your Calendar ID

1. Open Google Calendar
2. Click Settings (gear icon) > Settings
3. Find your calendar under "Settings for my calendars"
4. Click on the calendar name
5. Scroll to "Integrate calendar"
6. Copy the "Calendar ID"

## Implementation Options

### Option A: Client-Side Integration (Simple)

Use the provided `googleCalendarAPI.js` utility file.

**Pros:**

- Easy to implement
- No backend required
- Users authenticate with their Google account

**Cons:**

- Users must grant calendar access
- Limited to authenticated users

### Option B: Server-Side Integration (Recommended for Production)

Use a backend service to manage calendar events.

**Pros:**

- Better security
- No user authentication required
- Full control over calendar events
- Can add to YOUR calendar

**Cons:**

- Requires backend API
- More complex setup

## Backend API Example (Node.js/Express)

```javascript
// backend/routes/booking.js
const express = require("express");
const router = express.Router();
const { google } = require("googleapis");

// Initialize Google Calendar API
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Set credentials (use service account or refresh token)
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oauth2Client });

// Create booking endpoint
router.post("/book-consultation", async (req, res) => {
  const { name, email, date, time, serviceType, message } = req.body;

  try {
    // Parse date and time
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60000); // 30 minutes

    // Create calendar event
    const event = {
      summary: `Consultation: ${serviceType}`,
      description: `
        Consultation booking with ${name}
        Email: ${email}
        Service: ${serviceType}
        Message: ${message || "N/A"}
      `,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/New_York", // Change to your timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "America/New_York",
      },
      attendees: [
        { email: email },
        { email: process.env.CALENDAR_EMAIL }, // Your email
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 30 },
        ],
      },
      conferenceData: {
        createRequest: {
          requestId: `consultation-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    // Insert event
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      resource: event,
      conferenceDataVersion: 1,
      sendUpdates: "all", // Send email to attendees
    });

    res.json({
      success: true,
      message: "Booking confirmed",
      eventId: response.data.id,
      meetingLink: response.data.hangoutLink,
    });
  } catch (error) {
    console.error("Calendar API Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
});

// Get available slots endpoint
router.get("/available-slots", async (req, res) => {
  const { date } = req.query;

  try {
    const startOfDay = new Date(date);
    startOfDay.setHours(9, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(17, 0, 0, 0);

    // Get existing events
    const response = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    });

    const bookedSlots = response.data.items.map((event) => ({
      start: event.start.dateTime,
      end: event.end.dateTime,
    }));

    // Generate all possible slots
    const allSlots = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute of [0, 30]) {
        allSlots.push(
          `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`
        );
      }
    }

    // Filter out booked slots
    const availableSlots = allSlots.filter((slot) => {
      const slotTime = new Date(`${date}T${slot}:00`);
      return !bookedSlots.some((booked) => {
        const bookedStart = new Date(booked.start);
        return slotTime >= bookedStart && slotTime < new Date(booked.end);
      });
    });

    res.json({ success: true, availableSlots });
  } catch (error) {
    console.error("Calendar API Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
```

## Frontend Integration

Update `BookConsultation.jsx` to use the backend API:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/book-consultation`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          date: selectedDate.toISOString().split("T")[0],
          time: selectedTime,
          serviceType: formData.serviceType,
          message: formData.message,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {
      setBookingComplete(true);
      setCurrentStep(4);
    } else {
      alert("Booking failed: " + data.message);
    }
  } catch (error) {
    console.error("Booking error:", error);
    alert("Failed to book consultation. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Alternative: Calendly Integration (Easiest)

If you want the simplest solution, use Calendly:

1. Create free account at [Calendly](https://calendly.com)
2. Set up your availability
3. Embed Calendly widget:

```javascript
// Install Calendly package
npm install react-calendly

// Use in component
import { InlineWidget } from "react-calendly";

<InlineWidget url="https://calendly.com/your-username/30min" />
```

## Security Best Practices

1. **Never expose API keys in frontend code**
2. **Use environment variables**
3. **Implement rate limiting on backend**
4. **Validate all user inputs**
5. **Use HTTPS in production**
6. **Implement CORS properly**

## Testing

1. Test booking creation
2. Test email notifications
3. Test calendar event creation
4. Test timezone handling
5. Test edge cases (double booking, invalid dates)

## Troubleshooting

### Common Issues:

**Issue: "Calendar API not enabled"**

- Solution: Enable Google Calendar API in Google Cloud Console

**Issue: "Invalid credentials"**

- Solution: Verify client ID and API key are correct

**Issue: "Quota exceeded"**

- Solution: Check API usage limits in Google Cloud Console

**Issue: "Timezone mismatch"**

- Solution: Ensure consistent timezone handling in frontend and backend

## Support

For issues, contact the Innovatx development team or refer to:

- [Google Calendar API Documentation](https://developers.google.com/calendar/api)
- [OAuth 2.0 Setup](https://developers.google.com/identity/protocols/oauth2)
