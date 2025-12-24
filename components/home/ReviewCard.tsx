'use client';

type ReviewCardProps = {
  title: string;
  review: string;
  author: string;
};

const WORD_LIMIT = 24;

const truncateByWords = (text: string, limit: number) => {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(' ') + '...';
};

const ReviewCard = ({ title, review, author }: ReviewCardProps) => {
  return (
    <div
      className="
        flex flex-col items-start gap-3
        p-4 w-full
        rounded-xl
        bg-white/5
        backdrop-blur-[38px]
        text-white
      "
    >
      {/* Title */}
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      {/* Review Text */}
      <p className="text-white/80 leading-relaxed">
        {truncateByWords(review, WORD_LIMIT)}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-sm font-medium">
          {author
            .split(' ')
            .map(word => word[0])
            .join('')
            .slice(0, 2)
            .toUpperCase()}
        </div>

        <span className="text-white/80">
          {author}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
