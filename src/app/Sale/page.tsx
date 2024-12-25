"use client";

import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Sale() {
  return (
    <main>
      <Header />

      {/*Sale announcement*/}

      <div className="bg-red-600 text-center mt-5 -mb-8">
        <h1 className="saleText">Sale</h1>
      </div>

      {/*Last Pairs*/}

      <section className="mb-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <span className="flex justify-center text-black text-3xl ml-2 font-semibold">
              Last Pairs
            </span>
          </div>

          <br />

          <div className="flex flex-wrap -m-4 justify-center">
            {/* 1st line */}
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
                href={"Components/Womens/WomenTanSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Womens/WomenTanSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Women’s Tan Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
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

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Womens/WomenPeachTraining"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Womens/WomenPeachTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Women’s Peach Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
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

            {/* 2nd line */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Womens/WomenBlueTraining"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Womens/WomenBlueTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Women’s Blue Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$69.90 </del>
                  $60.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Womens/WomenCandyCityRun"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Womens/WomenCandyCityRun"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Women’s Candy City Run
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
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

            {/* 3rd line */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Womens/WomenPinkTraining"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Womens/WomenPinkTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Women’s Pink Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
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

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 w-full">
              <Link
                href={"Components/Womens/WomenGreenTraining"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-80 block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg"
                />
              </Link>
              <div className="-mt-10">
                <Link href={"Components/Womens/WomenGreenTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center">
                    Women{`'`}s Green Training
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center text-gray-500 font-semibold">
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

      {/* Footer */}

      <Footer />
    </main>
  );
}