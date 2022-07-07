import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <React.Fragment>
            <div class="loader-backdrop">           
        <div class="loader">
            <i class="ion-heart-outline"></i>
        </div>
    </div>
    
            <header class="header-1">
                <div class="topbar">
                    <div class="container-lg">
                        <div class="row no-gutters">
                            <div class="col-md-12">
                                <div class="topbar-items">
                                    <ul class="topbar-social d-none d-lg-inline-flex">
                                        <li><a href="/"><i class="ion-logo-facebook"></i></a></li>
                                        <li><a href="/"><i class="ion-logo-twitter"></i></a></li>
                                        <li><a href="/"><i class="ion-logo-youtube"></i></a></li>
                                        <li><a href="/"><i class="ion-logo-vimeo"></i></a></li>
                                    </ul>
                                    <ul class="widgets">
                                        <li class="region-widget d-none d-lg-inline-flex"><i class="ion-earth"></i> Asia Pacific</li>
                                        <li class="email-widget d-none d-lg-inline-flex"><i class="ion-mail-outline"></i> hello@medwise.com</li>
                                        <li class="emergency-widget">
                                            <h4 class="emergency">
                                                <span class="sub-text">Emergency</span>
                                                <span class="number">123-909-909</span><br />
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg sticky-nav">
                    <div class="container">
                        <a class="navbar-br/and" href="/ndex-hospital-classic.html">
                            <img src="images/logo.svg" alt="" class="logo" />
                        </a>

                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-navigation">
                            <span class="navbar-toggler-icon">
                                <span class="one"></span>
                                <span class="two"></span>
                                <span class="three"></span>
                            </span>
                        </button>

                        <div class="navbar-collapse collapse" id="main-navigation">
                            <ul class="navbar-nav">
                                <li class="nav-item has-menu"><Link to="/">Home</Link>

                                </li>
                                <li class="nav-item has-menu"><a href="/book-an-appointment">Appointments</a></li>
                                <li class="nav-item has-menu"><a href="/profile">Profile</a></li>
                                <li class="nav-item has-menu"><a href="/About">About</a></li>
                                <li class="nav-item has-menu"><a href="/contact">Contact</a></li>
                                <li class="nav-item has-menu"><a href="/Login">Login</a></li>
                                <li class="nav-item has-menu"><a href="/register">Register</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Navbar