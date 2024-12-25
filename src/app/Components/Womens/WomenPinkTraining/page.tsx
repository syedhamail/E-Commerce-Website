"use client";

import Footer from "@/app/footer/page";
import Link from "next/link";
import { useState } from "react";

import { HiShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

// Define the type for cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
}

export default function WomenPinkTraining() {
  // Product details
  const product = {
    id: 1,
    name: "Women’s Pink Training",
    originalPrice: 64.9,
    price: 54.9,
    image:
      "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-002-400x400.jpg",
  };

  // State to manage the cart
  const [cart, setCart] = useState<CartItem[]>([]); // Specify the type as CartItem[]
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    const newItem = {
      id: cart.length + 1,
      name: "Women’s Pink Training",
      price: 54.9,
    };
    setCart([...cart, newItem]);
  };

  const handleRemoveFromCart = (id: number) => {
    // Specify the type of id
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleCartSidebar = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <main>
      {/* Top Notification Bar */}
      <div className="bg-gray-200 w-full h-10 flex justify-center items-center">
        <h1 className="text-gray-400 text-xs sm:text-sm font-sans text-center">
          Free Express Shipping on all orders with all duties included
        </h1>
      </div>

      {/* Header */}
      <header className="bg-white text-sm">
        <div className="flex flex-wrap items-center justify-between px-4 py-3 md:py-5">
          {/* Logo */}
          <Link href={"/"}>
            <h1 className="text-lg sm:text-xl font-bold">SHMUQ SHOE</h1>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex md:gap-7 md:ml-14">
            <Link
              href={"/Men"}
              className="text-gray-400 hover:text-black font-bold"
            >
              MEN
            </Link>
            <Link
              href={"/Women"}
              className="text-gray-400 hover:text-black font-bold"
            >
              WOMEN
            </Link>
            <Link
              href={"/Collection"}
              className="text-gray-400 hover:text-black font-bold"
            >
              COLLECTION
            </Link>
            <Link
              href={"/Sale"}
              className="text-gray-400 hover:text-black font-bold"
            >
              SALE
            </Link>
          </nav>

          {/* Icons and Contact */}
          <div className="flex gap-5 items-center">
            <Link
              href={"/Contact"}
              className="text-gray-400 hover:text-black font-bold hidden md:inline-block"
            >
              CONTACT
            </Link>
            <div className="relative">
              <HiShoppingBag
                className="w-6 h-6 hover:opacity-50"
                onClick={toggleCartSidebar}
              />
              {/* Cart Count */}
              {cart.length > 0 && (
                <div className="absolute bottom-3 left-4 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </div>
            <Link href={"/login"}>
              <CgProfile className="w-6 h-6 hover:opacity-50" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-wrap gap-4 justify-center py-3 md:hidden">
          <Link
            href={"/Men"}
            className="text-gray-400 hover:text-black font-bold"
          >
            MEN
          </Link>
          <Link
            href={"/Women"}
            className="text-gray-400 hover:text-black font-bold"
          >
            WOMEN
          </Link>
          <Link
            href={"/Collection"}
            className="text-gray-400 hover:text-black font-bold"
          >
            COLLECTION
          </Link>
          <Link
            href={"/Sale"}
            className="text-gray-400 hover:text-black font-bold"
          >
            SALE
          </Link>
          <Link
            href={"/Contact"}
            className="text-gray-400 hover:text-black font-bold"
          >
            CONTACT
          </Link>
        </nav>
      </header>

      {/*Buying section*/}

      <section className="bg-white pb-20 ml-7 mr-7">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded pr-20"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="mb-3 title-font font-bold text-gray-500 tracking-widest text-slate-700">
                SHMUQ SHOE
              </h2>
              <h1 className="text-black text-3xl title-font font-medium mb-3">
                {product.name}
              </h1>

              <div className="mb-4">
                <span className="title-font font-medium text-2xl text-black">
                  <del className="opacity-50 mr-1">
                    ${product.originalPrice}0{" "}
                  </del>
                  ${product.price}0
                </span>
                <span className="text-xl ml-3">& Free Shipping</span>
              </div>

              <div className="flex mb-4">
                <span className="flex items-center">
                  <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStar className="w-5 h-5 mt-0.5 text-black" />
                  <FaStarHalfAlt className="w-5 h-5 mt-0.5 text-black" />
                </span>
                <span className="flex ml-3 pl-3 py-1 border-l-2 border-gray-800 text-gray-500 space-x-2">
                  <a href="https://www.facebook.com/">
                    <FaFacebook className="w-6 h-5" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <FaXTwitter className="w-6 h-5 " />
                  </a>
                  <a href="https://www.youtube.com/">
                    <FaYoutube className="w-6 h-5" />
                  </a>
                </span>
              </div>

              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                magni! Rerum, ipsum vero tempore eos reprehenderit tenetur dicta
                dolor facere animi commodi id, pariatur repellat excepturi
                aperiam! Sint repudiandae beatae illo maxime earum, veritatis
                ratione, id facere hic, optio molestiae eum.
              </p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Size:</span>
                  <div className="relative">
                    <select className="rounded border border-gray-700  bg-transparent appearance-none py-2 focus:outline-none text-black pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex">
                <Link
                  href={`/Checkout?id=${product.id}&name=${product.name}&price=${product.price}&image=${product.image}`}
                >
                  <button className="flex ml-auto text-white font-bold bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded">
                    BUY NOW
                  </button>
                </Link>
                <button
                  onClick={handleAddToCart}
                  className="flex ml-5 text-white font-bold bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-full sm:w-80 h-full bg-white shadow-lg z-50">
          <div className="p-5">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Cart</h2>
            <div className="mb-4">
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="border-b py-2 flex justify-between items-center"
                    >
                      <p className="text-gray-800">{item.name}</p>
                      <p className="text-gray-800">${item.price}</p>
                      <button
                        className="text-red-500 hover:text-red-700 text-sm"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="text-white font-bold bg-slate-800 py-2 px-4 rounded mt-4 w-full sm:w-auto"
              onClick={toggleCartSidebar}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/*Footer*/}

      <Footer />
    </main>
  );
}
