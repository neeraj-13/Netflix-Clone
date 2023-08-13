import React, { useEffect, useState } from "react";
import Instance from "./axios";

import './category.css'
const Category = (props) => {
  const [movies, setmovies] = useState([]);


  const base="https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchnoviehandler = async () => {
      console.log("fdvdfv");
      const response = await Instance.get(props.fetchurl);
    //   if (!response.ok) {
    //     throw new Error("Something went wrong!");
    //   }
        setmovies(response.data.results);
      
      console.log(movies);
      return response;
    };
    fetchnoviehandler();
    }, [props.fetchurl]);

  return (
    <React.Fragment>
      <h2 className="title">
        <div>{props.title} </div>
      </h2>


      <div className="movieposters">
          {movies.map(movie =>(
              
              <img  key={movie.id} className="movieimg" src={`${base}${movie.poster_path}`} alt={movie.name}></img>
          ))}
      </div>
    </React.Fragment>
  );
};

export default Category;
