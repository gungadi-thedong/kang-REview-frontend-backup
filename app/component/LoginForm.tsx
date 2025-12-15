'use client'; // Gunakan Client Component karena ada interaksi form

import React, { useState } from 'react';

// Tipe data untuk input form
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  // Handler untuk memperbarui state saat input berubah
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler untuk submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda akan menambahkan logika otentikasi (misalnya, memanggil API)
    console.log('Data Login:', formData);
    alert(`Mencoba Login dengan Email: ${formData.email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-200 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-semibold text-center text-black mb-8">
          User Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Input Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="**********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
          </div>

          {/* Link Create Account */}
          <div className="text-center pt-2">
            <a
              href="/register" // Ganti dengan path ke halaman pendaftaran
              className="text-sm text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out"
            >
              Create Account?
            </a>
          </div>

          {/* Tombol Login */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-gray-800 text-gray-200 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;