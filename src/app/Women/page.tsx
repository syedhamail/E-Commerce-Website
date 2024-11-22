"use client";

import Link from "next/link";
import Header from "../header/page";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

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

export default function Women() {
  return (
    <main>
      <Header />

      <section>
        <div className="bg-white container px-5 py-10 mx-auto">
          <h1 className="text-slate-800 text-6xl ml-2 mb-10 font-bold">
            Women
          </h1>

          <div className="flex flex-wrap -m-4">
            {/*1st line*/}
            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 w-full">
              <Link
                href={"Components/Womens/WomenBlueTraining"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg"
                />
              </Link>
              <div className="mt-5">
                <Link href={"Components/Womens/WomenBlueTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Blue Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$69.90 </del>
                  $60.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-20  w-full">
              <Link
                href={"Components/Womens/WomenCandyCityRun"}
                className="block relative w-96 h-96  rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-400x400.jpg"
                />
              </Link>

              <div className="mt-5">
                <Link href={"Components/Womens/WomenCandyCityRun"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24 ">
                    Women’s Candy City Run
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$54.90 </del>
                  $40.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-20 w-full">
              <Link
                href={"Components/Womens/WomenChocoCityRun"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-013-400x400.jpg"
                />
              </Link>
              <div className="mt-5">
                <Link href={"Components/Womens/WomenChocoCityRun"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Choco City Run
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $64.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/*2nd line*/}

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenCreamSuede"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-015-400x400.jpg"
                />
              </Link>
              <div className="mt-4">
                <Link href={"Components/Womens/WomenCreamSuede"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Cream Suede
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $59.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenGreenTraining"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenGreenTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women's Green Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$64.90 </del>
                  $49.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenMintSneaker"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenMintSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Mint Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $89.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/*3rd line*/}

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenOrangeSneaker"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-009-400x400.jpg"
                />
              </Link>
              <div className="mt-4">
                <Link href={"Components/Womens/WomenOrangeSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Orange Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $44.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenPeachTraining"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenPeachTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Peach Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$69.90 </del>
                  $57.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenPinkSuede"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-016-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenPinkSuede"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Pink Suede
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $59.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/*4th line*/}

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenPinkTraining"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
                />
              </Link>
              <div className="mt-4">
                <Link href={"Components/Womens/WomenPinkTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Pink Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$64.90 </del>
                  $54.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenTanSneaker"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenTanSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Tan Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$89.90 </del>
                  $80.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link
                href={"Components/Womens/WomenToscaCityRun"}
                className="block relative w-96 h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-012-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenToscaCityRun"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Women’s Tosca City Run
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $64.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*SP EP FR*/}

      <div className="flex justify-center mt-12 mb-12">
        <FaLock className="mt-3 w-5 h-5 mr-3" />
        <h1 className="mt-2 mr-32 text-xl font-thin ">Secure Payment</h1>

        <h1 className="mr-32 mt-2 text-gray-300 font-bold">|</h1>

        <MdLocalShipping className="mt-3 w-6 h-6 mr-3" />
        <h1 className="mt-2 mr-32 text-xl font-thin ">Express Shipping</h1>

        <h1 className="mr-32 mt-2 text-gray-300">|</h1>

        <FaSyncAlt className="mt-3 w-5 h-5 mr-3" />
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
  );
}
