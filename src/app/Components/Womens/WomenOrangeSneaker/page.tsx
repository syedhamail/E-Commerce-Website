"use client";

import Link from "next/link";
import { useState } from "react";

import { HiShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

import { FaStar } from "react-icons/fa";
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

export default function WomenOrangeSneaker(){

      // Product details
      const product = {
        id: 1,
        name: "Women’s Orange Sneaker",
        price: 44.90,
        image:
          "https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-product-image-009-400x400.jpg",
      };
  
    // State to manage the cart
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const handleAddToCart = () => {
      const newItem = {
        id: cart.length + 1,
        name: "Women’s Orange Sneaker",
        price: 44.90,
      };
      setCart([...cart, newItem]);
    };
  
    const handleRemoveFromCart = (id) => {
      // Remove item from cart based on id
      setCart(cart.filter((item) => item.id !== id));
    };
  
    const toggleCartSidebar = () => {
      setIsCartOpen(!isCartOpen);
    };
    return(
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
          <Link href={"/Men"}
              
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              MEN
            </Link>
            <Link href={"/Women"}
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              WOMEN
            </Link>
            <Link href={"/Collection"}
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              COLLECTION
            </Link>
            <Link href={"/Sale"}
              className="mr-7 text-gray-400 hover:text-black font-bold "
            >
              SALE
            </Link>
          </nav>
          <nav className="md:mr-7 md:py-1 flex">
            <Link href={"/Contact"}
              className="mr-10 text-gray-400 hover:text-black font-bold md:py-1"
            >
              CONTACT
            </Link>
            <div className="relative">
              <HiShoppingBag
                className="w-6 h-6 flex mr-10 hover:opacity-50 cursor-pointer"
                onClick={toggleCartSidebar}
              />
              {/* Cart Count */}
              {cart.length > 0 && (
                <div className="absolute bottom-3 right-7 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cart.length}
                </div>
              )}
            </div>
            <CgProfile className="w-6 h-6 flex hover:opacity-50" />
          </nav>
        </div>
      </header>

          {/*Buying section*/}

          <section className="bg-white pb-5 ml-7 mr-7">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded pr-20" src={product.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="mb-3 title-font font-bold text-gray-500 tracking-widest text-slate-700">SHMUQ SHOE</h2>
        <h1 className="text-black text-3xl title-font font-medium mb-3">{product.name}</h1>

        <div className="mb-4">
        <span className="title-font font-medium text-2xl text-black">${product.price}0</span>
        <span className="text-xl ml-3">& Free Shipping</span>
        </div>

        <div className="flex mb-4">
          <span className="flex items-center">
                <FaStar className="w-5 h-5 ml-1 mt-0.5 text-black" />
                <FaStar className="w-5 h-5 mt-0.5 text-black" />
                <FaStar className="w-5 h-5 mt-0.5 text-black" />
                <FaStar className="w-5 h-5 mt-0.5 text-black" />
          </span>
          <span className="flex ml-3 pl-3 py-1 border-l-2 border-gray-800 text-gray-500 space-x-2">           
            <a href="https://www.facebook.com/"><FaFacebook className="w-6 h-5"/></a>
            <a href="https://www.twitter.com/"><FaXTwitter className="w-6 h-5 "/></a>
            <a href="https://www.youtube.com/"><FaYoutube className="w-6 h-5"/></a>
          </span>
        </div>

        <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, magni! Rerum, ipsum vero tempore eos reprehenderit tenetur dicta dolor facere animi commodi id, pariatur repellat excepturi aperiam! Sint repudiandae beatae illo maxime earum, veritatis ratione, id facere hic, optio molestiae eum.</p>
        
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
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="flex">
        <Link href={{
                    pathname: "/Checkout",
                    query: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    },
                  }}
                >
          <button className="flex ml-auto text-white font-bold bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded">BUY NOW</button>
          </Link>
          <button onClick={handleAddToCart} className="flex ml-5 text-white font-bold bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded" >ADD TO CART</button>  
      </div>

      </div>
    </div>
  </div>
</section>

     {/* Cart Sidebar */}
     {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="mb-4">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="border-b py-2">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="text-white font-bold bg-slate-800 py-2 px-4 rounded mt-4"
              onClick={toggleCartSidebar}
            >
              Close
            </button>
          </div>
        </div>
      )}

       {/* Cart Sidebar */}
       {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50">
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            <div className="mb-4">
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul>
                  {cart.map((item) => (
                    <li key={item.id} className="border-b py-2 flex justify-between items-center">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
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
              className="text-white font-bold bg-slate-800 py-2 px-4 rounded mt-4"
              onClick={toggleCartSidebar}
            >
              Close
            </button>
          </div>
        </div>
      )}

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
    )
}