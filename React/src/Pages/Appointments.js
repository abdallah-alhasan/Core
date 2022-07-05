import React from 'react'
import Navbar from '../layouts/Navbar'

function Appointments() {
  return (
    <React.Fragment>
        
    <Navbar/>
    <div class="page-header">           
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="heading bold">Book Appointment</h1>
                </div>
            </div>
        </div>
        <div class="breadcrumb-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="breadcrumb">
                            <li><a href="/ndex-hospital-classic.html">Home</a></li>
                            <li class="active">Book Appointment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-80 mb-60">
        <div class="row">
            <div class="col-lg-8">
                <h3 class="heading font-bold mb-20">Online Appointment Form</h3>
                <p class="mb-30">The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left.</p>
                <form>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Your First Name" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Your Last Name" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Full Address" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="City" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Your Phone Number" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Your Email ID" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input class="form-control date-select" type="text" placeholder="Date Of Birth" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" tabindex="-98">
                                    <option>Select Slot</option>
                                    <option>9:00 p.m. - 12:00 p.m.</option>
                                    <option>12:00 p.m. - 4:00 p.m.</option>
                                    <option>4:00 p.m. - 8:00 p.m.</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <legend>Emergency Details</legend>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input class="form-control" type="text" placeholder="Contact Person" />
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-group">
                                            <select class="form-control" tabindex="-98">
                                                <option>Blood Group</option>
                                                <option>A+</option>
                                                <option>B+</option>
                                                <option>AB-</option>
                                                <option>O+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-3">
                                        <div class="form-group">
                                            <select class="form-control" tabindex="-98">
                                                <option>Age</option>
                                                <option>18-40</option>
                                                <option>41-60</option>
                                                <option>61+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                            <label class="custom-control-label" for="customCheck1">Willing to donate Blood</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Select Gender : </label>
                                        <div class="custom-control custom-radio custom-control-inline ml-20">
                                            <input type="radio" id="genderRadio1" name="genderRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="genderRadio1">Male</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="genderRadio2" name="genderRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="genderRadio2">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-lg-6">
                            <fieldset>
                                <legend>Allergies, If Any</legend>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Allergy 1" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Allergy 2" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="Allergy 3" />
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-lg-6">
                            <fieldset>
                                <legend>Services Needed</legend>
                                <div class="form-group mb-0 " style={{textAlign: 'justify'}}>
                                    <div class="custom-control custom-checkbox mb-10">
                                        <input type="checkbox" class="custom-control-input" id="disease1" />
                                        <label class="custom-control-label" for="disease1">Blood pressure check</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-10">
                                        <input type="checkbox" class="custom-control-input" id="disease2" />
                                        <label class="custom-control-label" for="disease2">RBC count check</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-10">
                                        <input type="checkbox" class="custom-control-input" id="disease3" />
                                        <label class="custom-control-label" for="disease3">Bone marrow</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-10">
                                        <input type="checkbox" class="custom-control-input" id="disease4" />
                                        <label class="custom-control-label" for="disease4">Joint lubrication</label>
                                    </div>
                                    <div class="custom-control custom-checkbox mb-10">
                                        <input type="checkbox" class="custom-control-input" id="disease5" />
                                        <label class="custom-control-label" for="disease5">Eye sight checkup</label>
                                    </div>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="disease6" />
                                        <label class="custom-control-label" for="disease6">Liver profile</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <textarea class="form-control" rows="5" placeholder="Special Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit"><i class="ion-paper-plane-outline icon-left"></i> Book Appointment</button>
                    </div>
                </form>
            </div>
            <div class="col-lg-4 mt-40 mt-lg-0">
                <aside class="sidebar pl-lg-20">
                    <div class="widget widget-text pt-0">
                        <h5 class="heading d-flex align-items-center"><i class="ion-help-circle-outline icon-left"></i>Need Help?</h5>
                        <p class="normal">In case of problems in filling out the form, pleease do let us know.</p>
                        <p class="h6 d-flex align-items-top mb-0"><i class="ion-mail-outline icon-left text-primary"></i>contact@example.com</p>
                        <p class="h6 d-flex align-items-center mb-0"><i class="ion-call-outline icon-left text-primary"></i>[00] 21-562-5625</p>
                    </div>
                    <div class="widget widget-departments">
                        <h5 class="heading d-flex align-items-center"><i class="ion-share-social-outline icon-left"></i>Departments</h5>
                        <ul class="mb-0">
                            <li>
                                <a href="/epartment-detail-1.html">
                                    <div class="dep-icon">
                                        <i class="mw-brain"></i>
                                    </div>
                                    <h6 class="mb-0 dep-name">Neurology</h6>
                                </a>
                            </li>
                            <li>
                                <a href="/epartment-detail-1.html">
                                    <div class="dep-icon">
                                        <i class="mw-tooth"></i>
                                    </div>
                                    <h6 class="mb-0 dep-name">Dental Care</h6>
                                </a>
                            </li>
                            <li>
                                <a href="/epartment-detail-1.html">
                                    <div class="dep-icon">
                                        <i class="mw-waistline"></i>
                                    </div>
                                    <h6 class="mb-0 dep-name">General Health</h6>
                                </a>
                            </li>
                            <li>
                                <a href="/epartment-detail-1.html">
                                    <div class="dep-icon">
                                        <i class="mw-eye"></i>
                                    </div>
                                    <h6 class="mb-0 dep-name">Eye Care</h6>
                                </a>
                            </li>
                            <li>
                                <a href="/epartment-detail-1.html" class="pb-0">
                                    <div class="dep-icon">
                                        <i class="mw-blood-drop"></i>
                                    </div>
                                    <h6 class="mb-0 dep-name">Blood Bank</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="widget widget-social">
                        <h5 class="heading d-flex align-items-center"><i class="ion-share-social-outline icon-left"></i>We're Social</h5>
                        <p class="mb-20">Care for your loved ones by sharing our blogs with your friends & family</p>
                        <ul class="social social-round social-2x">
                            <li><a class="facebook" href="/"><i class="ion-logo-facebook"></i></a></li>
                            <li><a class="twitter" href="/"><i class="ion-logo-twitter"></i></a></li>
                            <li><a class="skype" href="/"><i class="ion-logo-skype"></i></a></li>
                            <li><a class="pinterest" href="/"><i class="ion-logo-pinterest"></i></a></li>
                            <li><a class="instagram" href="/"><i class="ion-logo-instagram"></i></a></li>
                            <li><a class="youtube" href="/"><i class="ion-logo-youtube"></i></a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Appointments