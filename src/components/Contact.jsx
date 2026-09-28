/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiGmail,
} from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dymbwbn",      // ⚠️ your service ID
        "template_r752neo",     // ⚠️ your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "nohPlsYDBfHot5_Ih"     // ⚠️ your public key
      )
      .then(() => {
        alert("Message sent successfully! I'll get back to you soon 🚀");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send message. Try again!");
      });
  };

  return (
    <section
      id="contact"
      className="p-3 sm:p-4 md:p-5 mx-2 sm:mx-4 md:mx-5 lg:mx-10 xl:mx-20 mb-6 sm:mb-8 md:mb-10 font-['Poppins']"
    >
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-3xl sm:text-4xl md:text-5xl text-center mb-2">
        Contact Me
      </h1>
      <p className="text-center text-blue-600 dark:text-cyan-400 font-medium mb-10">
        Let's Connect !
      </p>

      {/* Main Wrapper */}
      <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 md:gap-10 bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040f] dark:to-[#0B274C] rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">

        {/* LEFT SIDE — Info Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-[#00040f] dark:text-slate-300 gap-4 sm:gap-5">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get In Touch</h2>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 text-xl sm:text-2xl mb-3">
            <a
              href="https://www.linkedin.com/in/karanlkhani/"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://github.com/karan-Lakhani"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.instagram.com/karan_lkhani/"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <SiInstagram />
            </a>
            <a
              href="mailto:karanlakhani2712@gmail.com"
              className="hover:text-red-500 dark:hover:text-red-400 transition"
            >
              <SiGmail />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="flex-shrink-0" />
            <span className="break-all">+65 84830286</span>
          </div>
          <div className="flex items-center gap-3">
            <SiGmail className="flex-shrink-0" />
            <span className="break-all">karanlakhani2712@gmail.com</span>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="flex-shrink-0 mt-1" />
            <span className="break-words">
              Singapore - 529891
            </span>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="w-full md:w-1/2 bg-white/90 dark:bg-slate-800/50 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-inner border border-slate-300 dark:border-slate-700 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="mt-2 py-3 px-5 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-white dark:text-[#00040f] font-semibold text-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="text-[#00040f] dark:text-slate-300 text-center mt-10 tracking-wider capitalize text-sm">
        Made with 💙 by Karan Lakhani & the Open Source Community
      </p>
    </section>
  );
};

export default Contact;
