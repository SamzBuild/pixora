import { useEffect } from "react";

const API_Testing = () => {
   useEffect(() => {
    const test = async ()=> {
      const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      let newData = await data.json()
      console.log(newData);
    }
    test()
  }, [])
  
  return <div>f12</div>;
};

export default API_Testing;
