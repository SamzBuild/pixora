const MovieCard = ({ posterPath, title, release_date, voting_average }) => {
  return (
    <div className="w-full max-w-2xs overflow-hidden rounded-md border border-neutral-200 shadow-md">
      {posterPath ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
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
            <p className="text-xl font-medium">{voting_average}</p>
            <span className="text-sm text-neutral-500">Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
