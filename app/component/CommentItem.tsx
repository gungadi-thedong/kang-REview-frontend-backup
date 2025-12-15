interface Props {
  comment: {
    author: string;
    content: string;
  };
}

export default function CommentItem({ comment }: Props) {
  return (
    <div className="bg-gray-100 rounded-md p-3 text-black text-sm">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold">{comment.author}</span>
        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
          Penulis
        </span>
      </div>
      <p>{comment.content}</p>
    </div>
  );
}
