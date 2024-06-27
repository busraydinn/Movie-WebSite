import React, { useEffect, useState } from 'react'
import "../../styles/Dashboard/Home.css"
import BestMovieCard from "../../components/MovieCard"
import rate from "../../assert/rate2.png";
function Home() {
  const [bestMovies,setBestMovies]=useState([]);
  useEffect(()=>{
      fetch("http://localhost:3003/bestMovies/")
      .then(res=>res.json())
      .then(data=>setBestMovies(data))
  },[])
  return (
    <div className='home-container'>
        <div className='home-header'> 
    <div className='h-header-item'>
              <img src="https://upload.wikimedia.org/wikipedia/tr/4/4d/Kara_%C5%9E%C3%B6valye_TR_film_afi%C5%9Fi.jpg" alt='bestMovie'></img>
              <img src="https://tr.web.img3.acsta.net/pictures/bzp/01/108998.jpg" alt='bestMovie'></img>
              <img src="https://tr.web.img4.acsta.net/pictures/bzp/01/39187.jpg" alt='bestMovie'></img>
            </div> 
        </div>
        <div className='home-body'>
          <div>

          </div>
         <div className='h-body-item'>
         <h1 style={{"color":"darkyellow"}}>En iyi Filmler</h1>
        <div className='row' style={{"marginTop":"30px"}}>
            {
              bestMovies.map((movie)=>(
                <div className='col-lg-2' key={movie.id}>
                  <BestMovieCard  id={movie.id} Poster={movie.Poster} Title={movie.Title} rate={rate} imdbRated={movie.imdbRated} />
                  </div>
                
              ))
            }
            </div>
         </div>
        </div>
        <div className='home-footer'>

        </div>
    </div>
  )
}

export default Home