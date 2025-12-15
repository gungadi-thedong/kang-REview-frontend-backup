"use client";

import Navbar from "@/app/component/Navbar";
import CommentSection from "@/app/component/CommentSection";

export default function ReviewDetailPage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />

      <article className="flex justify-center pt-22 px-6">
        <div className="w-full max-w-2xl space-y-8 mt-5">

          {/* Rating */}
          <div className="flex gap-3 text-yellow-400 text-2xl mb-2">
            ★★★★☆
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold leading-snug">
            Kenaikan Harga Ram Dipicu Oleh AI Boom. Harga RAM Melonjak Tajam:
            Bagaimana Ledakan AI Mengubah Pasar Komponen Komputer?
          </h1>

          {/* Image */}
          <div className="bg-white p-6 rounded-md flex justify-center">
            <img
              src="/ram.jpg"
              alt="RAM"
              className="w-72 object-contain"
            />
          </div>

          {/* Content */}
          <div className="text-base/6 text-justify text-gray-300 leading-relaxed space-y-6">
            <p>
              Dalam beberapa bulan terakhir, pasar komponen komputer digemparkan oleh 
              kenaikan harga RAM yang terjadi hampir di semua merk dan kapasitas. 
              Lonjakan ini bukan sekadar fluktuasi biasa, tetapi dipicu oleh meningkatnya permintaan global 
              terhadap chip memori akibat perkembangan pesat teknologi kecerdasan buatan (AI). 
            </p>

            <p>
              Perusahaan-perusahaan besar berlomba membangun data center dan menambah kapasitas komputasi 
              untuk menjalankan model AI berskala besar, yang membutuhkan jumlah DRAM dan HBM (High Bandwidth Memory) dalam volume sangat tinggi. 
              Kondisi ini menyebabkan produsen chip seperti Samsung, SK Hynix, dan Micron lebih memprioritaskan 
              produksi memori untuk server dan AI accelerator dibandingkan segmen consumer, 
              sehingga pasokan RAM untuk PC dan laptop menjadi lebih terbatas.
            </p>
          </div>

          {/* Second Image */}
          <div className="bg-white p-6 rounded-md flex justify-center">
            <img
              src="/ram.jpg"
              alt="RAM"
              className="w-72 object-contain"
            />
          </div>

          <div className="text-base/6 text-justify text-gray-300 leading-relaxed space-y-4">
            <p>
              Tidak hanya itu, tren AI di perangkat konsumen seperti smartphone dan laptop juga mendorong pabrikan untuk menanamkan memori lebih besar demi memenuhi kebutuhan aplikasi generatif dan pemrosesan lokal. 
              Akibatnya, harga RAM yang dulu relatif stabil kini melonjak signifikan, beberapa tipe bahkan mengalami kenaikan hingga 30–60% dalam waktu singkat. 
              Dampaknya terasa langsung bagi konsumen, terutama gamer, content creator, hingga pelajar yang ingin melakukan upgrade PC namun harus menghadapi harga yang semakin tidak bersahabat. 
            </p>

            <p>
              Jika kenaikan ini terus berlanjut, kita mungkin akan memasuki era baru di mana komponen komputer tidak lagi sekadar mengikuti pasar hobi dan gaming, 
              melainkan mengikuti arus industri AI yang semakin mendominasi ekosistem teknologi dunia.
            </p>
          </div>

          {/* Comment Section */}
          <CommentSection />

        </div>
      </article>
    </main>
  );
}
