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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
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
        },
        "SVcmK9kMb8wX0RSQa"
      )
      .then(() => {
        setForm({ name: "", email: "", plan: "", message: "" });
        setLoading(false);
        ShowAlert();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Failed to send message. Please try again later");
      });
  };

  return (
    <section className='g7'>
      <Element name='contact' className='relative  '>
        <div className='container '>
          <div className='xl:mt-0 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <div className='flex-[0.75] p-12 pt-20 rounded-2xl'>
              <p className='sectionSubText'>Get in touch</p>
              <h3 className='sectionHeadText text-[#79f0da]'>Contact.</h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col gap-8 mt-12'
              >
                <label className='flex  flex-col '>
                  <span className='  font-medium mb-4 small-compact uppercase text-s3'>
                    Your Name
                  </span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder=' Your name'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg    font-medium  border-spacing-2 border-[#79f0da]'
                  />
                </label>
                <label className='flex  flex-col'>
                  <span className='small-compact uppercase text-s3 font-medium mb-4'>
                    Your email
                  </span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Your email'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                  />
                </label>
                <label className='flex  flex-col'>
                  <span className='small-compact uppercase text-s3 font-medium mb-4'>
                    Your plan of choice
                  </span>
                  <input
                    type='text'
                    name='plan'
                    value={form.plan}
                    onChange={handleChange}
                    placeholder='What is the plan of choice?'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                  />
                </label>
                <label className='flex  flex-col'>
                  <span className='small-compact uppercase text-s3 font-medium mb-4'>
                    Your Message
                  </span>
                  <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Your message'
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none   font-medium border-2 border-s3'
                  />
                </label>
                <div className=' flex justify-center'>
                  <Button
                    type='submit'
                    className=' '
                    containerClassName='w-[500px]'
                  >
                    <span className='text-center'>
                      {" "}
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
            {/* the earth section */}

            <div className='xl:flex-1 xl:h-auto  md:h-[550px] h-[350px]  '>
              {/* <EarthCanvas /> */}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

const alert = (message) => {
  Swal.fire({
    title: "Drag me!",
    icon: "success",
    draggable: true,
  });
};

export default Contact;
