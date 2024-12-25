"use client";

import Link from "next/link";

import { FaLock } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaSyncAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaCcStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";

export default function Footer() {
  return (
    <main>
      {/*Shop Men and Women*/}

      <section className="relative">
        {/* Background Image */}
        <div className="flex">
          <img
            src="https://www.bxxyshoe.in/cdn/shop/files/IMG_8592.jpg?v=1696848986"
            className="w-full max-h-[500px] object-cover opacity-80"
            alt="Background"
          />
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Better for People & the Planet
          </h1>
          <p className="mt-4 text-base md:text-xl text-gray-900 max-w-2xl">
            Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est
            dictum in vulputate
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <Link
              href={"/Men"}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              SHOP MEN
            </Link>
            <Link
              href={"/Women"}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              SHOP WOMEN
            </Link>
          </div>
        </div>
      </section>

      {/*SP EP FR*/}

      <div className="flex flex-wrap justify-center items-center gap-8 mt-16 mb-12 text-center">
        {/* Secure Payment */}
        <div className="flex items-center gap-2">
          <FaLock className="w-5 h-5 text-gray-700" />
          <h1 className="text-lg font-thin">Secure Payment</h1>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-6 border-l-2 border-gray-300"></div>

        {/* Express Shipping */}
        <div className="flex items-center gap-2">
          <MdLocalShipping className="w-6 h-6 text-gray-700" />
          <h1 className="text-lg font-thin">Express Shipping</h1>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-6 border-l-2 border-gray-300"></div>

        {/* Free Return */}
        <div className="flex items-center gap-2">
          <FaSyncAlt className="w-5 h-5 text-gray-700" />
          <h1 className="text-lg font-thin">Free Return</h1>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="bg-gray-500 opacity-30 h-0.5 mx-8"></div>
      <br />

      {/*Footer*/}

      <footer className="text-gray-400 body-font">
        <div className="container px-5 py-12 mx-auto">
          {/* Top Section: Logo and Description */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
              <Link
                href={"/"}
                className="flex title-font font-medium items-center justify-center md:justify-start text-black"
              >
                <span className="font-bold text-2xl">SHMUQ SHOE</span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                Praesent eget tortor sit risus egestas nulla pharetra ornare
                quis bibendum est bibendum sapien proin nascetu
              </p>
              <div className="flex justify-center md:justify-start mt-4 space-x-3">
                <a href="https://www.instagram.com/" className="text-gray-800">
                  <AiFillInstagram className="w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/" className="text-gray-800">
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a href="https://www.facebook.com/" className="text-gray-800">
                  <FaFacebook className="w-7 h-7" />
                </a>
                <a href="https://www.twitter.com/" className="text-gray-800">
                  <RiTwitterXFill className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="flex flex-wrap justify-between w-full md:w-3/4 mt-10">
              {/* Shop Section */}
              <div className="w-1/3 px-4">
                <h2 className="text-black tracking-widest text-lg font-medium mb-3">
                  SHOP
                </h2>
                <ul className="list-none space-y-2">
                  <li>
                    <Link
                      href="/Men"
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Shop Men
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Women"
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Shop Women
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Sale"
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Sale
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Section */}
              <div className="w-1/3 px-4">
                <h2 className="text-black tracking-widest text-lg font-medium mb-3">
                  ABOUT
                </h2>
                <ul className="list-none space-y-2">
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Our Materials
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Our Value
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Manufacture
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help Section */}
              <div className="w-1/3 px-4">
                <h2 className="text-black tracking-widest text-lg font-medium mb-3">
                  NEED HELP?
                </h2>
                <ul className="list-none space-y-2">
                  <li>
                    <Link
                      href="/Contact#faqs"
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Shipping & Returns
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Shoe Care
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Size Chart
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/Contact"
                      className="text-gray-500 hover:text-black text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="bg-gray-200">
          <div className="container mx-auto py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
            {/* Text */}
            <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
              © 2024 SHMUQ Shoe Store. Powered by SHMUQ Shoe Store.
            </p>
            {/* Icons */}
            <div className="flex justify-center sm:justify-start mt-4 sm:mt-0 space-x-5">
              <FaCcStripe className="w-7 h-7 text-blue-400" />
              <FaCcPaypal className="w-7 h-7 text-blue-700" />
              <FaCcVisa className="w-7 h-7 text-blue-700" />
              <SiMastercard className="w-7 h-7 text-red-500" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
