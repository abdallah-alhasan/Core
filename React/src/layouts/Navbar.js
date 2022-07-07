import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <React.Fragment>
            {/* <div classNameName="loader-backdrop">           
        <div className="loader">
            <i className="ion-heart-outline"></i>
        </div>
    </div>
     */}
    <header className="header-1">           
        <div className="topbar">            
            <div className="container-lg">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="topbar-items">
                            <ul className="topbar-social d-none d-lg-inline-flex">
                                <li><a href="/"><i className="ion-logo-facebook"></i></a></li>
                                <li><a href="/"><i className="ion-logo-twitter"></i></a></li>
                                <li><a href="/"><i className="ion-logo-youtube"></i></a></li>
                                <li><a href="/"><i className="ion-logo-vimeo"></i></a></li>
                            </ul>
                            <ul className="widgets">
                                <li className="region-widget d-none d-lg-inline-flex"><i className="ion-earth"></i> Jordan Pacific</li>
                                <li className="email-widget d-none d-lg-inline-flex"><i className="ion-mail-outline"></i> hello@medwise.com</li>
                                <li className="emergency-widget">
                                    <h4 className="emergency">             
                                        <span className="sub-text">Emergency</span>
                                        <span className="number">123-909-909</span><br/>
                                    </h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg sticky-nav">         
            <div className="container">            
                <a className="navbar-br/and" href="/ndex-hospital-classNameic.html">
                    <img src="images/logo.svg" alt="" className="logo" />         
                </a>

                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-navigation">
                    <span className="navbar-toggler-icon">          
                        <span className="one"></span>
                        <span className="two"></span>
                        <span className="three"></span>
                    </span>
                </button>

                <div className="navbar-collapse collapse" id="main-navigation">   
                    <ul className="navbar-nav">
                        <li className="nav-item has-menu"><Link to="/">Home</Link>
                            
                        </li>
                        <li className="nav-item has-menu"><Link to="/About">About</Link>
                           
                        </li>
                        <li className="nav-item has-menu"><a href="/">Services</a>
                        </li>
                     
                        <li className="nav-item has-menu"><a href="/">Blog</a>
                            <div className="sub-menu">         
                                <ul className="menu-items">
                                    <li><a href="/log-list.html">Blog List</a></li>
                                    <li><a href="/log-single.html">Blog Single</a></li>
                                    <li><a href="/idgets.html">Sidebar Widgets</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item has-menu"><Link to="/Contact">Contact</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>          
        </nav>
    </header>
    </React.Fragment>
  )
}

export default Navbar