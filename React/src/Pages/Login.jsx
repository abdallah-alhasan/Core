
function Login() {

    return (
        <>
            {/* <!-- Section: Design Block --> */}
            <section className="">
                {/* <!-- Jumbotron --> */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                
                                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                    <img src="images/500-580-1.png" alt="" height={610}/>
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <img src="images/logo.svg" alt="" class="logo" style={{marginBottom:'30px'}} />
                                        
                                        <form>
                                            
                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" placeholder='Email address' />
                                                {/* <label className="form-label" for="form3Example3">Email address</label> */}
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" placeholder='Password' />
                                                {/* <label className="form-label" for="form3Example4">Password</label> */}
                                            </div>



                                            {/* <!-- Submit button --> */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                                Login
                                            </button>
                                           
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}
export default Login