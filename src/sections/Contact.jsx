import React from "react";
import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Button from "../components/Button";
import { Element } from "react-scroll";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    plan: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Fixed handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // Use name, not e.target.name
  };

  // show alert
  const ShowAlert = () => {
    Swal.fire({
      title: "Thank you! We Will get back to you as soon as possible!",
      icon: "success",
      draggable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Add validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields");
      setLoading(false);
      return;
    }

    // Initialize EmailJS
    emailjs.init("SVcmK9kMb8wX0RSQa");

    emailjs
      .send(
        "service_qi5vmts",
        "template_mscva2n",
        {
          from_name: form.name,
          to_name: "Max",
          from_email: form.email,
          to_email: "mohamed.aref32@gmail.com",
          message: form.message,
          plan: form.plan || "Not specified", // Include plan field
        },
        "SVcmK9kMb8wX0RSQa"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        // Reset form
        setForm({
          name: "",
          email: "",
          plan: "",
          message: "",
        });

        // Reset form element
        if (formRef.current) {
          formRef.current.reset();
        }

        setLoading(false);
        ShowAlert(); // Remove parameter
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setLoading(false);

        // Better error logging
        console.log("Error details:", {
          status: err.status,
          text: err.text,
          message: err.message,
        });

        alert(
          `Failed to send message: ${
            err.text || err.message || "Unknown error"
          }`
        );
      });
  };

  return (
    <section className='g7 sm:mx-auto'>
      <Element name='contact' className='relative'>
        <div className='container'>
          <div className='mt-0 overflow-hidden xl:flex-row flex gap-10'>
            <div className='flex-[0.75] p-12 rounded-2xl'>
              <p className='sectionSubText'>Get in touch</p>
              <h3 className='sectionHeadText text-[#79f0da]'>Contact.</h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col gap-8 mt-12 '
              >
                <label className='flex flex-col'>
                  <span className='font-medium mb-4 small-compact uppercase text-s3'>
                    Your Name *
                  </span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black text-base font-medium rounded-lg border-spacing-2 border-[#79f0da]'
                    required
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='small-compact uppercase text-s3 font-medium mb-4'>
                    Your email *
                  </span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Your email'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black text-base font-medium rounded-lg outlined-none border-none'
                    required
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='small-compact uppercase text-s3 font-medium mb-4'>
                    Your plan of choice
                  </span>
                  <input
                    type='text'
                    name='plan'
                    value={form.plan}
                    onChange={handleChange}
                    placeholder='What is the plan of choice?'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black text-base font-medium rounded-lg outlined-none border-none'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='small-compact uppercase text-s3 font-medium mb-4'>
                    Your Message *
                  </span>
                  <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Your message'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black text-base font-medium rounded-lg outlined-none border-2 border-s3'
                    required
                  />
                </label>
                <div className='flex justify-center'>
                  <Button
                    type='submit'
                    containerClassName='w-[500px] max-w-full'
                    disabled={loading}
                  >
                    <span className='text-center'>
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
