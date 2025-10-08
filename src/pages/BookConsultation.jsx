import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookConsultation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Service, 2: DateTime, 3: Details, 4: Confirmation
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Book Free Consultation | Innovatx";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Schedule a free 30-minute consultation with Innovatx. Discuss your project, get expert advice, and discover how we can help transform your business."
      );
    }

    setTimeout(() => setIsVisible(true), 100);
    window.scrollTo(0, 0);

    return () => {
      document.title =
        "Innovatx | Revolutionize Web Experience with Cutting-Edge Solutions";
    };
  }, []);

  // Service types
  const serviceTypes = [
    {
      value: "web-development",
      label: "Web Development",
      icon: "💻",
      description: "Custom websites and web applications",
    },
    {
      value: "ai-integration",
      label: "AI Integration",
      icon: "🤖",
      description: "AI-powered solutions and automation",
    },
    {
      value: "small-business",
      label: "Small Business Solutions",
      icon: "🏪",
      description: "Affordable digital transformation",
    },
    {
      value: "startup-mvp",
      label: "Startup MVP",
      icon: "🚀",
      description: "Rapid prototype development",
    },
    {
      value: "consulting",
      label: "General Consulting",
      icon: "💡",
      description: "Strategic technical guidance",
    },
    {
      value: "other",
      label: "Other Services",
      icon: "⚙️",
      description: "Custom requirements",
    },
  ];

  // Generate next 14 business days
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDate = new Date(today);

    while (daysAdded < 14) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();

      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(new Date(currentDate));
        daysAdded++;
      }
    }
    return dates;
  };

  // Generate time slots (9 AM - 5 PM, 30-minute intervals)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute of [0, 30]) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const displayTime = new Date(
          2024,
          0,
          1,
          hour,
          minute
        ).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        slots.push({ value: timeString, display: displayTime });
      }
    }
    return slots;
  };

  const availableDates = generateAvailableDates();
  const timeSlots = generateTimeSlots();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.serviceType) {
        newErrors.serviceType = "Please select a service type";
      }
    }

    if (step === 2) {
      if (!selectedDate) {
        newErrors.selectedDate = "Please select a date";
      }
      if (!selectedTime) {
        newErrors.selectedTime = "Please select a time";
      }
    }

    if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep(3)) return;

    setIsSubmitting(true);

    // Prepare booking data
    const bookingData = {
      ...formData,
      date: selectedDate.toISOString(),
      time: selectedTime,
      dateDisplay: selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      timeDisplay: timeSlots.find((slot) => slot.value === selectedTime)
        ?.display,
    };

    try {
      // TODO: Replace with your actual API endpoint
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Example: Send to your backend
      // const response = await fetch('/api/book-consultation', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(bookingData)
      // });

      console.log("Booking submitted:", bookingData);

      setBookingComplete(true);
      setCurrentStep(4);
    } catch (error) {
      console.error("Booking error:", error);
      alert(
        "Failed to book consultation. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`mt-[100px] min-h-screen transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Section */}
      <section className='relative py-20 overflow-hidden border-b-2 border-s2'>
        <div className='absolute inset-0 bg-gradient-to-br from-p1/5 via-s1 to-p3/5'></div>
        <div className='container px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-p1/10 border border-p1/20 rounded-full mb-6'>
              <span className='text-2xl'>📅</span>
              <span className='text-p1 text-sm font-medium uppercase tracking-wider'>
                Free 30-Minute Consultation
              </span>
            </div>

            <h1 className='h1 max-lg:h2 text-p4 mb-6'>
              Book Your Free{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-p1 to-p3'>
                Consultation
              </span>
            </h1>

            <p className='body-1 text-p5 mb-8 max-w-2xl mx-auto'>
              Schedule a complimentary consultation with our experts. Discuss
              your project, explore solutions, and get actionable insights — no
              strings attached.
            </p>

            {/* Progress Steps */}
            <div className='flex justify-center items-center gap-4 max-w-2xl mx-auto'>
              {[
                { num: 1, label: "Service" },
                { num: 2, label: "Date & Time" },
                { num: 3, label: "Your Details" },
                { num: 4, label: "Confirm" },
              ].map((step, index) => (
                <div key={step.num} className='flex items-center'>
                  <div className='flex flex-col items-center'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        currentStep >= step.num
                          ? "bg-gradient-to-r from-p1 to-p3 text-black"
                          : "bg-s3 text-p5"
                      }`}
                    >
                      {step.num}
                    </div>
                    <span className='text-xs text-p5 mt-2 max-sm:hidden'>
                      {step.label}
                    </span>
                  </div>
                  {index < 3 && (
                    <div
                      className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                        currentStep > step.num ? "bg-p1" : "bg-s3"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Form */}
      <section className='py-20'>
        <div className='container px-4'>
          <div className='max-w-4xl mx-auto'>
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className='animate-slide-up'>
                <h2 className='h3 text-p4 mb-4 text-center'>
                  What can we help you with?
                </h2>
                <p className='text-p5 text-center mb-10'>
                  Select the service you&apos;re interested in
                </p>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
                  {serviceTypes.map((service) => (
                    <button
                      key={service.value}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          serviceType: service.value,
                        }));
                        setErrors((prev) => ({ ...prev, serviceType: "" }));
                      }}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                        formData.serviceType === service.value
                          ? "border-p1 bg-p1/10"
                          : "border-s3 bg-s2 hover:border-p1/50"
                      }`}
                    >
                      <div className='text-4xl mb-3'>{service.icon}</div>
                      <h3 className='h6 text-p4 mb-2'>{service.label}</h3>
                      <p className='text-p5 text-sm'>{service.description}</p>
                    </button>
                  ))}
                </div>

                {errors.serviceType && (
                  <p className='text-red-500 text-sm text-center mb-4'>
                    {errors.serviceType}
                  </p>
                )}

                <div className='flex justify-end'>
                  <button
                    onClick={handleNext}
                    className='px-8 py-4 bg-gradient-to-r from-p1 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300'
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {currentStep === 2 && (
              <div className='animate-slide-up'>
                <h2 className='h3 text-p4 mb-4 text-center'>
                  Choose your preferred date & time
                </h2>
                <p className='text-p5 text-center mb-10'>
                  Select a date and time that works best for you
                </p>

                {/* Date Selection */}
                <div className='mb-8'>
                  <h3 className='h6 text-p4 mb-4'>Select Date</h3>
                  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3'>
                    {availableDates.map((date, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedDate(date);
                          setErrors((prev) => ({ ...prev, selectedDate: "" }));
                        }}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          selectedDate?.toDateString() === date.toDateString()
                            ? "border-p1 bg-p1/10"
                            : "border-s3 bg-s2 hover:border-p1/50"
                        }`}
                      >
                        <div className='text-center'>
                          <div className='text-p5 text-xs mb-1'>
                            {date.toLocaleDateString("en-US", {
                              weekday: "short",
                            })}
                          </div>
                          <div className='text-p4 font-bold text-lg'>
                            {date.getDate()}
                          </div>
                          <div className='text-p5 text-xs'>
                            {date.toLocaleDateString("en-US", {
                              month: "short",
                            })}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.selectedDate && (
                    <p className='text-red-500 text-sm mt-2'>
                      {errors.selectedDate}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div className='mb-8'>
                    <h3 className='h6 text-p4 mb-4'>Select Time</h3>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3'>
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.value}
                          onClick={() => {
                            setSelectedTime(slot.value);
                            setErrors((prev) => ({
                              ...prev,
                              selectedTime: "",
                            }));
                          }}
                          className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 text-sm ${
                            selectedTime === slot.value
                              ? "border-p1 bg-p1/10 text-p1"
                              : "border-s3 bg-s2 text-p4 hover:border-p1/50"
                          }`}
                        >
                          {slot.display}
                        </button>
                      ))}
                    </div>
                    {errors.selectedTime && (
                      <p className='text-red-500 text-sm mt-2'>
                        {errors.selectedTime}
                      </p>
                    )}
                  </div>
                )}

                <div className='flex justify-between'>
                  <button
                    onClick={handleBack}
                    className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 transition-all duration-300 font-semibold'
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className='px-8 py-4 bg-gradient-to-r from-p1 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300'
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details */}
            {currentStep === 3 && (
              <div className='animate-slide-up'>
                <h2 className='h3 text-p4 mb-4 text-center'>
                  Tell us about yourself
                </h2>
                <p className='text-p5 text-center mb-10'>
                  We&apos;ll use this information to prepare for our call
                </p>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    {/* Name */}
                    <div>
                      <label className='block text-p4 mb-2 font-medium'>
                        Full Name *
                      </label>
                      <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-s2 border-2 rounded-xl text-p4 focus:outline-none focus:border-p1 transition-colors ${
                          errors.name ? "border-red-500" : "border-s3"
                        }`}
                        placeholder='John Doe'
                      />
                      {errors.name && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className='block text-p4 mb-2 font-medium'>
                        Email Address *
                      </label>
                      <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-s2 border-2 rounded-xl text-p4 focus:outline-none focus:border-p1 transition-colors ${
                          errors.email ? "border-red-500" : "border-s3"
                        }`}
                        placeholder='john@company.com'
                      />
                      {errors.email && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-6'>
                    {/* Phone */}
                    <div>
                      <label className='block text-p4 mb-2 font-medium'>
                        Phone Number *
                      </label>
                      <input
                        type='tel'
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-s2 border-2 rounded-xl text-p4 focus:outline-none focus:border-p1 transition-colors ${
                          errors.phone ? "border-red-500" : "border-s3"
                        }`}
                        placeholder='+1 (555) 000-0000'
                      />
                      {errors.phone && (
                        <p className='text-red-500 text-sm mt-1'>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className='block text-p4 mb-2 font-medium'>
                        Company Name (Optional)
                      </label>
                      <input
                        type='text'
                        name='company'
                        value={formData.company}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 bg-s2 border-2 border-s3 rounded-xl text-p4 focus:outline-none focus:border-p1 transition-colors'
                        placeholder='Your Company'
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className='block text-p4 mb-2 font-medium'>
                      Additional Information (Optional)
                    </label>
                    <textarea
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className='w-full px-4 py-3 bg-s2 border-2 border-s3 rounded-xl text-p4 focus:outline-none focus:border-p1 transition-colors resize-none'
                      placeholder='Tell us more about your project or any specific questions you have...'
                    ></textarea>
                  </div>

                  <div className='flex justify-between'>
                    <button
                      type='button'
                      onClick={handleBack}
                      className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 transition-all duration-300 font-semibold'
                    >
                      Back
                    </button>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='px-8 py-4 bg-gradient-to-r from-p1 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      {isSubmitting ? "Booking..." : "Confirm Booking"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && bookingComplete && (
              <div className='animate-slide-up text-center'>
                <div className='mb-8'>
                  <div className='w-20 h-20 bg-gradient-to-r from-p1 to-p3 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <svg
                      className='w-10 h-10 text-black'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={3}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>

                  <h2 className='h2 text-p4 mb-4'>Booking Confirmed! 🎉</h2>
                  <p className='text-p5 text-lg mb-8'>
                    Your consultation has been successfully scheduled
                  </p>
                </div>

                {/* Booking Summary */}
                <div className='bg-gradient-to-br from-s2 to-s1 border-2 border-s3 rounded-2xl p-8 max-w-2xl mx-auto mb-8'>
                  <h3 className='h5 text-p4 mb-6'>Booking Details</h3>
                  <div className='space-y-4 text-left'>
                    <div className='flex items-start gap-3'>
                      <span className='text-2xl'>📅</span>
                      <div>
                        <div className='text-p5 text-sm'>Date</div>
                        <div className='text-p4 font-semibold'>
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='text-2xl'>⏰</span>
                      <div>
                        <div className='text-p5 text-sm'>Time</div>
                        <div className='text-p4 font-semibold'>
                          {
                            timeSlots.find(
                              (slot) => slot.value === selectedTime
                            )?.display
                          }
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='text-2xl'>
                        {
                          serviceTypes.find(
                            (s) => s.value === formData.serviceType
                          )?.icon
                        }
                      </span>
                      <div>
                        <div className='text-p5 text-sm'>Service</div>
                        <div className='text-p4 font-semibold'>
                          {
                            serviceTypes.find(
                              (s) => s.value === formData.serviceType
                            )?.label
                          }
                        </div>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <span className='text-2xl'>👤</span>
                      <div>
                        <div className='text-p5 text-sm'>Contact</div>
                        <div className='text-p4 font-semibold'>
                          {formData.name}
                        </div>
                        <div className='text-p5 text-sm'>{formData.email}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-p1/10 border border-p1/20 rounded-xl p-6 max-w-2xl mx-auto mb-8'>
                  <p className='text-p4'>
                    📧 A confirmation email has been sent to{" "}
                    <span className='font-semibold text-p1'>
                      {formData.email}
                    </span>
                  </p>
                  <p className='text-p5 text-sm mt-2'>
                    You&apos;ll receive a calendar invite and meeting link
                    shortly.
                  </p>
                </div>

                <div className='flex flex-wrap gap-4 justify-center'>
                  <Link
                    to='/'
                    className='px-8 py-4 bg-gradient-to-r from-p1 to-p3 rounded-full text-black font-semibold hover:scale-105 transition-all duration-300'
                  >
                    Back to Home
                  </Link>
                  <Link
                    to='/blog'
                    className='px-8 py-4 border-2 border-s3 rounded-full text-p4 hover:border-p1 transition-all duration-300 font-semibold'
                  >
                    Read Our Blog
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      {currentStep < 4 && (
        <section className='py-20 bg-s1/50 border-t-2 border-s2'>
          <div className='container px-4'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='h3 text-p4 mb-4 text-center'>
                What to Expect in Your Consultation
              </h2>
              <p className='text-p5 text-center mb-12 max-w-2xl mx-auto'>
                Here&apos;s how we&apos;ll make the most of our 30 minutes
                together
              </p>

              <div className='grid md:grid-cols-3 gap-8'>
                {[
                  {
                    icon: "🎯",
                    title: "Understand Your Goals",
                    description:
                      "We'll discuss your vision, challenges, and what success looks like for your project.",
                  },
                  {
                    icon: "💡",
                    title: "Explore Solutions",
                    description:
                      "Get expert recommendations tailored to your needs, budget, and timeline.",
                  },
                  {
                    icon: "📋",
                    title: "Next Steps",
                    description:
                      "Receive a clear action plan with timelines, costs, and how we can move forward together.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='bg-s2 border-2 border-s3 rounded-2xl p-6 hover:border-p1 transition-all duration-300 text-center'
                  >
                    <div className='text-5xl mb-4'>{item.icon}</div>
                    <h3 className='h6 text-p4 mb-3'>{item.title}</h3>
                    <p className='text-p5 text-sm'>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className='mt-12 text-center'>
                <p className='text-p5 mb-4'>
                  <span className='text-p1 font-semibold'>
                    No pressure, no obligations.
                  </span>{" "}
                  Just honest advice from technical experts who care about your
                  success.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BookConsultation;
