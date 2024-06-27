import React from 'react'
import "../styles/components/Card.css"
import infoicon from "../assert/plus.png"
import {Link} from "react-router-dom"

function MovieCard(prop) {
             
    return (
        <>
            <div className="card mb-4 bg-dark  shadow-sm" style={{ "width": "200px", "height": "300px","border":"none"}}>
                <div>
                <img src={infoicon} alt="infoincon" className="rateBtn"/>
                <Link to={`/bestMovieInfo/${prop.id}`}><button style={{"position":"absolute","width":"40px","height":"40px","border":"none","borderRadius":"5px","opacity":"0"}}></button>
               
                </Link> 
              
                <img src={prop.Poster} className="card-img-top" style={{ "width": "200px", "height": "200px" }} alt="poster" />
                </div>
                <div className="card-body">
                <div style={{"display":"flex","flexDirection":"row"}}>
                   <img src={prop.rate}  alt=" rate" className="end" style={{"width":"20px","height":"20px","borderRadius":"20px"}}></img><h3 style={{"fontSize":"15px","color":"white"}}>{prop.imdbRated}</h3>
                   </div>
                    <h5 className="card-title" style={{"fontSize":"16px","fontFamily":"Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif","position":"absolute","color":"white"}}>{prop.Title}</h5>
                   
                </div>
            </div>
        </>
    )
}

export default MovieCard