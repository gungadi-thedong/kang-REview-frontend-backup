"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Navbar from "../component/Navbar";
import ReviewCard from "../component/ReviewCard";
import Pagination from "../component/Pagination";
import { reviews } from "../data/reviews";

const ITEMS_PER_PAGE = 4;

export default function ReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // Sync state jika URL berubah (misalnya manual edit URL)
  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentReviews = reviews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/review?page=${page}`);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="flex justify-center pt-25 pb-10">
       <div className="w-full max-w-3xl px-20 space-y-10">
        
    {currentReviews.map((review) => (
      <ReviewCard key={review.id} review={review} />
       ))}

    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  </div>
</section>

    </main>
  );
}
