"use client";

// pages/auth/signup.js
import Header from "../header/page";
import Footer from "../footer/page";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signing up with", { email, password });

    // TODO: Call your API for signup here
    // Example:
    // const response = await fetch('/api/signup', { method: 'POST', body: JSON.stringify({ email, password }) });

    alert("Signup successful! Go to Login Page");
    router.push("/login"); // Redirect to login page after signup
  };

  return (
    <main>
      {/*Header*/}

      <Header />

      <div>
          <h1 className="text-5xl font-bold text-center pt-10">Sign Up</h1>
      </div>

      <div
        className="form"
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <h2 className="heading"></h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label className="text-white">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="field"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label className="text-white">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="field"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label className="text-white">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="field"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>
          <button
            className="button1"
            type="submit"
            style={{ width: "100%", padding: "10px" }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-white" style={{ marginTop: "20px" }}>
          Already have an account?{" "}
          <Link href={"login"} className="ml-1 text-blue-400">
            Login
          </Link>
        </p>
      </div>

      {/*Footer*/}
      
            <div className="mt-40">
            <Footer />
            </div>

    </main>
  );
}
