"use client";

import { useState } from "react";

import Header from "../header/page";
import Footer from "../footer/page";

import { FaMobileScreenButton } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Type for activeIndex

  // Define the type of 'index' parameter as number
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main>
      <Header />

      {/*Contact*/}

      <h1 className="flex justify-center text-slate-800 text-6xl ml-2 mb-14 mt-10 font-bold">
        Contact
      </h1>

      <div className="bg-zinc-200 pb-5 px-4 sm:px-8 lg:px-20 pt-10 flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex-1">
          <div className="mt-10">
            <span className="flex">
              <FaMobileScreenButton className="w-6 h-6 mt-1 mr-3 text-slate-800" />
              <h1 className="text-xl sm:text-2xl">Products & order</h1>
            </span>
            <span>
              <h1 className="text-gray-400 text-base sm:text-lg ml-9 mt-2">
                (+92) 336-335-1905
              </h1>
              <h1 className="text-gray-400 text-base sm:text-lg ml-9">
                available 24/7
              </h1>
            </span>
          </div>

          <div className="mt-10">
            <span className="flex">
              <FaMobileScreenButton className="w-6 h-6 mt-1 mr-3 text-slate-800" />
              <h1 className="text-xl sm:text-2xl">Info & enquiries</h1>
            </span>
            <span>
              <h1 className="text-gray-400 text-base sm:text-lg ml-9 mt-2">
                (+92) 336-335-1905
              </h1>
              <h1 className="text-gray-400 text-base sm:text-lg ml-9">
                available 24/7
              </h1>
            </span>
          </div>

          <div className="mt-10">
            <a href="https://www.google.com/maps" className="flex">
              <IoLocationSharp className="w-6 h-6 mt-1 mr-3 text-slate-800" />
              <h1 className="text-xl sm:text-2xl">Store locator</h1>
            </a>
            <span>
              <h1 className="text-gray-400 text-base sm:text-xl ml-9 mt-2">
                Find our retail near you
              </h1>
            </span>
          </div>

          <div className="mt-10 mb-10">
            <h1 className="font-bold text-xl text-slate-800">Stay in touch</h1>
            <span className="flex mt-5">
              <a href="https://www.facebook.com/">
                <FaFacebook className="w-6 h-5" />
              </a>
              <a href="https://www.twitter.com/">
                <FaXTwitter className="w-6 h-5 ml-5" />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="w-6 h-5 ml-5" />
              </a>
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 lg:ml-10">
          <div className="relative mb-4">
            <label
              htmlFor="name"
              className="leading-7 text-lg sm:text-xl font-bold text-gray-500 flex"
            >
              Name<p className="text-red-500 ml-1">*</p>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 bg-white rounded border border-gray-500 text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-lg sm:text-xl font-bold text-gray-500 flex"
            >
              Email<p className="text-red-500 ml-1">*</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full mt-1 bg-white rounded border border-gray-500 text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-lg sm:text-xl font-bold text-gray-500 flex"
            >
              Message<p className="text-red-500 ml-1">*</p>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full mt-1 bg-white rounded border border-gray-500 text-base outline-none text-black h-32 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white font-bold bg-slate-800 border-0 py-2 px-6 w-full sm:w-auto focus:outline-none hover:bg-slate-900 rounded">
            SEND MESSAGE
          </button>
        </div>
      </div>

      {/* FAQs Section */}
      <section
        id="faqs"
        className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16 xl:px-48 mt-20 mb-40"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 mb-8">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-4 mt-1">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-300">
              <button
                className="flex justify-center items-center w-full py-3 text-lg sm:text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(0)}
              >
                What products do you offer?
              </button>
              {activeIndex === 0 && (
                <p className="text-gray-600 mt-2 mb-3 text-center text-sm sm:text-base">
                  We offer a wide variety of shoes, ranging from casual, formal,
                  <br />
                  sports, and trendy styles for men{`'`}s and women{`'`}s.
                  <br />
                  Please explore our collection to find the perfect pair
                  <br />
                  that suits your style and comfort.
                  <br />
                </p>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-lg sm:text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(1)}
              >
                How can I track my order?
              </button>
              {activeIndex === 1 && (
                <p className="text-gray-600 mt-2 mb-3 text-center text-sm sm:text-base">
                  You can track your order by logging into your
                  <br />
                  account and visiting the {`"`}Order History{`"`} section.
                  <br />
                  You will find tracking information for each of your orders
                  there.
                  <br />
                </p>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-lg sm:text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(2)}
              >
                What are your store hours?
              </button>
              {activeIndex === 2 && (
                <p className="text-gray-600 mt-2 mb-3 text-center text-sm sm:text-base">
                  Our store is open from 10:00 AM to 10:00 PM,
                  <br />
                  Monday to Saturday.
                  <br />
                  We are closed on Sundays.
                  <br />
                </p>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-lg sm:text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(3)}
              >
                Can I return a product?
              </button>
              {activeIndex === 3 && (
                <p className="text-gray-600 mt-2 mb-3 text-center text-sm sm:text-base">
                  Yes, you can return most products within 30 days of purchase.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <Footer />
    </main>
  );
}
