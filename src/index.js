import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpComingMoviesPage from "./pages/upComingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import movieDetailsPage from "./pages/movieDetailsPage";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute/index";
import AuthHeader from "./components/authHeader/index";
import SignUpPage from "./pages/signUpPage";
import PlayListPage from "./pages/playList";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
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
      <AuthProvider>
          <AuthHeader />
        <SiteHeader />
        
        <MoviesContextProvider>
            {" "}
            <Switch>
              <Route exact path="/movies/playlist" component={PlayListPage}/>
            <Route exact path="/movies/popular" component={PopularMoviesPage} />
            <Route exact path="/movies/upcoming" component={UpComingMoviesPage} />
            <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Redirect from="*" to="/" />
            </Switch>
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));