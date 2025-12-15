'use client'; 

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

// ... (Interface RegisterFormValues tidak berubah)
interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const router = useRouter(); // Inisialisasi router
  const [formData, setFormData] = useState<RegisterFormValues>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState<string | null>(null);

  // ... (Fungsi handleChange dan handleSubmit tidak berubah)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Password dan Konfirmasi Password tidak cocok.');
      return;
    }
    setError(null);
    console.log('Data Registrasi:', { username: formData.username, email: formData.email });
    alert(`Mencoba mendaftarkan user ${formData.username}`);
  };

  // Handler Navigasi Kembali ke Halaman Login
  const handleGoBack = () => {
    router.push('/'); // Navigasi ke rute / (Halaman Login)
    // Atau bisa menggunakan: router.back(); untuk kembali ke halaman sebelumnya
  };

  const inputClass = 'w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-300 text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out';

  return (
    <div className="flex items-center justify-center min-h-screen mt-10 mb-10 ">
      <div className="w-full max-w-xl p-8 bg-gray-200 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ... (Semua Input tidak berubah) ... */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required className={inputClass}/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input type="email" id="email" name="email" placeholder="Email address..." value={formData.email} onChange={handleChange} required className={inputClass}/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" id="password" name="password" placeholder="**********" value={formData.password} onChange={handleChange} required className={inputClass}/>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="**********" value={formData.confirmPassword} onChange={handleChange} required className={inputClass}/>
          </div>
          
          {error && (<p className="text-sm text-red-600 text-center">{error}</p>)}

          {/* Tombol Register */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-gray-800 text-gray-200 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>
          
          {/* Tombol Kembali (BARU) */}
          <div className="pt-2">
            <button
              type="button" // Penting: type="button" agar tidak submit form
              onClick={handleGoBack}
              className="w-full px-4 py-2 mt-2 bg-gray-400 text-gray-800 rounded-lg font-medium hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;