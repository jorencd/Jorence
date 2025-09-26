import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
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

    // Adjusting templateParams to match EmailJS placeholders
    const templateParams = {
      name: name,
      email: email, // Ensure the email is captured in the template
      message: message,
    };

    // Send the email using EmailJS
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
          alert("Your message has been sent!");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="pb-10 mb-10 border-b md:order-2 border-neutral-800 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
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

          <div
            class={`space-y-14 ${
              darkMode ? "text-neutral-400" : "text-gray-900"
            }`}
          >
            <div class="flex gap-x-5">
              <svg
                class="shrink-0 size-6"
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
              <div class="grow">
                <h4 class="font-semibold">Address:</h4>

                <address class="mt-1 text-sm not-italic">
                  Sampaga, San Antonio
                  <br />
                  Quezon, Philippines
                </address>
              </div>
            </div>

            <div class="flex gap-x-5">
              <svg
                class="shrink-0 size-6"
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
              <div class="grow">
                <h4 class="font-semibold">Email:</h4>

                <a
                  class="mt-1 text-sm focus:outline-hidden"
                  href="#mailto:jorencemendoza2@gmail.com"
                  target="_blank"
                >
                  jorencemendoza2@gmail.com
                </a>
              </div>
            </div>

            <div class="flex gap-x-5">
              <svg
                class="shrink-0 size-6"
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
              <div class="grow">
                <h4 class="font-semibold">
                  Let's Build Something Amazing Together!
                </h4>
                <p class="mt-1">
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
