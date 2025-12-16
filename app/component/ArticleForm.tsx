"use client";

import { useState } from "react";

export interface ArticleData {
  rating: number;
  judul: string;
  p1: string;
  p2: string;
  penutup: string;
}

interface Props {
  initialData?: Partial<ArticleData>;
  buttonLabel: string;
  onSubmit: (data: ArticleData) => void;
}

export default function ArticleForm({
  initialData = {},
  buttonLabel,
  onSubmit,
}: Props) {
  const [rating, setRating] = useState<number>(initialData.rating || 0);
  const [judul, setJudul] = useState<string>(initialData.judul || "");
  const [p1, setP1] = useState<string>(initialData.p1 || "");
  const [p2, setP2] = useState<string>(initialData.p2 || "");
  const [penutup, setPenutup] = useState<string>(
    initialData.penutup || ""
  );

  return (
    <div className="wrapper">
      <h1>Edit Article</h1>

      <label>Rating</label>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`star ${i <= rating ? "active" : ""}`}
            onClick={() => setRating(i)}
          >
            ★
          </span>
        ))}
      </div>

      <label>Judul</label>
      <input
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        placeholder="Masukkan judul artikel"
      />

      <label>Gambar 1</label>
      <div className="image-box" />

      <label>Paragraf Pertama</label>
      <textarea
        value={p1}
        onChange={(e) => setP1(e.target.value)}
        placeholder="Masukkan paragraf pertama"
      />

      <label>Gambar 2</label>
      <div className="image-box small" />

      <label>Paragraf Kedua</label>
      <textarea
        value={p2}
        onChange={(e) => setP2(e.target.value)}
        placeholder="Masukkan paragraf kedua"
      />

      <label>Paragraf Penutup</label>
      <textarea
        value={penutup}
        onChange={(e) => setPenutup(e.target.value)}
        placeholder="Masukkan paragraf penutup"
      />

      <button
        onClick={() =>
          onSubmit({ rating, judul, p1, p2, penutup })
        }
      >
        {buttonLabel}
      </button>

      <style jsx>{`
        .wrapper {
          max-width: 420px;
          margin: auto;
          padding: 32px 16px;
          background: #0b1220;
          min-height: 100vh;
          color: white;
        }
        h1 {
          text-align: center;
          margin-bottom: 24px;
        }
        label {
          display: block;
          margin: 16px 0 6px;
          font-size: 14px;
        }
        input,
        textarea {
          width: 100%;
          background: #e5e5e5;
          border: none;
          padding: 10px;
          border-radius: 4px;
        }
        textarea {
          min-height: 120px;
        }
        .rating {
          margin-bottom: 10px;
        }
        .star {
          font-size: 22px;
          cursor: pointer;
          color: #555;
        }
        .active {
          color: #ffd700;
        }
        .image-box {
          width: 120px;
          height: 120px;
          background: #e5e5e5;
          border-radius: 4px;
        }
        .small {
          width: 100px;
          height: 100px;
        }
        button {
          margin-top: 24px;
          float: right;
          padding: 8px 16px;
          background: #e5e5e5;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
