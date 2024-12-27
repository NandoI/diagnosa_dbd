import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo1.png";
import { API_URL } from "../../conn"; // Pastikan API_URL terdefinisi
import { registerUser } from "../redux/reducers/authThunk";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch Redux action untuk register user
      await dispatch(registerUser(formData));
      setIsDetailForm(true); // Pindah ke form detail pasien
    } catch (error) {
      console.error("Register Error:", error.message);
    }
  };

  const handleDetailSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ambil userId dari localStorage
      const userId = localStorage.getItem("userId");
  
      if (!userId) {
        throw new Error("User ID tidak ditemukan. Coba register ulang.");
      }
  
      // Kirim data pasien ke backend
      const response = await axios.post(`${API_URL}pasiens/create`, {
        userId,
        ...detailData, // Gunakan detailData sebagai body request
      });
  
      console.log("Patient details submitted:", response.data);
      alert("Detail pasien berhasil dikirim!");
      navigate("/login");
    } catch (error) {
      console.error("Error submitting patient details:", error.message);
      alert("Gagal mengirim detail pasien. Coba lagi.");
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
              disabled={loading}
            >
              {loading ? "Processing..." : "Sign Up"}
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
