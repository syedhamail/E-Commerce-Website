"use client";

import React from "react";
import Link from "next/link";
import Header from "./header/page";
import Footer from "./footer/page";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main>

      {/* Header */}

      <Header />

      {/*Hero Section*/}

      <div className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"
          className="w-full h-full object-cover"
          alt="hero section img"
        />

        {/* Hero Text */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif">
            Love the Planet
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mt-2">
            we walk on
          </h2>
          <p className="text-lg sm:text-xl font-sans mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          <p className="text-lg sm:text-xl font-sans">
            ut magnam neque excepturi aut voluptas debitis eum.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href={"Men"}
              className="px-6 py-3 bg-white text-black text-sm font-bold uppercase rounded-md shadow-md hover:bg-gray-100"
            >
              SHOP MEN
            </Link>
            <Link
              href={"Women"}
              className="px-6 py-3 bg-white text-black text-sm font-bold uppercase rounded-md shadow-md hover:bg-gray-100"
            >
              SHOP WOMEN
            </Link>
          </div>
        </div>
      </div>

      {/*As seen in*/}

      <div className="px-4 sm:px-7 md:px-14 lg:px-20 py-20">
        {/* Section Title and Logos in One Line */}
        <div className="flex justify-center items-center flex-wrap">
          {/* Section Title */}
          <div className="text-left mb-6 sm:mb-0 mr-4">
            <h6 className="font-mono text-lg sm:text-xl font-semibold">
              As seen in:
            </h6>
          </div>

          {/* Logos */}
          <div className="flex justify-center items-center space-x-6">
            {/* Adidas Logo */}
            <div>
              <img
                src="https://cdn.logojoy.com/wp-content/uploads/20231013154327/Adidas-logo-1991-1-600x319.png"
                alt="adidas"
                className="w-20 sm:w-24 md:w-28"
              />
            </div>

            {/* Vogue Logo */}
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f8/VOGUE_LOGO.svg"
                alt="VOGUE"
                className="w-20 sm:w-24 md:w-28"
              />
            </div>

            {/* Nike Logo */}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbKkOfQl5qlcqYuBKR57xH3ej57nFnK36hQ&s"
                alt="nike"
                className="w-20 sm:w-24 md:w-28"
              />
            </div>

            {/* NewBalance Logo */}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lJj4hfIWzeiZ1zboA7pgBWDTxmdVSRytiw&s"
                alt="newBalance"
                className="w-20 sm:w-24 md:w-28"
              />
            </div>

            {/* Puma Logo */}
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPeqxdIlT7JYKS5W-C4Dt7YUtzjegX5pNDQ&s"
                alt="puma"
                className="w-20 sm:w-24 md:w-28"
              />
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="bg-gray-500 opacity-15 mt-6 mb-4 h-0.5"></div>
      </div>

      {/*About us*/}

      <section>
        <div className="container mx-auto px-5 py-24 flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-amber-600 text-xl font-mono mb-2.5">
              About us
            </h3>
            <h1 className="title-font text-3xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-medium text-black">
              Selected materials designed for comfort and sustainability
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ullam aspernatur cumque hic quibusdam officia
              alias illo, mollitia et vel, commodi fuga est. Nesciunt enim
              distinctio repellat incidunt pariatur dolorum recusandae.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href={"/"}>
                <span className="text-black hover:text-amber-600 font-bold">
                  READ MORE
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*how shoes are made section*/}

      <div className="bg-zinc-200 pb-5 mx-5">
        <h2 className="flex justify-center text-4xl sm:text-5xl font-semibold text-black ml-2.5 py-8">
          See how your shoes are made
        </h2>

        <p className="flex justify-center font-medium text-zinc-500 text-sm sm:text-base px-2">
          Urna, felis enim orci accumsan urna blandit egestas mattis egestas
          feugiat viverra ornare donec
        </p>

        <p className="flex justify-center font-medium text-zinc-500 text-sm sm:text-base px-2">
          adipiscing semper aliquet integer risus leo volutpat nulla enim
          ultrices
        </p>

        <div className="flex flex-wrap justify-center mt-8">
          {/* Step 01 */}
          <div className="step-container flex flex-col items-center m-4 p-4">
            <div className="text-orange-500 text-lg sm:text-xl font-semibold">
              01.
            </div>
            <div className="text-xl sm:text-2xl font-bold text-center">
              Pet Canvas
            </div>
            <div className="text-sm sm:text-base text-gray-500 font-medium mt-2 text-center">
              Morbi eget bibendum sit <br />
              adipiscing morbi ac nisl vitae <br />
              maecenas nulla cursus
            </div>
          </div>

          {/* Step 02 */}
          <div className="step-container flex flex-col items-center m-4 p-4">
            <div className="text-orange-500 text-lg sm:text-xl font-semibold">
              02.
            </div>
            <div className="text-xl sm:text-2xl font-bold text-center">
              Algae foam + vegan glue
            </div>
            <div className="text-sm sm:text-base text-gray-500 font-medium mt-2 text-center">
              Enim tincidunt donec vulputate <br />
              magna pharetra mattis in
            </div>
          </div>

          {/* Step 03 */}
          <div className="step-container flex flex-col items-center m-4 p-4">
            <div className="text-orange-500 text-lg sm:text-xl font-semibold">
              03.
            </div>
            <div className="text-xl sm:text-2xl font-bold text-center">
              Organic cotton
            </div>
            <div className="text-sm sm:text-base text-gray-500 font-medium mt-2 text-center">
              A vel ipsum, sed dignissim <br />
              elementum ultrices amet
            </div>
          </div>

          {/* Step 04 */}
          <div className="step-container flex flex-col items-center m-4 p-4">
            <div className="text-orange-500 text-lg sm:text-xl font-semibold">
              04.
            </div>
            <div className="text-xl sm:text-2xl font-bold text-center">
              Upcycled plastic bottles
            </div>
            <div className="text-sm sm:text-base text-gray-500 font-medium mt-2 text-center">
              Pellentesque viverra amet netus <br />
              facilisis amet felis odio tortor <br />
              orci cursus est
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-10">
          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
            alt="How Shoes are Made"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
          />
        </div>
      </div>

      {/*Best Seller*/}

      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <span className="text-black text-3xl ml-2 mb-5 font-semibold w-full md:w-auto">
              Our Best Seller
            </span>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            {/* Product 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 w-full">
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
              <div className="-mt-10 text-center">
                <Link href={"Components/Mens/MenBlackRunning"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Black Running
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $79.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-5 w-full">
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

              <div className="-mt-10 text-center">
                <Link href={"Components/Womens/WomenGreenTraining"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Green Training
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
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

            {/* Product 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-5 w-full">
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
              <div className="-mt-10 text-center">
                <Link href={"Components/Womens/WomenBlueTraining"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Blue Training
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$69.90 </del>
                  $60.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-5 w-full">
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
              <div className="-mt-10 text-center">
                <Link href={"Components/Mens/MenMoonstoneSneaker"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Moonstone Sneaker
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* Product 5 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-5 w-full">
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
              <div className="-mt-10 text-center">
                <Link href={"Components/Womens/WomenTanSneaker"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Tan Sneaker
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
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

            {/* Product 6 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-5 w-full">
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
              <div className="-mt-10 text-center">
                <Link href={"Components/Mens/MenClassicMint"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Classic Mint
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $79.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Two Photo Men and Women*/}

      <section className="relative">
        {/* Container for the images */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Men Image */}
          <div className="relative w-full lg:w-1/2 h-[400px]">
            <img
              src="https://img.ltwebstatic.com/images3_spmp/2023/12/25/bb/17035083004b3a2de86e604ca84214d6a8ebaa1f26_thumbnail_720x.jpg"
              className="w-[90%] h-full object-cover mx-auto"
              alt="Men image"
            />
            {/* Men Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-6xl font-semibold text-center w-full">
              <Link
                href={"Men"}
                className="tp-m text-lg px-4 py-2 bg-amber-600 rounded mt-40 ml-40 inline-block"
              >
                SHOP MEN
              </Link>
            </div>
          </div>

          {/* Women Image */}
          <div className="relative w-full lg:w-1/2 h-[400px]">
            <img
              src="https://5.imimg.com/data5/ANDROID/Default/2023/4/299794550/HK/RA/AL/187964942/product-jpeg-500x500.jpg"
              className="w-[90%] h-full object-cover mx-auto"
              alt="Women image"
            />
            {/* Women Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl lg:text-6xl font-semibold text-center w-full">
              <Link
                href={"Women"}
                className="tp-wm text-lg px-4 py-2 bg-amber-600 rounded mt-40 ml-48 inline-block"
              >
                SHOP WOMEN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*New Arrivals*/}

      <section className="">
        <div className="container px-5 py-28 mx-auto">
          <div className="flex justify-center">
            <span className="text-black text-3xl ml-2 mb-2 font-semibold">
              New Arrivals
            </span>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* 1st line */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Mens/MenNavyRunning"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Mens/MenNavyRunning"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Navy Running
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $104.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Mens/MenGreenRunning"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Mens/MenGreenRunning"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Green Running
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$104.90</del> $89.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Womens/WomenTanSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Womens/WomenTanSneaker"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Tan Sneaker
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$89.90</del> $80.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* 2nd line */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Womens/WomenMintSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-010-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Womens/WomenMintSneaker"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Mint Sneaker
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $89.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Womens/WomenPeachTraining"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-004-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Womens/WomenPeachTraining"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Peach Training
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$69.90</del> $57.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Womens/WomenBlueTraining"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Womens/WomenBlueTraining"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Blue Training
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  <del className="opacity-50 mr-1">$69.90</del> $60.00
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            {/* 3rd line */}
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Mens/MenEarthToneSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Mens/MenEarthToneSneaker"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Earth-Tone Sneaker
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Mens/MenMoonstoneSneaker"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Mens/MenMoonstoneSneaker"}>
                  <h2 className="text-black title-font font-medium">
                    Men’s Moonstone Sneaker
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full mt-8">
              <Link
                href={"Components/Womens/WomenCandyCityRun"}
                className="block relative w-full h-96 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-400x400.jpg"
                />
              </Link>
              <div className="mt-5 text-center">
                <Link href={"Components/Womens/WomenCandyCityRun"}>
                  <h2 className="text-black title-font font-medium">
                    Women’s Candy City Run
                  </h2>
                </Link>
                <p className="flex justify-center mt-1 text-gray-500 font-semibold">
                  $65.90
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

      {/*Testimonals*/}

      <div className="ml-7 mr-7 pb-40">
        <br />
        <br />
        <br />
        <br />
        <h2 className="flex justify-center text-2xl md:text-2xl mb-3 font-semibold text-black">
          Our Customers speak for us
        </h2>
        <br />

        {/* Testimonial Wrapper */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          {/* Testimonial 1 */}
          <div className="relative md:mb-0 flex-1 border-2 border-black rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="flex text-gray-500 pt-7 pb-5 font-semibold">
                <FaStar className="w-5 h-5 ml-1 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
              </p>

              <p className="text-black text-center">
                “Felis semper duis massa scelerisque <br />
                ac amet porttitor ac tellus venenatis <br />
                aliquam varius mauris integer”
              </p>

              {/* Customer Image */}
              <div className="mt-4">
                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg"
                  alt="TESTIMONAL01"
                  className="rounded-full w-16 h-16 object-cover border-2 border-gray-600"
                />
              </div>

              {/* Customer Name */}
              <div className="mt-2 text-xl md:text-2xl font-semibold">
                JULIA KEYS
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative md:mb-0 flex-1 border-2 border-black rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="flex text-gray-500 pt-7 pb-5 font-semibold">
                <FaStar className="w-5 h-5 ml-1 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
              </p>

              <p className="text-black text-center">
                “Non malesuada fringilla non varius <br />
                odio in id pellentesque aliquam <br />
                volutpat sapien faucibus ”
              </p>

              {/* Customer Image */}
              <div className="mt-4">
                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg"
                  alt="TESTIMONAL02"
                  className="rounded-full w-16 h-16 object-cover border-2 border-gray-600"
                />
              </div>

              {/* Customer Name */}
              <div className="mt-2 text-xl md:text-2xl font-semibold">
                LUIS ADRIAN
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="relative md:mb-0 flex-1 border-2 border-black rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="flex text-gray-500 pt-7 pb-5 font-semibold">
                <FaStar className="w-5 h-5 ml-1 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
              </p>

              <p className="text-black text-center">
                “Tortor suspendisse tincidunt <br />
                accumsan platea pellentesque hac.”
              </p>

              {/* Customer Image */}
              <div className="mt-4">
                <img
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg"
                  alt="TESTIMINAL01"
                  className="rounded-full w-16 h-16 object-cover border-2 border-gray-600"
                />
              </div>

              {/* Customer Name */}
              <div className="mt-2 text-xl md:text-2xl font-semibold">
                MARIA ANNA
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex justify-center items-center relative mt-10">
          <div className="absolute top-[80%] text-center font-semibold text-zinc-400">
            <p>4.8 average rating from 1814 reviews</p>
          </div>
        </div>
      </div>

      {/*Footer*/}

      <Footer/>

    </main>
  );
}
