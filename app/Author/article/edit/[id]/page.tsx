"use client";

import { useParams, useRouter } from "next/navigation";
import ArticleForm, {
  ArticleData,
} from "../../../../component/ArticleForm";

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  // 🔹 dummy data (simulasi data lama)
  const article: ArticleData = {
    rating: 4,
    judul: "Judul Artikel",
    p1: "Paragraf 1",
    p2: "Paragraf 2",
    penutup: "Penutup",
  };

  // 🔹 TANPA API
  const handleSubmit = async (data: ArticleData) => {
    try {
      console.log("EDIT ARTICLE ID:", id);
      console.log("UPDATED DATA:", data);

      // simulasi delay (optional)
      await new Promise((resolve) => setTimeout(resolve, 500));

      // anggap sukses
      console.log("Article updated (local)");

      // kembali ke halaman Author (Myarticle)
      router.push("/Author");
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <ArticleForm
      initialData={article}
      buttonLabel="Edit"
      onSubmit={handleSubmit}
    />
  );
}
