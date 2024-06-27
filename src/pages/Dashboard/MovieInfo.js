import React, { useEffect, useState } from 'react'
import {Link,useParams } from 'react-router-dom';
import "../../styles/Dashboard/MovieInfo.css";
import rate from "../../assert/rateblack.png"
function MovieInfo() {
 const {id}=useParams();
 const [gelenFilm,setGelenFilm]=useState("");

 useEffect(()=>{
  fetch(`http://localhost:3002/movies/${id}`)
  .then(res=>res.json())
  .then(data=>setGelenFilm(data))
 },[])
console.log("movieInfo Id: ",id)
console.log(gelenFilm)
 return (
   <div className='movieInfo'>
     <div class="movieInfo-container">
      <div className='movieInfo-header'>
      <div>
      <img src={gelenFilm.Poster} alt='poster'></img>
      </div>
      
      </div>
       <div className='movieInfo-body'>
       <div className='movieInfo-item'>
       <h1>{gelenFilm.Title}</h1>
       </div>
       <div className='movieInfo-item'>
        
         <div style={{"display":"flex","flexDirection":"row","alignItems":"end"}}>
         <h4>Yönetmen: </h4><h5> {gelenFilm.Director}</h5>
         </div>
         <div style={{"display":"flex","flexDirection":"row","alignItems":"end"}}>
         <h4>Oyuncular: </h4><h5>{gelenFilm.Actors}</h5>
         </div>
         <div style={{"display":"flex","flexDirection":"row","alignItems":"end"}}>
         <h4>Yıl: </h4><h5>{gelenFilm.Year}</h5>
         </div>
       
       
       <h4>{gelenFilm.Genre}</h4>
       </div>
      
         <div style={{"display":"flex","flexDirection":"row","alignItems":"center","justifyContent":"space-evenly","width":"170px"}}>
            <img src={rate} alt='rate' style={{"width":"30px"}}></img>
         <h4 style={{"width":"100px","height":"34px","borderRadius":"20px","border":"1px solid","display":"flex","justifyContent":"center","alignItems":"center","backgroundColor":"orange","color":"black"}}>{gelenFilm.imdbRated}</h4>
         </div>
         <div>
            <h6 style={{"fontFamily":"Trebuchet MS","fontWeight":"500"}}>{gelenFilm.Description}</h6>
         </div>
       </div>
        
    </div>
   </div>
  )
}

export default MovieInfo