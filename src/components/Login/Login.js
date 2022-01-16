import React from 'react';
import loginImg from '../../atg-img/login-img.png';
import { GrView } from "react-icons/gr";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Sign In</h4>
                    <div className="my-4">
                        <input type="email" aria-label="Email" className="form-control border rounded-0" placeholder="Email" />
                        <span className="d-flex align-items-center bg-white border pe-3"><input type="password" aria-label="Password" className="form-control border-0 rounded-0" placeholder="Password" /><GrView /></span>
                        <button type="button" className="btn btn-link text-decoration-none bg-primary mt-3 rounded-pill w-100 fw-bold text-white">Create Account</button>
                        <button type="button" className="btn btn-link text-decoration-none border mt-3 w-100 fw-bold"><span className="me-2"><BsFacebook /></span>Sign up with Facebook</button>
                        <button type="button" onClick={signInUsingGoogle} className="btn btn-link text-decoration-none border mt-3 w-100 fw-bold"><span className="me-2"><BsGoogle /></span>Sign up with Google</button>
                        <button type="button" className="btn btn-link text-decoration-none mt-3 w-100 text-center fw-bold">Forgot Password?</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-center float-end">
                        <p className=" mt-3">Don't have an account yet?</p>
                        <button type="button" className="btn btn-link text-decoration-none fw-bold">Create new for free</button>

                    </div>
                    <img className="img-fluid float-end" src={loginImg} alt="" />
                    <small className="float-end">By signing up, you agree to our Terms and conditions, Privacy policy</small>
                </div>
            </div>
        </div>
    );
};

export default Login;