import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  function handleSubmission(e) {
    e.preventDefault();
    const cleanText = text.trim();
    if (!cleanText) return;
    onSearch(cleanText);
  }

  return (
    <form
      onSubmit={handleSubmission}
      className="flex items-center justify-center gap-6 py-20"
    >
      <input
        value={text}
        type="search"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Enter Movie Name"
        className="rounded-md px-4 py-2 shadow-md ring ring-neutral-400"
        aria-label="search movies"
      />
      <button
        className="cursor-pointer rounded-md bg-neutral-500 px-4 py-2 text-white shadow-md"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
