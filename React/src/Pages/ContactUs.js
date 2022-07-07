
import { useEffect, useState } from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import axios from 'axios'


function ContactUs() {


    //https://jsonplaceholder.typicode.com/todos/

    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [message,setMessage] = useState('');



    // const postData  = (e) => {

    //     e.preventDefault();
    // }
    const form = useRef();

     function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ow9xrmn', 'template_kss99vt', form.current, 'PnvT6EB3r4gvRXEnb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();

    }








    return (
        <div className='app'>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h1 class="heading bold text-left">Contact Us</h1>
                        </div>
                    </div>
                </div>
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <ul class="breadcrumb">
                                    <li><Link to="/">Home</Link></li>
                                    <li class="active">Contact US</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="container mt-80">
                <div class="row">
                    <div class="col-lg-5 bg-light p-40">
                        <h3 class="heading font-bold mb-40">Get in Touch</h3>
                        <div class="contact-icon">
                            <div class="con-icon">
                                <i class="ion-location-outline"></i>
                            </div>
                            <div class="con-body">
                                <h5 class="heading font-bold d-flex align-items-center mb-10">Address</h5>
                                <p class="mb-0 h6 text-left" >Salam Center Building, <br /> Amman, Jordan - 92680</p>
                            </div>
                        </div>
                        <hr />
                        <div class="contact-icon">
                            <div class="con-icon">
                                <i class="ion-call-outline"></i>
                            </div>
                            <div class="con-body">
                                <h5 class="heading font-bold d-flex align-items-center mb-10">Helpline</h5>
                                <p class="mb-0 h6">213-562-5625</p>
                            </div>
                        </div>
                        <hr />
                        <div class="contact-icon">
                            <div class="con-icon">
                                <i class="ion-mail-outline"></i>
                            </div>
                            <div class="con-body">
                                <h5 class="heading font-bold d-flex align-items-center mb-10">Email</h5>
                                <p class="mb-0 h6">medwise@example.com</p>
                            </div>
                        </div>
                        <p class="mb-0 h6 mt-50 text-muted">For online appointment and hassle free consultation, <br /> <a href="#">book your appointment now</a></p>
                    </div>
                    <div class="col-lg-7 p-40 border border-lg-left-0" style={{ backgroundImage: ' url(images/world-map-1.png)', backgroundRepeat: 'no-repeat', backgroundPosition: '95% 4%' }}>
                        <h3 class="heading font-bold mb-20">Contact Form</h3>
                        <p class="h6 mb-50 text-muted">Drop your feedback & suggestions</p>
                        <form id="main-contact-form" onSubmit={sendEmail} ref={form}>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Full name" id="fname" name="name" />
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Email address" id="email" name="email" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="5" placeholder="Please enter your message" id="message" name="message"></textarea>
                            </div>

                            <p id="status"></p>
                            <button class="btn btn-primary" type="submit" name="submit"> Submit Query</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="container mt-60 mb-80">
                <div class="row">
                    <div class="col-lg-4 mt-20">
                        <div class="text-center p-40 border">
                            <div class="icon icon-outline-primary icon-round icon-4x mb-20">
                                <i class="ion-location-outline"></i>
                            </div>
                            <h4 class="heading font-bold mb-10">Address</h4>
                            <p class="mb-0 h6">Salam Center Building, <br /> Amman, Jordan - 92680</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-20">
                        <div class="text-center p-40 border">
                            <div class="icon icon-outline-primary icon-round icon-4x mb-20">
                                <i class="ion-call-outline"></i>
                            </div>
                            <h4 class="heading font-bold mb-10">Get in Touch</h4>
                            <p class="mb-0 h6">Phone : 213-562-5625</p>
                            <p class="mb-0 h6">Mail : medwise@example.com</p>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-20">
                        <div class="text-center p-40 border">
                            <div class="icon icon-outline-primary icon-round icon-4x mb-20">
                                <i class="ion-alarm-outline"></i>
                            </div>
                            <h4 class="heading font-bold mb-10">OPD Hours</h4>
                            <p class="mb-0 h6">Mon to Fri : 10am to 6pm</p>
                            <p class="mb-0 h6">Sat & Sun : 12am to 3pm</p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>

    )
}

export default ContactUs