import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        name="contact"
        className="bg-customBackground pb-9 text-white min-h-screen w-full"
      >
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-32 pt-36 flex lg:flex-row md:flex-col sm:flex-col justify-between items-center">
          <div>
            <p className="text-4xl font-extrabold mb-2">Contact</p>
            <p className="mb-6">Submit form to contact me</p>
          </div>
          <form
            action="https://getform.io/f/ea76bb31-5a76-4e07-b47d-db65449e0049"
            method="POST"
            className="flex flex-col w-1/2 "
          >
            <input
              name="name"
              type="username"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md border-gray-500 focus:outline-none text-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md border-gray-500 focus:outline-none text-white"
            />
            <textarea
              name="message"
              rows="15"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md border-gray-500 focus:outline-none text-white"
            ></textarea>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 mt-5 px-6 rounded self-start">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
