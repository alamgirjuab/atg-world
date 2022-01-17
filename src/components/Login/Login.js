import React, { useState } from 'react';
import loginImg from '../../atg-img/login-img.png';
import { GrView } from "react-icons/gr";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle, loginUser, isLoading, authError } = useFirebase();
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Sign In</h4>
                    {!isLoading && <form onSubmit={handleLoginSubmit} className="my-4">
                        <input type="email" onChange={handleOnChange} aria-label="Email" name="email" className="form-control border rounded-0" placeholder="Email" />
                        <span className="d-flex align-items-center bg-white border pe-3"><input type="password" name="password" onChange={handleOnChange} aria-label="Password" className="form-control border-0 rounded-0" placeholder="Password" /><GrView /></span>
                        <button type="submit" className="btn btn-link text-decoration-none bg-primary mt-3 rounded-pill w-100 fw-bold text-white">Login</button>
                        <button type="button" className="btn btn-link text-decoration-none border mt-3 w-100 fw-bold"><span className="me-2"><BsFacebook /></span>Sign up with Facebook</button>
                        <button type="button" onClick={signInUsingGoogle} className="btn btn-link text-decoration-none border mt-3 w-100 fw-bold"><span className="me-2"><BsGoogle /></span>Sign up with Google</button>
                        <button type="button" className="btn btn-link text-decoration-none mt-3 w-100 text-center fw-bold">Forgot Password?</button>

                    </form>}
                    {/* Spinner and Alert Message */}
                    {isLoading && <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>}
                    {/* Show Success Message */}
                    {
                        user?.email && <div class="alert alert-success" role="alert">
                            Logged in Successfully!
                        </div>
                    }
                    {/* Show Error Message */}
                    {
                        authError && <div class="alert alert-danger" role="alert">
                            {authError}
                        </div>
                    }
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