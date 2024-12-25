import Link from "next/link";
import { HiShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

export default function Header() {
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
            <HiShoppingBag className="w-6 h-6 hover:opacity-50" />
            <Link href={"/login"}><CgProfile className="w-6 h-6 hover:opacity-50" /></Link>
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
      
    </main>
  );
}
