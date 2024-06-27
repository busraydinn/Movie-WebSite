import React, { useEffect, useState } from 'react'
import "../../styles/Dashboard/Movie.css";
import Card from '../../components/Card';
import rate from "../../assert/rate2.png";
import MovieInfo from "../Dashboard/MovieInfo"
import { Link } from 'react-router-dom';

function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])
  return (
    <div className='movie-container'>
      <div className='movie-header'>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{"width":"500px","height":"500px","borderRadius":"10px"}} >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://tr.web.img2.acsta.net/pictures/bzp/01/29007.jpg" style={{"width":"90vw","height":"500px","borderRadius":"10px"}}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.dreamworks.com/storage/cms-uploads/kung-fu-panda-4-he-poster.jpg" style={{"width":"500px","height":"500px","borderRadius":"10px"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/tr/4/4d/Kara_%C5%9E%C3%B6valye_TR_film_afi%C5%9Fi.jpg" style={{"width":"500px","height":"500px","borderRadius":"10px"}} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>
      <div>
        <h4 style={{"color":"yellow"}}>Filmler</h4>
        <div className='row ' style={{ "marginTop": "30px" }}>
          {
            movies.map((movie) => (
              <div className='col-lg-2' key={movie.id}>
              <Card id={movie.id} Poster={movie.Poster} Title={movie.Title} rate={rate} imdbRated={movie.imdbRated} />
              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Movie