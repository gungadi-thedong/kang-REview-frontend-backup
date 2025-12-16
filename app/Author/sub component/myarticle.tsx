"use client";
import Link from "next/link";

export default function MyArticlePage() {
  const articles = [
    { id: "1", title: "Artikel Pertama" },
    { id: "2", title: "Artikel Kedua" },
    { id: "3", title: "Artikel Ketiga" },
    { id: "4", title: "Artikel Keempat" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1623] to-[#06081a] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-4" />

          <h1 className="text-xl font-bold mb-2">My Article</h1>
          <p className="text-gray-500 text-sm">
            Kelola artikel yang telah kamu buat
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Daftar Artikel</h2>

            <Link href="/Author/article/create">
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300">
                +
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {articles.map((a) => (
              <div
                key={a.id}
                className="flex justify-between items-center bg-gray-100 rounded-xl px-3 py-2"
              >
                <span className="text-sm truncate">{a.title}</span>

                <Link href={`/Author/article/edit/${a.id}`}>
                  <button className="text-xs px-2 py-1 bg-white rounded-md border">
                    Edit
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
