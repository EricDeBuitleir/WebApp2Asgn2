import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ActorPage from "./pages/actorPage";
import MovieDetailsPage from './pages/movieDetailsPage'
import ActorDetailsPage from './pages/actorDetailsPage'
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import FavouriteActorPage from "./pages/favouriteActorPage"; // NEW
import UpcomingMovies from './pages/upcomingMoviesPage';
import PopularMovies from './pages/popularMoviesPage';
import PopularTV from './pages/popularTVPage';
import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import TVsContextProvider from './contexts/TVsContext';
import ActorsContextProvider from './contexts/actorContext';
import PopularActor from './pages/popularActorPage';
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
//import PrivateRoute from "./privateRoute";
import SignUpPage from "./pages/signUpPage";





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />      {/* New Header  */}
    <AuthContextProvider>
    <MoviesContextProvider>
    <TVsContextProvider>
    <ActorsContextProvider>
      <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
    <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      <Route path="/reviews/:id" element={<MovieReviewPage />} />
      <Route path="/details/:id" element={<MovieDetailsPage />} />
      <Route path="/actors/:id" element={<ActorDetailsPage />} />
      <Route path="/movies/upcoming" element={<UpcomingMovies/>} />
      <Route path="/movies/popularMovies" element={<PopularMovies/>} />
      <Route path="/tv/popularShows" element={<PopularTV/>} />
      <Route path="/actor/popularActors" element={<PopularActor/>} />
      <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
      <Route exact path="/actor/favourites" element={<FavouriteActorPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/actor/latestActors" element={<ActorPage />} />
      
      
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </ActorsContextProvider>
    </TVsContextProvider>
    </MoviesContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  
);
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );