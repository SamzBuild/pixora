import { useEffect, useRef, useState } from "react";

const MovieCard = ({ id, poster_path, title, release_date, vote_average }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={`fade-up w-full max-w-2xs overflow-hidden rounded-md border border-neutral-200 shadow-md ${
        isVisible ? "fade-up-visible" : "fade-up-hidden"
      }`}
      key={id}
      ref={cardRef}
    >
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="aspect-2/3 w-full object-cover"
        />
      ) : (
        <div className="flex aspect-2/3 w-full items-center justify-center bg-neutral-100 text-neutral-500">
          Not Found
        </div>
      )}

      <div className="flex flex-col gap-4 px-4 py-2">
        <h2 className="line-clamp-2 text-center text-2xl font-semibold tracking-tight">
          {title}
        </h2>

        <div className="flex justify-between">
          <div className="leading-4">
            <p className="text-xl font-medium">{release_date}</p>
            <span className="text-sm text-neutral-500">Release Date</span>
          </div>

          <div className="leading-4">
            <p className="text-xl font-medium">{vote_average.toFixed(1)}</p>
            <span className="text-sm text-neutral-500">Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
