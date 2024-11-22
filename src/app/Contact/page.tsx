'use client';

import { useState } from "react";
import Link from "next/link";

import Header from "../header/page";

import { FaMobileScreenButton } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import { FaLock } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaSyncAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaCcStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiMastercard } from "react-icons/si";


export default function Contact(){

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

    return(
        <main>
            <Header/>

            {/*Contact*/}

            <div className="bg-white text-center mt-10">
                <h1 className="contactText">Contact</h1>
            </div>

        <div className="bg-zinc-200 pb-5 ml-7 mr-7 pt-10 flex">
        <br />
        <br />
        <br />

        <div>
        <div className="mt-10 ml-10">
           <span className="flex">
           <FaMobileScreenButton className="w-6 h-6 mt-1 mr-3 text-slate-800"/>
           <h1 className="text-2xl">Products & order</h1>
           </span>
           <span>
            <h1 className="text-gray-400 text-lg ml-9 mt-2">(+92) 336-335-1905</h1>
            <h1 className="text-gray-400 text-lg ml-9">available 24/7</h1>
           </span>
        </div>

        <div className="mt-10 ml-10">
           <span className="flex">
           <FaMobileScreenButton className="w-6 h-6 mt-1 mr-3 text-slate-800"/>
           <h1 className="text-2xl">Info & enquiries</h1>
           </span>
           <span>
            <h1 className="text-gray-400 text-lg ml-9 mt-2">(+92) 336-335-1905</h1>
            <h1 className="text-gray-400 text-lg ml-9">available 24/7</h1>
           </span>
        </div>

        <div className="mt-10 ml-10">
           <a href="https://www.google.com/maps" className="flex">
           <IoLocationSharp className="w-6 h-6 mt-1 mr-3 text-slate-800"/>
           <h1 className="text-2xl">Store locator</h1>
           </a>
           <span>
            <h1 className="text-gray-400 text-xl ml-9 mt-2">Find our retail near you</h1>
           </span>
        </div>

        <div className="mt-10 ml-10 mb-10">
            <h1 className="font-bold ml-3 text-xl text-slate-800">Stay in touch</h1>
            <span className="flex ml-2 mt-5">
              <a href="https://www.facebook.com/"><FaFacebook className="w-6 h-5"/></a>
              <a href="https://www.twitter.com/"><FaXTwitter className="w-6 h-5 ml-5"/></a>
              <a href="https://www.youtube.com/"><FaYoutube className="w-6 h-5 ml-5"/></a>
            </span>
        </div>
        </div>

    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mr-80">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-xl font-bold text-gray-500 flex">Name<p className="text-red-500 ml-1">*</p></label>
        <input type="text" id="name" name="name" className="w-full mt-1 bg-white rounded border border-gray-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-xl font-bold text-gray-500 flex">Email<p className="text-red-500 ml-1">*</p></label>
        <input type="email" id="email" name="email" className="w-full mt-1 bg-white rounded border border-gray-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-xl font-bold text-gray-500 flex">Message<p className="text-red-500 ml-1">*</p></label>
        <textarea id="message" name="message" className="w-full mt-1 bg-white rounded border border-gray-500 text-base outline-none text-black h-32 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white font-bold bg-slate-800 border-0 py-2 px-6 w-48 focus:outline-none hover:bg-slate-900 rounded">SEND MESSAGE</button>
    </div>
    </div>
    <br />

        {/* FAQs Section */}
      <section id="faqs" className="bg-gray-100 py-16 ml-48 mr-48 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-slate-800 mb-8">Frequently Asked Questions (FAQs)</h2>

          <div className="space-y-4 mt-1">

            {/* FAQ Item 1 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(0)}
              >
                What products do you offer?
              </button>
              {activeIndex === 0 && (
                <p className="text-gray-600 mt-2 text-center">
                  We offer a wide variety of shoes, ranging from casual, formal,<br/>
                  sports, and trendy styles for men's and women's.<br/>
                  Please explore our collection to find the perfect pair<br/>
                  that suits your style and comfort.<br/>
                </p>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(1)}
              >
                How can I track my order?
              </button>
              {activeIndex === 1 && (
                <p className="text-gray-600 mt-2 text-center">
                  You can track your order by logging into your<br/>
                  account and visiting the "Order History" section.<br/>
                  You will find tracking information for each of your orders there.<br/>
                </p>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(2)}
              >
                What are your store hours?
              </button>
              {activeIndex === 2 && (
                <p className="text-gray-600 mt-2 text-center">
                  Our store is open from 10:00 AM to 10:00 PM,<br/>
                  Monday to Saturday.<br/>
                  We are closed on Sundays.<br/>
                </p>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-300">
              <button
                className="text-center w-full py-3 text-xl font-medium text-slate-800"
                onClick={() => toggleFAQ(3)}
              >
                Can I return a product?
              </button>
              {activeIndex === 3 && (
                <p className="text-gray-600 mt-2 text-center">
                  Yes, you can return most products within 30 days of purchase.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

        {/*SP EP FR*/}

        <div className="flex justify-center mt-28 mb-12">
          <FaLock className="mt-3 w-5 h-5 mr-3"/>
          <h1 className="mt-2 mr-32 text-xl font-thin ">Secure Payment</h1>

          <h1 className="mr-32 mt-2 text-gray-300 font-bold">|</h1>

          <MdLocalShipping  className="mt-3 w-6 h-6 mr-3"/>
          <h1 className="mt-2 mr-32 text-xl font-thin ">Express Shipping</h1>

          <h1 className="mr-32 mt-2 text-gray-300">|</h1>

          <FaSyncAlt className="mt-3 w-5 h-5 mr-3"/>
          <h1 className="mt-2 text-xl font-thin ">Free Return</h1>
          </div>

      <div className="bg-gray-500 opacity-15 pb-0.5 ml-20 mr-20"></div>
      <br />

        {/*Footer*/}

        <footer className="text-gray-400  body-font">
  <div className=" container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">

        <span className="font-bold text-2xl text-black">SHMUQ SHOE</span>
      </a>
      <br/>
      <p className="mt-2  text-gray-400 text-xl">
        Praesent eget tortor sit risus  
        egestas nulla pharetra ornare  
        quis bibendum est bibendum 
        sapien proin nascetu</p>

      <div className="flex mt-10">
          <a href="https://www.instagram.com/"><AiFillInstagram className="w-7 h-7 text-gray-800" /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin className="w-5 h-7 ml-3 text-gray-800"/> </a>
          <a href="https://www.facebook.com/"><FaFacebook className="w-5 h-7 ml-3 text-gray-800"/></a>
          <a href="https://www.twitter.com/"><RiTwitterXFill className="w-5 h-7 ml-3 text-gray-800"/></a>
      </div>

    </div>

    <div className="flex-grow flex flex-wrap md:pl-32 -mb-10 md:mt-0 mt-10 ml-3 md:text-left text-center">

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-black tracking-widest text-2xl mb-3">SHOP</h2>
        <br/>
        <nav className="list-none mb-10">
          <li>
            <Link href={"/Men"} className="text-gray-500 hover:text-black text-xl">Shop Men</Link>
          </li>
          <li>
            <Link href={"/Women"} className="text-gray-500 hover:text-black text-xl">Shop Women</Link>
          </li>
          <li>
            <Link href={"Sale"} className="text-gray-500 hover:text-black text-xl">Sale</Link>
          </li>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ml-10">
        <h2 className="title-font font-medium text-black tracking-widest text-2xl mb-3">About</h2>
        <br />
        <nav className="list-none mb-10">
        <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Our Story</a>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Our Materials</a>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Our Value</a>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Sustainability</a>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Manufacture</a>
          </li>
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ml-10">
        <h2 className="title-font font-medium text-black tracking-widest text-2xl mb-3">Need Help?</h2>
        <br />
        <nav className="list-none mb-10">
          <li>
            <Link href={"/Contact#faqs"} className="text-gray-500 hover:text-black text-xl">FAQs</Link>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Shipping & Returns</a>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Shoe Care</a>
          </li>
          <li>
            <a href="" className="text-gray-500 hover:text-black text-xl">Size Chart</a>
          </li>
          <li>
            <Link href={"/Contact"} className="text-gray-500 hover:text-black text-xl">Contact</Link>
          </li>
        </nav>
      </div>

    </div>
  </div>

  

  <div className="bg-gray-200 ">
    <div className="container mx-auto py-4 px-5 pt-10 pb-10 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 font-normal text-center sm:text-left">© 2024 SHMUQ Shoe Store. Powered by SHMUQ Shoe Store.
      </p>

      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      
      <FaCcStripe className="w-7 h-7 mr-5 text-blue-400" />
      <FaCcPaypal className="w-7 h-7 mr-5 text-blue-700"/>
      <FaCcVisa className="w-7 h-7 mr-5 text-blue-700"/>
      <SiMastercard className="w-7 h-7 mr-5 text-red-500" />
        
      </span>
    </div>
  </div>
      </footer>
        </main>
    )
}