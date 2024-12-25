"use client";

import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


export default function Men() {
  return (
    <main>
      {/*Header*/}

      <Header />

      {/*Men's Shoes*/}

      <section className="mb-20">
        <div className="bg-white container px-5 py-10 mx-auto">
          <h1 className="flex justify-center text-slate-800 text-6xl ml-2 mb-10 font-bold">
            Men{`'`}s
          </h1>

          <div className="flex flex-wrap -m-4 justify-center">
            {/* 1st line */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenBlackRunning"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenBlackRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Black Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  $79.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenClassicBlue"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-019-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenClassicBlue"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Classic Blue
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$79.90 </del>
                  $69.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenClassicMint"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenClassicMint"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Classic Mint
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  $79.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* 2nd line */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenEarthToneSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenEarthToneSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Earth-Tone Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenGreenRunning"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenGreenRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Green Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$104.90 </del>
                  $89.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenMoonstoneSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenMoonstoneSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Moonstone Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* 3rd line */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenNavyRunning"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenNavyRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Navy Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  $79.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Mens/MenRedRunning"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-006-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Mens/MenRedRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Men’s Red Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$79.90 </del>
                  $69.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/*Footer*/}

      <Footer />

    </main>
  );
}
