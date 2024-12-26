import React, { useState } from "react";
import logo from "../assets/logo1.png";

const Register = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    role: "user",
  });

  const [detailData, setDetailData] = useState({
    nama: "",
    umur: "",
    kelamin: "",
  });

  const [isDetailForm, setIsDetailForm] = useState(false);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetailData({ ...detailData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simpan data register ke backend
    console.log("Register Data:", formData);
    // Pindah ke form detail pengguna
    setIsDetailForm(true);
  };

  const handleDetailSubmit = (e) => {
    e.preventDefault();
    // Simpan data detail pengguna ke backend
    console.log("Detail Data:", detailData);
    // Tampilkan pesan sukses atau navigasi ke halaman lain
    alert("Registration and detail submission successful!");
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
          <h1 className="text-2xl font-bold">
            {isDetailForm ? "User Details" : "Register"}
          </h1>
        </div>
        {!isDetailForm ? (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleRegisterChange}
                placeholder="Input your name"
                required
                className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
              />
            </div>
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
                value={formData.email}
                onChange={handleRegisterChange}
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
                value={formData.password}
                onChange={handleRegisterChange}
                placeholder="Input your password"
                required
                className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-rose-600 transition"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleDetailSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={detailData.nama}
                onChange={handleDetailChange}
                placeholder="Input your full name"
                required
                className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="umur"
                className="block text-sm font-medium text-gray-700"
              >
                Umur
              </label>
              <input
                type="number"
                id="umur"
                name="umur"
                value={detailData.umur}
                onChange={handleDetailChange}
                placeholder="Input your age"
                required
                className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="kelamin"
                className="block text-sm font-medium text-gray-700"
              >
                Jenis Kelamin
              </label>
              <select
                id="kelamin"
                name="kelamin"
                value={detailData.kelamin}
                onChange={handleDetailChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-dark-rose focus:border-transparent"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-rose-600 transition"
            >
              Submit Details
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
