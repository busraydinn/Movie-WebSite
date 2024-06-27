import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "../../styles/Dashboard/Dashboard.css";
import weblogo from"../../assert/weblogo.png"

import Footer from "../Footer";
function Dashboard() {
  return (
    <div className='dash-container'>
        <nav className='dash-header'>
          <div className='dash-menu-item'>
          <Link to="/"><img src={weblogo} alt='weblogo' style={{"width":"70px"}}></img></Link>
          </div>
          <div className='dash-menu-item1'>
          <Link to="/movies">Filmler</Link>
         
          </div>
        </nav>
        <div className='dash-body'>
            <Outlet/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  )
}

export default Dashboard