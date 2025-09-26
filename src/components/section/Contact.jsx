import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false); // Success alert state
  const [error, setError] = useState(false); // Error alert state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_qaaf1qg",
        "template_jq7021s",
        templateParams,
        "QWJkr_3fxiqYqi8rQ"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccess(true); // Show success alert
          setError(false); // Hide error alert
          setFormData({ name: "", email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("Error sending email:", error);
          setSuccess(false); // Hide success alert
          setError(true); // Show error alert
        }
      );
  };

  const closeModal = () => {
    setSuccess(false);
    setError(false);
  };

  return (
    <div
      id="contact"
      className={`bg-none ${darkMode ? "text-white" : "text-black"}`}
    >
      <div className="max-w-5xl px-4 py-10 mx-auto xl:px-0 lg:py-20">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-2xl font-semibold md:text-4xl md:leading-tight">
            Get in Touch
          </h2>
          <p className={`mt-1 ${darkMode ? "text-gray-400" : "text-gray-900"}`}>
            Whether you're looking to start a new project, need assistance with
            your web development, or want to collaborate on something creative,
            I'm here to help. Drop me a message, and let’s make your vision come
            to life!
          </p>
        </div>

        {/* Success and Error Floating Alerts */}
        {success && (
          <div className="fixed z-50 w-full max-w-xs p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg left-1/2 top-1/2 bg-teal-50 dark:bg-teal-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center text-teal-800 bg-teal-200 border-4 border-teal-100 rounded-full size-8 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                <div className="ms-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Successfully sent.
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-neutral-400">
                    Your message has been sent successfully.
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal} // Fixed the button to call closeModal
                className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="fixed z-50 w-full max-w-xs p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg left-1/2 top-1/2 bg-red-50 dark:bg-red-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center text-red-800 bg-red-200 border-4 border-red-100 rounded-full size-8 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
                <div className="ms-3">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Error!
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-neutral-400">
                    Oops! Something went wrong. Please try again later.
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal} // Fixed the button to call closeModal
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="pb-10 mb-10 border-b md:order-2 border-neutral-800 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name input */}
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`peer p-3 sm:p-4 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2 ${
                        darkMode
                          ? "bg-neutral-800 text-neutral-500"
                          : "bg-neutral-300 text-neutral-800"
                      }`}
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-not-placeholder-shown:text-xs
                      peer-not-placeholder-shown:-translate-y-1.5
                      peer-not-placeholder-shown:text-neutral-400 ${
                        darkMode ? "text-neutral-400" : "text-neutral-700"
                      }`}
                  >
                    Name
                  </label>
                </div>

                {/* Email input */}
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`peer p-3 sm:p-4 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2 ${
                        darkMode
                          ? "bg-neutral-800"
                          : "bg-neutral-300 text-neutral-900"
                      }`}
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-not-placeholder-shown:text-xs
                      peer-not-placeholder-shown:-translate-y-1.5
                      peer-not-placeholder-shown:text-neutral-400 ${
                        darkMode ? "text-neutral-400" : "text-neutral-700"
                      }`}
                  >
                    Email
                  </label>
                </div>

                {/* Message input */}
                <div className="relative">
                  <textarea
                    required
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`peer p-3 sm:p-4 block w-full border-transparent rounded-lg sm:text-sm placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      not-placeholder-shown:pt-6
                      not-placeholder-shown:pb-2
                      autofill:pt-6
                      autofill:pb-2 ${
                        darkMode
                          ? "bg-neutral-800 text-white"
                          : "bg-neutral-300 text-neutral-900"
                      }`}
                    placeholder="Message"
                    data-hs-textarea-auto-height
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute top-0 start-0 p-3 sm:p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-not-placeholder-shown:text-xs
                      peer-not-placeholder-shown:-translate-y-1.5
                      peer-not-placeholder-shown:text-neutral-400 ${
                        darkMode ? "text-neutral-400" : "text-neutral-700"
                      }`}
                  >
                    Send message
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required
                </p>

                <p className="mt-5">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#E3B555] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                  >
                    Submit
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div
            className={`space-y-14 ${
              darkMode ? "text-neutral-400" : "text-gray-900"
            }`}
          >
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold">Address:</h4>

                <address className="mt-1 text-sm not-italic">
                  Sampaga, San Antonio
                  <br />
                  Quezon, Philippines
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold">Email:</h4>

                <a
                  className="mt-1 text-sm focus:outline-hidden"
                  href="#mailto:jorencemendoza2@gmail.com"
                  target="_blank"
                >
                  jorencemendoza2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold">
                  Let's Build Something Amazing Together!
                </h4>
                <p className="mt-1">
                  With a passion for both art and technology, I bring creative
                  solutions and a sharp eye for design to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
