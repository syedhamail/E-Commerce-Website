"use client";

import React, { Suspense } from "react";
import Header from "../header/page";
import Footer from "../footer/page";
import { useSearchParams } from "next/navigation";

const CheckoutContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const image = searchParams.get('image');

  // Show loading state until query params are loaded
  if (!id || !name || !price || !image) {
    return <p>Loading...</p>;
  }

  // Predefined countries array
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (North)",
    "Korea (South)",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <main>
      {/* Header */}

      <Header />

      <div className="min-h-screen p-4 mb-20 mt-">
        <div className="mt-5 mb-5 max-w-4xl mx-auto bg-white p-8 shadow-md rounded">
          <h2 className="text-5xl font-bold mb-6 text-center">CHECKOUT</h2>

          {/* Customer Information */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Username or Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Billing Details */}
          <h3 className="text-lg font-semibold mb-4">Billing Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name *"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Company Name (optional)"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <select
              name="country"
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Street Address *"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Town / City *"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="State *"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="ZIP Code *"
              className="border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-4 rounded mb-6">
            <h3 className="text-lg font-semibold flex justify-between my-2">
              Your Order
              <img src={image} alt="" className="w-12 h-12 " />
            </h3>
            <div className="flex justify-between my-2">
              <span>{name}</span>
              <span>${price}</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${price}</span>
            </div>
          </div>

          {/* Payment Warning */}
          <div className="bg-yellow-100 p-4 rounded mb-6 text-yellow-800">
            Sorry, it seems that there are no available payment methods. Please
            contact us if you require assistance or wish to make alternate
            arrangements.
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Place Order ${price}
          </button>
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </main>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}