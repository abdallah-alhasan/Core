
function Register() {
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      {/* <section className=""> */}
        {/* <!-- Jumbotron --> */}
        <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                <div className="card-body py-5 px-md-5">
                  <img src="images/logo.svg" alt="" class="logo" style={{ marginBottom: '30px' }} />

                    <form>
                      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" placeholder='First name' />
                            {/* <label className="form-label" for="form3Example1">First name</label> */}
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" placeholder='Last name' />
                            {/* <label className="form-label" for="form3Example2">Last name</label> */}
                          </div>
                        </div>
                      </div>

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
                        Sign up
                      </button>

                      {/* <!-- Register buttons --> */}
                      <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block mb-4">
                        Login
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}
    </>
  )
}

export default Register