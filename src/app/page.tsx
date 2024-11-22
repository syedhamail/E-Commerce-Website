"use client";

import React from "react";
import Link from "next/link";

import { HiShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
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
export default function Home() {
  return (
    <main>
                <div className="bg-gray-200 w-full h-10 flex justify-center items-center">
        <h1 className="text-gray-400 text-sm font-sans">
          Free Express Shipping on all orders with all duties included
        </h1>
      </div>

      {/*Header*/}

      <header className="bg-white text-sm">
        <div className="flex p-5">
          <Link href={"/"}>
            <h1 className="ml-7 text-xl font-bold md:py-1">
              SHMUQ SHOE
            </h1>
          </Link>

          <nav className="md:mr-auto md:ml-14 md:py-2">
          <Link href={"Men"}
              
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              MEN
            </Link>
            <Link href={"Women"}
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              WOMEN
            </Link>
            <Link href={"Collection"}
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              COLLECTION
            </Link>
            <Link href={"Sale"}
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              SALE
            </Link>
          </nav>
          <nav className="md:mr-7 md:py-1 flex">
            <Link href={"Contact"}
              className="mr-10 text-gray-400 hover:text-black font-bold md:py-1"
            >
              CONTACT
            </Link>
            <HiShoppingBag className="w-6 h-6 flex mr-10 hover:opacity-50" />
            <Link href={"login"}>
            <CgProfile className="w-6 h-6 flex hover:opacity-50" />
            </Link>
          </nav>
        </div>
      </header>
      
      {/*Hero Section*/}

      <div className="">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg"
          className="img1"
          alt="hero section img"
        />

        <div
          style={{
            position: "absolute",
            top: "47%",
            left: "10%",
            color: "white",
            fontSize: "75px",
            fontWeight: "bold",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          Love the Planet
        </div>

        <div
          style={{
            position: "absolute",
            top: "62%",
            left: "10%",
            color: "white",
            fontSize: "75px",
            fontWeight: "bold",
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          we walk on
        </div>

        <div
          style={{
            position: "absolute",
            top: "88%",
            left: "10%",
            color: "white",
            fontSize: "23px",
            fontWeight: "bold",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </div>

        <div
          style={{
            position: "absolute",
            top: "94%",
            left: "10%",
            color: "white",
            fontSize: "23px",
            fontWeight: "bold",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          ut magnam neque excepturi aut voluptas debitis eum.
        </div>

        <Link href={"Men"} className="hero-button-men">
          SHOP MEN
        </Link>
        <Link href={"Women"} className="hero-button-women">
          SHOP WOMEN
        </Link>
      </div>

      {/*As seen in*/}

      <div className="flex ml-7">
        <div className="pt-20 pb-20 pl-16">
          <h6 className="text-left font-mono text-xl font">As seen in:</h6>
        </div>

        <div>
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20231013154327/Adidas-logo-1991-1-600x319.png"
            alt="adidas"
            className="mt-14 ml-20"
            width={130}
          />
        </div>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/VOGUE_LOGO.svg"
            alt="VOGUE"
            className="mt-20 ml-14"
            width={130}
          />
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbKkOfQl5qlcqYuBKR57xH3ej57nFnK36hQ&s"
            alt="nike"
            className="md:mt-16 ml-20"
            width={130}
          />
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lJj4hfIWzeiZ1zboA7pgBWDTxmdVSRytiw&s"
            alt="newBalance"
            className="md:mt-8 ml-20"
            width={130}
          />
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdPeqxdIlT7JYKS5W-C4Dt7YUtzjegX5pNDQ&s"
            alt="puma"
            className="mt-14 ml-20"
            width={130}
          />
        </div>
      </div>

      <div className="bg-gray-500 opacity-15 pb-0.5 ml-20 mr-20"></div>
      <br />

      {/*About us*/}

      <section className="">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-home-about-image.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="text-amber-600 text-xl font-mono">About us</h3>
            <br />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Selected materials
              <br className="hidden lg:inline-block" />
              designed for comfort
              <br className="hidden lg:inline-block" />
              and sustainability
            </h1>
            <p className="mb-8 leading-relaxed flex justify-normal text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur nemo ullam aspernatur cumque hic quibusdam officia
              alias illo, mollitia et vel, commodi fuga est. Nesciunt enim
              distinctio repellat incidunt pariatur dolorum recusandae.
            </p>

            <div className="flex">
              <a href="/">
                <span className="text-black hover:text-amber-600 font-bold">
                  READ MORE
                </span>
                <br />
                <h1 className="bg-amber-600 p-0.5 rounded"></h1>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*how shoes are made section*/}

      <div className="bg-zinc-200 pb-5 ml-7 mr-7">
        <br />
        <br />
        <br />
        <br />
        <h2 className="flex justify-center text-5xl font-semibold text-black">
          See how your shoes are made
        </h2>
        <br />
        <p className="flex justify-center font-medium text-zinc-500">
          Urna, felis enim orci accumsan urna blandit egestas mattis egestas
          feugiat viverra ornare donec
        </p>
        <p className="flex justify-center font-medium text-zinc-500">
          {" "}
          adipiscing semper aliquet integer risus leo volutpat nulla enim
          ultrices
        </p>

        <div className="">
          {/*01*/}

          <div className="ml-12 ">
            <div
              style={{
                position: "absolute",
                top: "342%",
                color: "rgba(242, 124, 14, 0.967)",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              01.
            </div>
            <div
              style={{
                position: "absolute",
                top: "347%",
                color: "",
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "",
              }}
            >
              Pet Canvas
            </div>
            <div
              style={{
                position: "absolute",
                top: "353%",
                color: "rgb(147, 145, 145)",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              Morbi eget bibendum sit <br />
              adipiscing morbi ac nisl vitae <br />
              maecenas nulla cursus
            </div>
          </div>

          {/*02*/}

          <div className="ml-12 ">
            <div
              style={{
                position: "absolute",
                top: "372%",
                color: "rgba(242, 124, 14, 0.967)",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              02.
            </div>
            <div
              style={{
                position: "absolute",
                top: "377%",
                color: "",
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "",
              }}
            >
              Algae foam + <br />
              vegan glue
            </div>
            <div
              style={{
                position: "absolute",
                top: "390%",
                color: "rgb(147, 145, 145)",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              Enim tincidunt donec vulputate <br />
              magna pharetra mattis in
            </div>
          </div>

          <div className="flex justify-end mr-12">
            {/*03*/}

            <div
              style={{
                position: "absolute",
                top: "342%",
                color: "rgba(242, 124, 14, 0.967)",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              03.
            </div>

            <div
              style={{
                position: "absolute",
                top: "347%",
                color: "",
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "",
              }}
            >
              Organic cotton
            </div>

            <div
              style={{
                position: "absolute",
                top: "353%",
                color: "rgb(147, 145, 145)",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              A vel ipsum, sed dignissim <br />
              elementum ultrices amet
            </div>

            {/*04*/}

            <div
              style={{
                position: "absolute",
                top: "372%",
                color: "rgba(242, 124, 14, 0.967)",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              04.
            </div>

            <div
              style={{
                position: "absolute",
                top: "377%",
                color: "",
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "",
              }}
            >
              Upcycled plastic <br />
              bottles
            </div>

            <div
              style={{
                position: "absolute",
                top: "390%",
                color: "rgb(147, 145, 145)",
                fontSize: "16px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              Pellentesque viverra amet netus <br />
              facilisis amet felis odio tortor <br />
              orci cursus est
            </div>
          </div>

          <img
            src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png"
            alt=""
            className="ml-96 mt-24"
          />
          <br />
          <br />
          <br />
        </div>
      </div>

      {/*Best Seller*/}

      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex">
            <span className="text-black text-3xl ml-2 font-semibold">
              Our Best Seller
            </span>

            <a href="" className="vabs">
              <h3> VIEW ALL BEST SELLERS</h3>
              <h1 className="bg-amber-600 p-0.5 rounded "></h1>
            </a>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 w-full">
              <Link href={"Components/Mens/MenBlackRunning"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-005-400x400.jpg"
                />
              </Link>
              <div className="mt-5">
                <Link href={"Components/Mens/MenBlackRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Men’s Black Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $79.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-20  w-full">
              <Link href={"Components/Womens/WomenGreenTraining"} className="block relative w-96 h-96  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-001-400x400.jpg"
                />
              </Link>

              <div className="mt-5">
                <Link href={"Components/Womens/WomenGreenTraining"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24 ">
                    Women’s Green Training
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

            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-20 w-full">
              <Link href={"Components/Womens/WomenBlueTraining"} className="block relative w-96 h-96 rounded overflow-hidden">
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

            {/*2nd line*/}

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Mens/MenMoonstoneSneaker"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg"
                />
              </Link>
              <div className="mt-4">
                <Link href={"Components/Mens/MenMoonstoneSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Men’s Moonstone Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Womens/WomenTanSneaker"} className="block relative w-96 h-96 rounded overflow-hidden">
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
              <Link href={"Components/Mens/MenClassicMint"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-020-400x400.jpg"
                />
              </Link>
              <div className="mt-4">
                <Link href={"Components/Mens/MenClassicMint"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Men’s Classic Mint
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
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

      {/*Two Photo Men or Women*/}

      <section>
        <div className="flex">
          <img
            src="https://img.ltwebstatic.com/images3_spmp/2023/12/25/bb/17035083004b3a2de86e604ca84214d6a8ebaa1f26_thumbnail_720x.jpg"
            className="img2"
            alt="hero section img"
          />
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2023/4/299794550/HK/RA/AL/187964942/product-jpeg-500x500.jpg"
            className="img3"
            alt="hero section img"
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "660%",
            left: "21%",
            color: "white",
            fontSize: "60px",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          }}
        >
          Men
        </div>
        <Link href={"Men"} className="tp-m">
          SHOP MEN
        </Link>

        <div
          style={{
            position: "absolute",
            top: "660%",
            left: "67.2%",
            color: "white",
            fontSize: "60px",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          }}
        >
          Women
        </div>
        <Link href={"Women"} className="tp-wm">
          SHOP WOMEN
        </Link>
      </section>

          {/*New Arrivals*/}

          <section className="">
        <div className="container px-5 py-28 mx-auto">
          <div className="flex">
            <span className="text-black text-3xl ml-2 font-semibold">
            New Arrivals
            </span>

            <a href="" className="vabs">
              <h3> VIEW ALL NEW ARRIVALS</h3>
              <h1 className="bg-amber-600 p-0.5 rounded "></h1>
            </a>
          </div>

          <div className="flex flex-wrap -m-4">

            {/*1st line*/}
            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 w-full">
              <Link href={"Components/Mens/MenNavyRunning"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-008-400x400.jpg"
                />
              </Link>
              <div className="mt-5">
                <Link href={"Components/Mens/MenNavyRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                    Men’s Navy Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $104.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-20  w-full">
              <Link href={"Components/Mens/MenGreenRunning"} className="block relative w-96 h-96  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-007-400x400.jpg"
                />
              </Link>

              <div className="mt-5">
                <Link href={"Components/Mens/MenGreenRunning"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24 ">
                    Men’s Green Running
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
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

            <div className="lg:w-1/4 md:w-1/2 p-4 pl-1 m-5 ml-20 w-full">
              <Link href={"Components/Womens/WomenTanSneaker"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-011-400x400.jpg"
                />
              </Link>
              <div className="mt-5">
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

            {/*2nd line*/}

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Womens/WomenMintSneaker"} className="block relative w-96 h-96 rounded overflow-hidden">
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

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Womens/WomenPeachTraining"} className="block relative w-96 h-96 rounded overflow-hidden">
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
              <Link href={"Components/Womens/WomenBlueTraining"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-003-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
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

                {/*3rd line*/}

                <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Mens/MenEarthToneSneaker"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-017-400x400.jpg"
                />
              </Link>
              <div className="mt-4">
                <Link href={"Components/Mens/MenEarthToneSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                  Men’s Earth-Tone Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                  $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Mens/MenMoonstoneSneaker"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-018-400x400.jpg"
                />
              </Link>
              
              <div className="mt-4">
                <Link href={"Components/Mens/MenMoonstoneSneaker"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
                  Men’s Moonstone Sneaker
                  </h2>
                </Link>
                <p className="mt-1 flex justify-center ml-24 text-gray-500 font-semibold">
                $74.90
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 m-5 pl-1 mr-20 w-full">
              <Link href={"Components/Womens/WomenCandyCityRun"} className="block relative w-96 h-96 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-014-400x400.jpg"
                />
              </Link>

              <div className="mt-4">
                <Link href={"Components/Womens/WomenCandyCityRun"}>
                  <h2 className="text-black title-font font-medium flex justify-center ml-24">
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
              
          </div>
        </div>
      </section>          

          {/*Handmade Page*/}

        <div className="bg-zinc-200 pb-5 ml-7 mr-7 pb-80">
        <br />
        <br />

        <div>
        <p className="flex justify-start pt-12 pl-10 text-xl font-semibold text-zinc-500">
        Eu eget felis erat mauris aliquam mattis lacus, arcu leo <br />
        aliquam sapien pulvinar laoreet vulputate sem aliquet <br />
        phasellus egestas felis, est, vulputate morbi massa <br />
         mauris vestibulum dui odio.
        </p>
        </div>

            {/*Recycle img*/}
            <div
              style={{
                position: "absolute",
                top: "1020%",
                left: "60%",
              }}           
            >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-recycled-circle-iamge.jpg" 
              alt="recycle img"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "320px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "320px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
                border: "2px dashed #000"
              }}
              />
            </div>

                {/*Small img 1*/}
            <div
              style={{
                position: "absolute",
                top: "1053%",
                left: "5%",
              }}           
            >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-3.svg" 
              alt="vegan"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "110px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "110px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
              }}
              />
            </div>
          
              {/*Small img 2*/}

              <div
              style={{
                position: "absolute",
                top: "1053%",
                left: "18%",
              }}           
            >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-2.svg" 
              alt="vegan"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "110px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "110px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
              }}
              />
            </div>

              {/*Small img 3*/}

              <div
              style={{
                position: "absolute",
                top: "1053%",
                left: "31%",
              }}           
            >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-badge-1.svg" 
              alt="vegan"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "110px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "110px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
              }}
              />
            </div>

          </div>

          {/*Testimonals*/}

        <div className="mt-12 ml-7 mr-7 pb-80">
        <br />
        <br />
        <br />
        <br />
        <h2 className="flex justify-center text-5xl font-semibold text-black">
        Our Customers speak for us
        </h2>
        <br />

              {/*01*/}

        <div className="ml-12 ">
            <div
              style={{
                position: "absolute",
                top: "1125%",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              <div className="pl-7 pr-7 border-2 border-black">
               <p className="flex text-gray-500 pt-7 pb-5 font-semibold">
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                </p>
                
              <p className="text-black">“Felis semper duis massa scelerisque <br /> 
              ac amet porttitor ac tellus venenatis <br /> 
              aliquam varius mauris integer”
              </p>
                <br />
                <br />
                <br />

              <div
                style={{
                position: "absolute",
                top: "73%",
                left: "9%",
              }}           
              >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-3.jpg" 
              alt="TESTIMONAL01"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "40px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "40px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
              }}
              />
              </div>

              <div
                style={{
                position: "absolute",
                top: "74%",
                left: "28%",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "23px",
              }}           
              >
              JULIA KEYS
              </div>
              </div>
            </div>
          </div>

          {/*02*/}

          <div className="flex justify-center ml-2">
            <div
              style={{
                position: "absolute",
                top: "1125%",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              <div className="pl-7 pr-7 border-2 border-black">
               <p className="flex text-gray-500 pt-7 pb-5 font-semibold">
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                </p>
                
              <p className="text-black">“Non malesuada fringilla non varius <br /> 
              odio in id pellentesque aliquam <br /> 
              volutpat sapien faucibus ”
              </p>
                <br />
                <br />
                <br />

              <div
                style={{
                position: "absolute",
                top: "73%",
                left: "9%",
              }}           
              >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-2.jpg" 
              alt="TESTIMONAL02"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "40px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "40px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
              }}
              />
              </div>

              <div
                style={{
                position: "absolute",
                top: "74%",
                left: "28%",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "23px",
              }}           
              >              	
              LUIS ADRIAN
              </div>
              </div>
            </div>
          </div>

          {/*03*/}

          <div className="flex justify-end mr-12">
            <div
              style={{
                position: "absolute",
                top: "1125%",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
              <div className="pl-7 pr-7 pb-7 border-2 border-black">
               <p className="flex text-gray-500 pt-7 pb-5 font-semibold">
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                  <FaStar className="w-5 h-5 mt-0.5 text-yellow-400" />
                </p>
                
              <p className="text-black">“Tortor suspendisse tincidunt <br /> 
              accumsan platea pellentesque hac.”
              </p>
                <br />
                <br />
                <br />

              <div
                style={{
                position: "absolute",
                top: "62%",
                left: "9%",
              }}           
              >
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-customer-avatar-image-1.jpg" 
              alt="TESTIMINAL01"
              style={{
                borderRadius: "50%",  // Circle shape ke liye
                width: "40px",       // Size adjust karne ke liye width aur height set kar sakte hain
                height: "40px",
                objectFit: "cover",   // Ensure karta hai ke image achi tarah se circle mein fit ho
              }}
              />
              </div>

              <div 
                style={{
                position: "absolute",
                top: "62%",
                left: "28%",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "23px",
              }}           
              >              	
              MARIA ANNA
              </div>
              </div>
            </div>
          </div>

          {/*Text*/}

          <div className="flex justify-end mr-12">
            <div
              style={{
                position: "absolute",
                top: "1170%",
                right:"38.2%",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily:
                  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              }}
            >
             <p className="text-zinc-400">4.8 average rating from 1814 reviews</p>
            </div>
          </div>

        </div>

          {/*Two Photo Men or Women*/}

          <section>
        <div className="flex">
          <img
            src="https://www.bxxyshoe.in/cdn/shop/files/IMG_8592.jpg?v=1696848986"
            className="img4 opacity-80"
            alt=""
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "1210%",
            left: "21%",
            color: "rgb(42, 39, 39)",
            fontSize: "60px",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          }}
        >
          Better for People & the Planet
        </div>

        <div
          style={{
            position: "absolute",
            top: "1230%",
            left: "18%",
            color: "rgb(35, 33, 33)",
            fontSize: "25px",
            font: "sans",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          }}
        >
          Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate
        </div>
        <Link href={"Men"} className="tp-m3">
          SHOP MEN
        </Link>
        <Link href={"Women"} className="tp-wm3">
          SHOP WOMEN
        </Link>
        </section>

          {/*SP EP FR*/}

          <div className="flex justify-center mt-12 mb-12">
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
  );
}