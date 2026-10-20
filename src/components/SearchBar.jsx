import { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");
  const handleSubmission = (e) => {
    e.preventDefault();
  };
  return (
    <form action="">
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          handleSubmission();
          console.log(text);
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
