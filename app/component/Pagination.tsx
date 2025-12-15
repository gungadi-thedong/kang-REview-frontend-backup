interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: Props) => {
  const maxPage = Math.min(5, totalPages);

  return (
    <div className="flex justify-center gap-6 mt-12 text-white">
      {Array.from({ length: maxPage }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`text-sm transition ${
            page === currentPage
              ? "font-semibold underline underline-offset-4"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
