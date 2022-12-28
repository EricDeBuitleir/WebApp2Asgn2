import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "../api/movie-api";

export const MoviesContext = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};


const MoviesContextProvider = (props) => {
  const [favourites, setFavourites ] = useState( [] )
  const [myReviews, setMyReviews] = useState ([])
  const [mustWatch, setMustWatch] = useState ([])
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

    const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
  };
  

    const addReview = (movie, review) => {
      setMyReviews( {...myReviews, [movie.id]: review } )
    };

    return (
      <MoviesContext.Provider
        value={{
          favourites,
          addToFavourites,
          removeFromFavourites,
          addReview,
          addToMustWatch,
          movies: state.movies,
          setAuthenticated
          
        }}
      >
        {props.children}
      </MoviesContext.Provider>
    );
  };
  
  export default MoviesContextProvider; 