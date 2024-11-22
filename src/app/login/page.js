'use client';

// pages/auth/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });

    // TODO: Call your API for login here
    // Example:
    // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });

    alert("Login successful!");
    router.push("/dashboard"); // Redirect to dashboard after successful login
  };

  return (

    <main>

          <div>
            <Link href={"/"}>
            <h1 className="text-5xl font-bold text-center pt-12">SHMUQ SHOE</h1>
            </Link>
          </div>

    <div className="form" style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2 className="heading">Login Page</h2>
      <form  onSubmit={handleSubmit}>
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
        <button className="button1" type="submit" style={{ width: "100%", padding: "10px", }}>
         <Link href={"/"}>Login</Link>
        </button>
      </form>
      <p className="text-white" style={{ marginTop: "20px" }}>
        Don't have an account? <Link href={"/signup"} className="ml-1 text-blue-400">Sign Up</Link>
      </p>
    </div>

    </main>
  );
}
