import React from 'react'



function About() {
  return (
    <div className='app'>
    <div className="page-header">          
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="heading bold text-left">About Us</h1>
                </div>
            </div>
        </div>
        <div className="breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="breadcrumb">
                            <li><a href="index-hospital-classic.html">Home</a></li>
                            <li className="active">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container mt-60">
        <div className="row align-items-center">
            <div className="col-lg-6 mt-20 pr-30">
                <h6 className="heading font-bold text-primary">Brief History</h6>
                <h3 className="heading font-bold">Get to know us more</h3>
                <p className="lead">American Dental Clinic is unique and distinctive because we incorporate skill, experience and technology under one roof. The work of our highly competent doctors of varying disciplines of dentistry, coupled with the use of the latest equipment and technologies ensures that each patient is treated like royalty</p>
              
            </div>
            <div className="col-lg-6 mt-20">
                <img src="images/750-500-2.jpg" className="img-fluid" alt="" />
            </div>
        </div>
    </div>

    <div className="container-fluid p-0 mt-60">
        <div className="row no-gutters">
            <div className="col-lg-4 mt-20 bg-grey-1 p-60">
                <div className="iconbox-4 text-center">
                    <div className="iconbox-icon">
                        <i className="ion-alarm-outline"></i>
                    </div>
                    <div className="iconbox-body">
                        <h5 className="heading font-bold font-5">Family Like Care</h5>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mt-20 bg-grey-2 p-60">
                <div className="iconbox-4 text-center">
                    <div className="iconbox-icon">
                        <i className="ion-bandage-outline"></i>
                    </div>
                    <div className="iconbox-body">
                        <h5 className="heading font-bold font-5">Excellent Support Staff</h5>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mt-20 bg-grey-1 p-60">
                <div className="iconbox-4 text-center">
                    <div className="iconbox-icon">
                        <i className="ion-alarm-outline"></i>
                    </div>
                    <div className="iconbox-body">
                        <h5 className="heading font-bold font-5">Family Like Care</h5>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container mt-80">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="heading-block">
                    <h3 className="heading font-bold">Bond of Trust</h3>
                    <p className="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 mt-20">
                <img src="images/750-500-1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 mt-20">
                <div className="tabs-1">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a href="#t1body1" className="nav-link active" aria-controls="t1body1" role="tab" data-toggle="tab">
                                <i className="ion-people-outline icon-left"></i> Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#t1body2" className="nav-link" aria-controls="t1body2" role="tab" data-toggle="tab">
                                <i className="ion-flask-outline icon-left"></i> Facilities
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade show active" id="t1body1">
                            <p>At the Medwise Dental our foundation lies in our ideology. We understand the complexities of dental problems and the absolute need to tackle them with utmost care, which is why our clinics consist of some of the most highly reputable doctors in the UAE, and are equipped with state of the art equipment. We ensure that no stone is left unturned in providing our patients with the best healthcare facilities.</p>
                            {/* <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p> */}
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="t1body2">
                            <p>Since 1985 our clinics in Dubai and Abu Dhabi have provided patients with the finest dental care treatments in UAE. Our team of highly skilled specialists, consisting of dentists and hygienists are led by Dr. Michael Ziegler in their commitment to excellence. Each of our clinics is equipped to provide a complete range of treatments; including general dentistry, state-of-the-art cosmetic dentistry, dental implants, prosthetics, children’s dentistry, veneer placements and othrodontics</p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="pt-80 pb-80 mt-80" style={{backgroundImage: 'url(images/bg-pattern-1.png)'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="heading-block">
                        <h3 className="heading font-bold">Patient Testimonials</h3>
                        <p className="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="testimonial-1">
                        <div className="slider-items">
                            <div className="testimonial-item">
                                <p className="testimonial-text font-style-3 font-italic text-lh-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics. Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="testimonial-author">
                                    <h5 className="heading">Micheal Jones</h5>
                                    <p className="text-muted mb-0">Turku, Finland</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="testimonial-text font-style-3 font-italic text-lh-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics. Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="testimonial-author">
                                    <h5 className="heading">Randell May</h5>
                                    <p className="text-muted mb-0">Ennuin, Australia</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="testimonial-text font-style-3 font-italic text-lh-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics. Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="testimonial-author">
                                    <h5 className="heading">Donald Harrison</h5>
                                    <p className="text-muted mb-0">Ponta Grossa, Brazil</p>
                                </div>
                            </div>
                            <div className="testimonial-item">
                                <p className="testimonial-text font-style-3 font-italic text-lh-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics. Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="testimonial-author">
                                    <h5 className="heading">Micheal Jones</h5>
                                    <p className="text-muted mb-0">Turku, Finland</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider-nav-outer">
                            <div className="slider-nav">
                                <div className="testimonial-author-img">
                                    <img src="images/250-250-1.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="testimonial-author-img">
                                    <img src="images/250-250-2.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="testimonial-author-img">
                                    <img src="images/250-250-3.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="testimonial-author-img">
                                    <img src="images/250-250-4.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  


 
    </div>
  )
}

export default About