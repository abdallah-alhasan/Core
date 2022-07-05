import React from 'react'

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
                                        <span class="number">123-909-909</span><br/>
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
                        <li class="nav-item has-menu"><a href="/">Home</a>
                            <div class="sub-menu">          
                                <ul class="menu-items">
                                    <li class="has-menu"><a href="/">Hospital</a>
                                        <div class="sub-menu">
                                            <ul class="menu-items">
                                                <li><a href="/ndex-hospital-classic.html">Hospital Classic</a></li>
                                                <li><a href="/ndex-hospital-modern.html">Hospital Modern</a></li>
                                                <li><a href="/ndex-charitable-hospital.html">Charitable Hospital <span class="badge badge-primary ml-10">New</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="/ndex-dentist.html">Dental</a></li>
                                    <li><a href="/ndex-pets.html">Veterinary</a></li>
                                    <li><a href="/ndex-infertility.html">Infertility</a></li>
                                    <li><a href="/ndex-nutritionist.html">Nutritionist <span class="badge badge-primary ml-10">New</span></a></li>
                                    <li><a href="/ndex-physiotherapy.html">Physiotherapy <span class="badge badge-primary ml-10">New</span></a></li>
                                    <li><a href="/ndex-cosmetic.html.html">Dermatology <span class="badge badge-primary ml-10">New</span></a></li>
                                    <li><a href="/ndex-diagnostic.html">Diagnostics</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item has-menu"><a href="/">About</a>
                            <div class="sub-menu">           
                                <ul class="menu-items">
                                    <li><a href="/bout-us-1.html">About Us 1</a></li>
                                    <li><a href="/bout-us-2.html">About Us 2</a></li>
                                    <li><a href="/bout-us-3.html">About Us 3</a></li>
                                    <li><a href="/hy-us-1.html">Why Us 1</a></li>
                                    <li><a href="/hy-us-2.html">Why Us 2</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item has-menu"><a href="/">Services</a>
                            <div class="sub-menu">         
                                <ul class="menu-items">
                                    <li class="has-menu"><a href="/">Departments</a>
                                        <div class="sub-menu">           
                                            <ul class="menu-items">
                                                <li><a href="/epartments-style-1.html">Department Style 1</a></li>
                                                <li><a href="/epartments-style-2.html">Department Style 2</a></li>
                                                <li><a href="/epartments-style-3.html">Department Style 3</a></li>
                                                <li><a href="/epartments-style-4.html">Department Style 4</a></li>
                                                <li><a href="/epartments-style-5.html">Department Style 5</a></li>
                                                <li><a href="/epartments-style-6.html">Department Style 6</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="has-menu"><a href="/">Department Detail</a>
                                        <div class="sub-menu">        
                                            <ul class="menu-items">
                                                <li><a href="/epartment-detail-1.html">Department Detail 1</a></li>
                                                <li><a href="/epartment-detail-2.html">Department Detail 2</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="/epartments-list.html">Department List</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item has-menu"><a href="/">Pages</a>
                            <div class="mega-menu">            
                                <div class="row">
                                    <div class="col-lg-3">
                                        <ul class="menu-items">
                                            <li class="menu-heading">Doctors</li>
                                            <li><a href="/octors-style-1.html">Doctors Style 1</a></li>
                                            <li><a href="/octors-style-2.html">Doctors Style 2</a></li>
                                            <li><a href="/octors-style-3.html">Doctors Style 3</a></li>
                                            <li class="hr"></li>
                                            <li class="menu-heading">Doctor Profile</li>
                                            <li><a href="/octor-detail-1.html">Doctor Profile 1</a></li>
                                            <li><a href="/octor-detail-2.html">Doctor Profile 2</a></li>
                                            <li class="hr"></li>
                                            <li class="menu-heading">Appointments</li>
                                            <li><a href="/ook-appointment-form.html">Appointment Form</a></li>
                                            <li><a href="/ppointment-advanced.html">Appointment Schedule</a></li>
                                            <li><a href="/ppointment-basic.html">Appointment Table</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul class="menu-items">
                                            <li class="menu-heading">Features</li>
                                            <li><a href="/ounters.html">Counters</a></li>
                                            <li><a href="/all-to-action.html">Call to Action</a></li>
                                            <li><a href="/rocess.html">Process</a></li>
                                            <li><a href="/ricing-tables.html">Pricing Table</a></li>
                                            <li><a href="/ideo.html">Video</a></li>
                                            <li><a href="/allery.html">Image Gallery</a></li>
                                            <li><a href="/vents.html">Events</a></li>
                                            <li><a href="/ownload-app.html">Download App</a></li>
                                            <li><a href="/ffers.html">Offers</a></li>
                                            <li><a href="/eatures.html">Features</a></li>
                                            <li><a href="/ubscribe.html">Subscribe</a></li>
                                            <li><a href="/estimonials.html">Testimonials</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul class="menu-items">
                                            <li class="menu-heading">Careers</li>
                                            <li><a href="/areers-grid.html">Careers Grid</a></li>
                                            <li><a href="/areers-list.html">Careers List</a></li>
                                            <li class="hr"></li>
                                            <li class="menu-heading">Components</li>
                                            <li><a href="/ccordion.html">Accordion</a></li>
                                            <li><a href="/uttons.html">Buttons</a></li>
                                            <li><a href="/arousels.html">Carousels</a></li>
                                            <li><a href="/ists.html">Lists</a></li>
                                            <li><a href="/odals.html">Modals</a></li>
                                            <li><a href="/rogress-bar.html">Progress Bars</a></li>
                                            <li><a href="/abs.html">Tabs</a></li>
                                            <li><a href="/ypography.html">Typography</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3">
                                        <ul class="menu-items">
                                            <li class="menu-heading">Icons</li>
                                            <li><a href="/cons.html">Icons</a></li>
                                            <li><a href="/con-boxes.html">Icon Boxes</a></li>
                                            <li><a href="/edical-icons.html">Medical Icons</a></li>
                                            <li><a href="/ocial-media.html">Social Icons</a></li>
                                            <li class="hr"></li>
                                            <li class="menu-heading">Miscellaneous</li>
                                            <li><a href="/ooter-dark.html">Footer Dark</a></li>
                                            <li><a href="/ooter-light.html">Footer Light</a></li>
                                            <li><a href="/olicies.html">Policies</a></li>
                                            <li><a href="/aqs.html">FAQs</a></li>
                                            <li><a href="/04.html">Not Found</a></li>
                                            <li><a href="/oming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item has-menu"><a href="/">Blog</a>
                            <div class="sub-menu">         
                                <ul class="menu-items">
                                    <li><a href="/log-list.html">Blog List</a></li>
                                    <li><a href="/log-single.html">Blog Single</a></li>
                                    <li><a href="/idgets.html">Sidebar Widgets</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item has-menu"><a href="/">Contact</a>
                            <div class="sub-menu">         
                                <ul class="menu-items">
                                    <li><a href="/ontact-1.html">Contact Style 1</a></li>
                                    <li><a href="/ontact-2.html">Contact Style 2</a></li>
                                    <li><a href="/ontact-3.html">Contact Style 3</a></li>
                                    <li><a href="/uick-contact.html">Quick Contact</a></li>
                                </ul>
                            </div>
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