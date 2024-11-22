import Link from "next/link";

import { HiShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

export default function Header(){
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
            <CgProfile className="w-6 h-6 flex hover:opacity-50" />
          </nav>
        </div>
      </header>
        </main>
    )
}