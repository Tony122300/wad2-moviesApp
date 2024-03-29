import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpComingMovies} from '../api/tmdb-api'
import AddToPlaylistIcon  from '../components/cardIcons/addToPlayList'


const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpComingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const toWatch = movies.filter(m => m.favorite)
  localStorage.setItem('toWatch', JSON.stringify(toWatch))
  const addToPlayList = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon  movie={movie} />
      }}
    />
);
};

export default UpcomingMoviesPage;