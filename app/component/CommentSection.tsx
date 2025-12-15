"use client";

import { useState } from "react";
import CommentItem from "./CommentItem";

interface Comment {
  id: number;
  author: string;
  content: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "cj",
      content: "Wow hebat banget bisa komen!",
    },
    {
      id: 2,
      author: "cj",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;

    setComments([
      ...comments,
      {
        id: Date.now(),
        author: "cj",
        content: text,
      },
    ]);

    setText("");
  };

  return (
    <section className="mt-16 pb-10">
      <h2 className="text-lg font-semibold mb-4">Kolom Komentar</h2>

      {/* Input */}
      <div className="flex gap-2 mb-6">
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Tulis komentar anda di sini!"
            className="
            flex-1
            px-4 py-3
            rounded-md
            bg-white
            text-gray-800
            text-sm
            placeholder-gray-400
            border border-gray-300
            focus:outline-none
            focus:ring-2 focus:ring-black
            "
        />

            <button
                onClick={handleSubmit}
                className="
                bg-slate-800
                text-white
                px-6 py-3
                rounded-md
                text-sm
                font-semibold
                hover:bg-slate-700
                transition
                "
            >
                Kirim
            </button>
            </div>


      {/* Comment List (Scrollable) */}
      <div className="bg-gray-200 rounded-md p-4 max-h-80 overflow-y-auto space-y-4">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}
