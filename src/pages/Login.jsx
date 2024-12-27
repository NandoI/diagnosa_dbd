import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/reducers/authThunk";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth); // Mengambil state dari Redux

  // State untuk kredensial login
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // Menghandle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Menghandle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(credentials)); // Menggunakan credentials sebagai payload
      console.log("Login successful!");
      navigate("/")
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="bg-gray-200 shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-auto object-contain mb-4"
          />
          <h1 className="text-2xl font-bold">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Input your email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Input your password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-rose-600 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Sign In"}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
