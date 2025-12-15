"use client";

import { useRouter } from "next/navigation";
import { Review } from "../data/reviews";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/review/${review.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex gap-8 cursor-pointer"
    >
      {/* Image */}
      <div className="bg-white p-4 rounded-md w-40 h-28 flex items-center justify-center">
        <img
          src={review.image}
          alt="RAM"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center font-inter">
        <h2 className="text-white text-2xl font-bold leading-snug max-w-md">
          {review.title}
        </h2>

        <p className="text-gray-400 text-sm mt-1 max-w-md leading-relaxed">
          {review.description}
        </p>

        {/* Rating */}
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-base ${
                i < review.rating
                  ? "text-yellow-400"
                  : "text-gray-600"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
