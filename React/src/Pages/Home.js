import React from 'react'
import Navbar from '../layouts/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <div class="pt-120 pb-120" style={{backgroundImage: 'url(images/1920-800-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center left'}} >
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-6">
                    <h4 class="heading text-primary font-semi-bold mb-10"> Dental clinic</h4>
                    <h3 class="heading font-20 text-lh-2 font-bold mb-20">Get Your Smile <br/> Back <span class="text-primary font-semi-bold">:)</span></h3>
                    <p class="text-lh-6 mb-30">Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p class="h6 d-flex align-items-center font-semi-bold mb-0">
                        <i class="ion-shield-checkmark-outline icon icon-primary icon-round mr-20"></i>
                        Following all Covid precautions
                    </p>
                    <p class="h6 d-flex align-items-center font-semi-bold mb-0 mt-10">
                        <i class="ion-car-outline icon icon-primary icon-round mr-20"></i>
                        Free home pickup & drop off
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-secondary pt-30 pb-30" >
        <div class="container">
            <div class="row row-cols-1 row-cols-lg-5 align-items-center">
                <div class="col mt-10 mb-10">
                    <h4 class="text-white font-7 font-bold text-lg-right text-lh-5 mb-0">Book your <br/> appointment</h4>
                </div>
                <div class="col mt-10 mb-10">
                    <div class="form-group mb-0">
                        <input type="text" class="form-control style-1" name="fullName" placeholder="Full Name" />
                    </div>
                </div>
                <div class="col mt-10 mb-10">
                    <div class="form-group mb-0">
                        <input type="text" class="form-control style-1" name="phoneNum" placeholder="Phone No." />
                    </div>
                </div>
                <div class="col mt-10 mb-10">
                    <div class="form-group mb-0">
                        <input type="text" class="form-control date-select style-1" name="appDate" placeholder="Select Date" />
                    </div>
                </div>
                <div class="col mt-10 mb-10">
                    <button class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-80">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="heading-block">
                    <h3 class="heading font-bold text-lh-4">Dental Procedures Offered</h3>
                    <p class="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 mt-20">
                <div class="department-box-4 border p-30 rounded">
                    <div class="dep-icon">
                        <i class="mw-tooth"></i>
                    </div>
                    <div class="body mt-20">
                        <h4 class="heading font-bold">Whitening</h4>
                        <p class="mb-0 mb-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <a href="/" class="link-primary">More Info..</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-20">
                <div class="department-box-4 border p-30 rounded">
                    <div class="dep-icon">
                        <i class="mw-tongue"></i>
                    </div>
                    <div class="body mt-20">
                        <h4 class="heading font-bold">Cavity Filling</h4>
                        <p class="mb-0 mb-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <a href="/" class="link-primary">More Info..</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-20">
                <div class="department-box-4 border p-30 rounded">
                    <div class="dep-icon">
                        <i class="mw-dental-seat"></i>
                    </div>
                    <div class="body mt-20">
                        <h4 class="heading font-bold">Full Br/aces</h4>
                        <p class="mb-0 mb-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <a href="/" class="link-primary">More Info..</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-20">
            <div class="col-lg-4 mt-20">
                <div class="department-box-4 border p-30 rounded">
                    <div class="dep-icon">
                        <i class="mw-tooth"></i>
                    </div>
                    <div class="body mt-20">
                        <h4 class="heading font-bold">Root Canal</h4>
                        <p class="mb-0 mb-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <a href="/" class="link-primary">More Info..</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-20">
                <div class="department-box-4 border p-30 rounded">
                    <div class="dep-icon">
                        <i class="mw-tongue"></i>
                    </div>
                    <div class="body mt-20">
                        <h4 class="heading font-bold">Implants</h4>
                        <p class="mb-0 mb-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <a href="/" class="link-primary">More Info..</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-20">
                <div class="department-box-4 border p-30 rounded">
                    <div class="dep-icon">
                        <i class="mw-dental-seat"></i>
                    </div>
                    <div class="body mt-20">
                        <h4 class="heading font-bold">Capping</h4>
                        <p class="mb-0 mb-10">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <a href="/" class="link-primary">More Info..</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-120" style={{backgroundImage: 'url(images/1920-450-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} >
        <div class="container">
            <div class="row justify-content-center align-items-end">
                <div class="col-lg-7 pt-60 pb-60">
                    <h3 class="heading font-11 text-lh-5 text-white font-bold mb-20">Explore our popular dental care plans for complete family.</h3>
                    <a href="/epartments-style-1.html" class="btn btn-outline-light mt-20">Explore Plans</a>
                </div>
                <div class="col-lg-4 align-self-bottom pl-40 pr-40 d-none d-lg-block">
                    <img src="images/500-580-1.png" class="img-fluid mt-minus50" alt="" />
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-60">
        <div class="row align-items-center">
            <div class="col-lg-5 mt-20">
                <img src="images/600-533-1.jpg" class="img-fluid rounded" alt="" />
            </div>
            <div class="col-lg-7 pl-lg-30 mt-20">
                <h3 class="heading font-bold mb-10">State of the art dentistry</h3>
                <p class="lead">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>

    <div class="pt-80 pb-80 mt-80" style={{backgroundImage: "url('images/200-200-1.jpg')"}} >
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h3 class="heading font-bold text-white mb-0 text-lh-5">Clients Across the Globe</h3>
                    <p class="font-style-3 font-5 text-white font-italic font-regular">1000+ Smiles</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 mt-20">
                    <div class="flexible-slider" data-items="3" data-items-992="2" data-items-768="1" data-arrows="true" data-dots="false">
                        <div class="slider-items">
                            <div class="item">
                                <div class="youtube-video"  data-video-id="ZiITCnnFbwQ" data-video-thumbnail="images/video-thumb-6.jpg">     
                                    <div class="video-data">
                                        <div class="btn-play">
                                            <i class="ion-play-sharp"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="youtube-video"  data-video-id="CIbR/7odQklk" data-video-thumbnail="images/video-thumb-7.jpg">          
                                    <div class="video-data">
                                        <div class="btn-play">
                                            <i class="ion-play-sharp"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="youtube-video"  data-video-id="5tOVmMb6P08" data-video-thumbnail="images/video-thumb-8.jpg">          
                                    <div class="video-data">
                                        <div class="btn-play">
                                            <i class="ion-play-sharp"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="youtube-video"  data-video-id="CIbR/7odQklk" data-video-thumbnail="images/video-thumb-9.jpg">          
                                    <div class="video-data">
                                        <div class="btn-play">
                                            <i class="ion-play-sharp"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-nav-outer">
                            <div class="slider-nav nav-light">
                                <div class="slider-arrows">
                                    <div class="icon-prev"><i class="ion-arrow-back-sharp"></i></div>
                                    <div class="icon-next"><i class="ion-arrow-forward-sharp"></i></div>
                                </div>
                                <div class="slider-dots">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-80">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="heading-block">
                    <h3 class="heading font-bold text-lh-4">Associations & Recommendations</h3>
                    <p class="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                </div>
            </div>
        </div>
        <div class="row mt-20">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-3 border-lg-right border-bottom p-60">
                        <img src="images/logo-1.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-3 border-lg-right border-bottom p-60">
                        <img src="images/logo-2.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-3 border-lg-right border-bottom p-60">
                        <img src="images/logo-7.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-3 border-bottom p-60">
                        <img src="images/logo-5.png" class="img-fluid" alt="" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 border-bottom border-lg-bottom-0 border-lg-right p-60">
                        <img src="images/logo-8.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-3 border-bottom border-lg-bottom-0 border-lg-right p-60">
                        <img src="images/logo-6.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-3 border-bottom border-lg-bottom-0 border-lg-right p-60">
                        <img src="images/logo-3.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-3 p-60">
                        <img src="images/logo-4.png" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-primary pt-80 pb-80 mt-80"  style={{backgroundImage: 'url(images/world-map-2.png)', backgroundRepeat:'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right center'}} >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mt-20">
                    <h3 class="heading text-white font-bold">Dental Tourism in Canada</h3>
                    <h5 class="text-white">Know everything about visa, stay and the procedures</h5>
                    <p class="text-white opacity-08 mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="/hy-us-1.html" class="btn btn-secondary">Get in Touch</a>
                </div>
                <div class="col-lg-3 mt-20 mb-lg-40">
                    <div class="counter-box-1">
                        <div class="fact-number text-white">
                            <span class="fact-count" data-from="0" data-to="912" data-speed="3000">912</span>+
                        </div>
                        <h6 class="heading font-semi-bold text-white mb-0">Dental Tourism Clients</h6>
                    </div>
                </div>
                <div class="col-lg-3 mt-20 mb-lg-40">
                    <div class="counter-box-1">
                        <div class="fact-number text-white">
                            <span class="fact-count" data-from="0" data-to="20" data-speed="3000">20</span>+
                        </div>
                        <h6 class="heading font-semi-bold text-white mb-0">International Br/anches</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-80 mb-80">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="heading-block">
                    <h3 class="heading font-bold text-lh-4">Our Experienced Team</h3>
                    <p class="sub-heading">There live the blind texts separated they right at the coast of the Semantics.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 mt-20">
                <div class="doctor-box-2">
                    <div class="doctor-img">    
                        <img src="images/222-222-1.jpg" class="rounded-circle" alt="" />
                    </div>
                    <div class="doctor-name">
                        <h5 class="heading font-bold">David Paulson</h5>
                        <span class="doctor-desig">Dental Surgeon</span>
                    </div>
                    <div class="doctor-details">
                        <p class="mb-0 d-flex align-items-center justify-content-center"><i class="ion-call text-primary mr-10"></i> 0093-513-244</p>
                        <p class="mb-0 d-flex align-items-center justify-content-center"><i class="ion-mail text-primary mr-10"></i> roberto@medwise.com</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-20">
                <div class="doctor-box-2">
                    <div class="doctor-img">    
                        <img src="images/222-222-2.jpg" class="rounded-circle" alt="" />
                    </div>
                    <div class="doctor-name">
                        <h5 class="heading font-bold">Merri Hoffman</h5>
                        <span class="doctor-desig">Dental Implants</span>
                    </div>
                    <div class="doctor-details">
                        <p class="mb-0 d-flex align-items-center justify-content-center"><i class="ion-call text-primary mr-10"></i> 0093-513-244</p>
                        <p class="mb-0 d-flex align-items-center justify-content-center"><i class="ion-mail text-primary mr-10"></i> merri@medwise.com</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mt-20">
                <div class="doctor-box-2">
                    <div class="doctor-img">    
                        <img src="images/222-222-3.jpg" class="rounded-circle" alt="" />
                    </div>
                    <div class="doctor-name">
                        <h5 class="heading font-bold">Kathy Cruse</h5>
                        <span class="doctor-desig">Smile Specialist</span>
                    </div>
                    <div class="doctor-details">
                        <p class="mb-0 d-flex align-items-center justify-content-center"><i class="ion-call text-primary mr-10"></i> 0093-513-244</p>
                        <p class="mb-0 d-flex align-items-center justify-content-center"><i class="ion-mail text-primary mr-10"></i> kathy@medwise.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pt-60 pb-60 bg-light bg-img-lg-none" style={{backgroundImage: 'url(images/bg-pattern-2.png)', backgroundRepeat:'no-repeat'}} >
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 mt-20 mb-20">
                    <h3 class="heading font-bold mb-10 text-center text-lg-left">We love to see our clients<span class="text-primary font-style-3 font-italic font-18 ml-10">smile</span></h3>
                    <p class="h5 text-center text-lg-left mb-0">Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div class="col-lg-5 mt-20 mb-20 text-center">
                    <a href="/ook-appointment-form.html" class="btn btn-primary btn-lg mr-20"> Get in Touch</a>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer-2">           
        <div class="footer-pri">             
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="widget widget-about">           
                            <a href="/ndex-hospital-classic.html">
                                <img src="images/logo-light.svg" class="logo-footer" alt="" />
                            </a>
                            <p class="mt-20 footer-text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                            <hr class="mt-30 mb-30" />
                            <h5 class="heading font-bold">Reach Out</h5>
                            <ul class="contact footer-text">
                                <li>
                                    <i class="ion-location-outline"></i>
                                    <div>
                                        <strong>Medwise Hospital</strong>
                                        <br/>
                                        4038 Liberty Avenue, California
                                    </div>
                                </li>
                                <li><i class="ion-call-outline"></i> +24 123-456-7878</li>
                                <li><i class="ion-mail-outline"></i> info@example.com</li>
                            </ul>
                            <hr class="mt-30 mb-30" />
                            <h5 class="heading font-bold mb-20">Social Connect</h5>
                            <ul class="social social-round social-2x">
                                <li><a class="facebook" href="/"><i class="ion-logo-facebook"></i></a></li>
                                <li><a class="twitter" href="/"><i class="ion-logo-twitter"></i></a></li>
                                <li><a class="google" href="/"><i class="ion-logo-google"></i></a></li>
                                <li><a class="youtube" href="/"><i class="ion-logo-youtube"></i></a></li>
                                <li><a class="whatsapp" href="/"><i class="ion-logo-whatsapp"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <hr class="mt-30 mb-30 d-lg-none" />
                        <div class="widget widget-links">           
                            <h5 class="heading font-bold">Useful Links</h5>
                            <ul>
                                <li><a href="/ook-appointment-form.html">Book Appoitment</a></li>
                                <li><a href="/epartments-style-1.html">View Departments</a></li>
                                <li><a href="/ontact-1.html">Our Locations</a></li>
                                <li><a href="/octors-style-2.html">Doctors On Panel</a></li>
                                <li><a href="/hy-us-1.html">Facilities Available</a></li>
                                <li><a href="/bout-us-1.html">About Hospital</a></li>
                                <li><a href="/olicies.html">Hospital Rules</a></li>
                            </ul>
                        </div>
                        <hr class="mt-30 mb-30" />
                        <div class="widget widget-twitter">            
                            <h5 class="heading font-bold">Latest Tweet</h5>
                            <div class="tweets">
                                <ul class="carousel-items">
                                    <li class="tweet-item">
                                        <p>How to tell if the hand sanitizer you’re buying is safe and actually works? <a href="/">#askDoctor</a></p>
                                    </li>
                                    <li class="tweet-item">
                                        <p>Screen time doesn’t hurt kids’ social skills, says harvard university <a href="/">#healthcare #dailyTips</a></p>
                                    </li>
                                    <li class="tweet-item">
                                        <p>Can clothes and shoes track infection into your house? What to Know <a href="/">Read blog here</a></p>
                                    </li>
                                </ul>
                            </div>
                            <a href="/" class="btn btn-outline-light curved btn-sm mt-10">Follow Us</a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <hr class="mt-30 mb-30 d-lg-none" />
                        <div class="widget widget-timings">           
                            <h5 class="heading font-bold">Hospital Timings</h5>
                            <table class="table table-bordered footer-text">
                                <tr>
                                    <td>Mon - Fri</td>
                                    <td>9:00 am to 6:00 pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>10:00 am to 1:00 pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>Weekly Off</td>
                                </tr>
                            </table>
                        </div>
                        <hr class="mt-30 mb-30" />
                        <div class="widget widget-subscribe">          
                            <h5 class="heading font-bold">Subscribe Newsletter</h5>
                            <p class="footer-text">Subscribe to our newsletter for daily health tips</p>
                            <form class="search">  
                                <div class="input-group">
                                    <input type="text" class="form-control curved style-1" placeholder="Your Email Id" />
                                    <div class="input-group-append">
                                        <button class="btn btn-primary curved" type="button">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr class="mt-30 mb-30" />
                        <div class="widget widget-pay">           
                            <h5 class="heading font-bold">Payment Accepted</h5>
                            <ul class="payment-list">
                                <li class="item">
                                    <img src="images/payment-type-1.png" alt="" />
                                </li>
                                <li class="item">
                                    <img src="images/payment-type-2.png" alt=""  />
                                </li>
                                <li class="item">
                                    <img src="images/payment-type-3.png" alt="" />
                                </li>
                                <li class="item">
                                    <img src="images/payment-type-4.png" alt="" />
                                </li>
                                <li class="item">
                                    <img src="images/payment-type-5.png" alt="" />
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-sec">          
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mt-10 mb-10">
                        <ul class="misc-links">
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Usage Rights</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6 mt-10 mb-10 text-right">
                        <p class="mb-0 footer-text text-lg-right text-center">&copy; 2021 All Rights Reserved.
                            <a href="/ttp://wwsthemes.com/" target="_blank" class="font-semi-bold">WWS THEMES</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div id="back"><i class="ion-chevron-up-sharp"></i></div>

    <div class="modal zoom-in fade" id="modal-welcome" data-open-onload="true" data-open-delay="0" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content" >
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="ion-close-sharp"></i></button>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row justify-content-end">
                            <div class="col-lg-6">
                                <h5 class="heading font-bold font-16 text-primary mb-10">Dental Care</h5>
                                <h5 class="heading font-bold h3 text-secondary">By Expert Professionals</h5>
                                <p class="mb-30">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="/ontact-1.html" class="btn btn-primary">Get in touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 

    <div class="modal fade zoom-in" id="modal-video" data-open-onload="false" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="ion-close-sharp"></i></button>
                <div class="modal-body">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters">
                            <div class="col-lg-12">
                                <div id="video-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home