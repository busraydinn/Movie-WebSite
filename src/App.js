import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import Movie from "./pages/Dashboard/Movie";
import Dashboard from "./components/Dashboard/Dashboard";
import MovieInfo from './pages/Dashboard/MovieInfo';
import BestMovieInfo from './pages/Dashboard/BestMovieInfo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/movies' element={<Movie/>}></Route>
                <Route path='/movieInfo/:id' element={<MovieInfo/>}></Route>
                <Route path='/bestMovieInfo/:id' element={<BestMovieInfo/>}></Route>
           </Route>
          

        </Routes>
    </BrowserRouter>
  )
}

export default App