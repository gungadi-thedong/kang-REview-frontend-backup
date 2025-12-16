"use client";

import { useRouter } from "next/navigation";
import ArticleForm, { ArticleData } from "../../../component/ArticleForm";

export default function CreateArticlePage() {
  const router = useRouter();

  const handleSubmit = (data: ArticleData) => {
    console.log("INSERT:", data);
    // Setelah submit, kembali ke halaman MyArticle
    router.push("/Author");
  };

  return (
    <ArticleForm
      buttonLabel="Insert"
      onSubmit={handleSubmit}
    />
  );
}

