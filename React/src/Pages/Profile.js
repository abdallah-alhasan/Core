import React from 'react'

function Profile() {
    return (
        <div classNameName='app'>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="heading bold text-left">Profile</h1>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li className="active">Profile</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-60">
                <div className="row">
                    <div className="col-lg-4 mt-20">
                        <div className="doctor-img">
                            <img src="images/tooth.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 mt-20">
                        <div className="doctor-details text-left">
                            <h5 className="heading font-bold text-primary">Profile</h5>
                            <h3 className="heading font-bold mb-10"> Welcome Dr. Mike Hendricks</h3>
                            <hr className="hr-1 ml-0" />



                            <form>
                                <div className="form-row">

                                <div className="form-group col-md-6">
                                        <label for="inputPassword4">FullName</label>
                                        <input type="text" className="form-control" name='name' id="inputPassword4" placeholder="Password" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                    </div>
                                   
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">PhoneNumber</label>
                                        <input type="text" className="form-control" id="inputCity" placeholder='0770000000' />
                                    </div>
                                  
                                    <div className="form-group col-md-6">
                                        <label for="inputZip">Age</label>
                                        <input type="number" className="form-control" id="inputZip" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Edit</button>
                            </form>




                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-primary pt-60 pb-60 mt-80" style={{ backgroundImage: 'url(images/world-map-2.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '50%' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 mt-20 mb-20">
                            <div className="counter-box-1 text-center">
                                <div className="fact-number text-white">
                                    <span className="fact-count" data-from="0" data-to="300" data-speed="3000">0</span>+
                                </div>
                                <h5 className="heading font-semi-bold text-white mb-0">Surgeries</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-20 mb-20">
                            <div className="counter-box-1 text-center">
                                <div className="fact-number text-white">
                                    <span className="fact-count" data-from="0" data-to="700" data-speed="3000">0</span>+
                                </div>
                                <h6 className="heading font-semi-bold text-white mb-0">Patients</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-20 mb-20">
                            <div className="counter-box-1 text-center">
                                <div className="fact-number text-white">
                                    <span className="fact-count" data-from="0" data-to="15" data-speed="3000"></span>+
                                </div>
                                <h6 className="heading font-semi-bold text-white mb-0">Years Experience</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-20 mb-20">
                            <div className="counter-box-1 text-center">
                                <div className="fact-number text-white">
                                    <span className="fact-count" data-from="0" data-to="1500" data-speed="3000">0</span>+
                                </div>
                                <h6 className="heading font-semi-bold text-white mb-0">consultations</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-60 mb-80">
                <div className="row justify-content-center">
                    <div className="col-lg-5 mt-20">
                        <h5 className="heading font-bold text-primary">Get in Touch</h5>
                        <h3 className="heading font-bold">Book your appointment</h3>
                        <p className="h5 mb-30">Excepteur sint occaecat sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                        <ul className="social social-2x d-inline-flex mt-20">
                            <li><a className="facebook" href="#"><i className="ion-logo-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="ion-logo-twitter"></i></a></li>
                            <li><a className="google" href="#"><i className="ion-logo-google"></i></a></li>
                            <li><a className="whatsapp" href="#"><i className="ion-logo-whatsapp"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 mt-20">
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Your Full Name" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Your Phone Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Your Email ID" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input className="form-control date-select" type="text" placeholder="Your Date of Birth" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>Select Appointment Slot</option>
                                            <option>9:00 p.m. - 12:00 p.m.</option>
                                            <option>12:00 p.m. - 4:00 p.m.</option>
                                            <option>4:00 p.m. - 8:00 p.m.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="4" placeholder="Special Message to Doctor"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Book Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

     
        </div>
    )
}

export default Profile