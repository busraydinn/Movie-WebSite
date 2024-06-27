import React from 'react'
import {Link} from "react-router-dom"
import "../../src/styles/components/Footer.css"
function Footer() {
  return (
    <div className='footer-container'>
       <hr style={{"color":"white"}}></hr>
        <div className='footer-body'>
            <div className='footer-item1'>
                <h1>Yeniliklerden haberdar olmak için e-posta listemize kayıt olun</h1>
                <div className='footer-item1-item'>
                <input placeholder='e-posta' type='text'/>
                <button type='submit'>Abone Ol</button>
                </div>
            </div>
            <div className='footer-item'>
                  <h1>Bağlantılar</h1>
                  <Link to="/">En iyi Filmler</Link>
                  <Link to="/movies">Filmler</Link>
                  <Link>Online Mağaza</Link>
            </div>
            <div className='footer-item'>
                  <h1>Keşfet</h1>
                  <Link>Blog</Link>
                  <Link>Kampanyalar</Link>
                  <Link>Sosyal Sorumluluk</Link>
                  <Link>Kariyer</Link>
                  <Link>İletişim</Link>
          </div>
        </div>
        <div className='footer-end'>

        </div>
    </div>
  )
}

export default Footer