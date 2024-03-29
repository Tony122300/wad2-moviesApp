import userModel from '../api/users/userModel';
import users from './users';
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel';
import genreModel from '../api/genres/genreModel';
import movies from './movies.js';
import genres from './genres';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
    console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }
  
  async function loadGenres() {
    try{
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } 
    catch (e) {
      console.log(`failed to load genres: ${e}`);
    }
}
  // deletes all movies documents in collection and inserts test data
  export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }
  
  if (process.env.SEED_DB) {
    loadUsers();
    loadGenres();
    loadMovies();
  }
