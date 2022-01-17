import React, { useState } from 'react';
import './Register.css';
import { GrView } from "react-icons/gr";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import loginImg from '../../atg-img/login-img.png';
import { Alert, Modal } from 'react-bootstrap';
import Login from '../Login/Login';
import useFirebase from '../../hooks/useFirebase';


const Register = () => {
    const { user, signInUsingGoogle, registerUser, isLoading, authError } = useFirebase();
    const [show, setShow] = useState(false);
    const [loginData, setLoginData] = useState({});

    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Create Account</h4>
                    {!isLoading && <form className="my-4" onSubmit={handleLoginSubmit}>
                        <div className="input-group">
                            {/* <span className="input-group-text">First and last name</span> */}
                            <input type="text" onChange={handleOnChange} aria-label="First name" name="First Name" className="form-control border rounded-0" placeholder="First Name" />
                            <input type="text" onChange={handleOnChange} aria-label="Last name" name="Last Name" className="form-control border rounded-0" placeholder="Last Name" />
                        </div>
                        <input type="email" onChange={handleOnChange} aria-label="Email" name="email" className="form-control border rounded-0" placeholder="Email" />
                        <span className="d-flex align-items-center bg-white border pe-3"><input type="password" name="password" onChange={handleOnChange} aria-label="Password" className="form-control border-0 rounded-0" placeholder="Password" /><GrView /></span>
                        <input type="password" onChange={handleOnChange} aria-label="Password2" className="form-control border rounded-0" name="password2" placeholder="Confirm Password" />
                        <button type="submit" className="btn btn-link text-decoration-none bg-primary mt-3 rounded-pill w-100 fw-bold text-white">Create Account</button>
                        <button type="button" className="btn btn-link text-decoration-none border mt-3 w-100 fw-bold"><span className="me-2"><BsFacebook /></span>Sign up with Facebook</button>
                        <button type="button" onClick={signInUsingGoogle} className="btn btn-link text-decoration-none border mt-3 w-100 fw-bold"><span className="me-2"><BsGoogle /></span>Sign up with Google</button>
                    </form>}

                    {/* Show Spinner */}

                    {isLoading && <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>}
                    {/* Show Success Message */}
                    {
                        user?.email && <div class="alert alert-success" role="alert">
                            Account Created Successfully!
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
                        <p className=" mt-3">Already have an account?</p>
                        <button type="button" onClick={handleShow1} className="btn btn-link text-decoration-none fw-bold">Sign In</button>

                    </div>
                    <img className="img-fluid float-end" src={loginImg} alt="" />
                    <small className="float-end">By signing up, you agree to our Terms and conditions, Privacy policy</small>
                </div>


                {/*--------------------------- 
                 | Login Modal is added here |
                  --------------------------*/}
                <Modal show={show} onHide={handleClose1} size="lg">
                    <Alert variant="success">
                        <Modal.Header closeButton>
                            <Modal.Title><h5>Let's learn, share and inspire each other with our passion for computer engineering. Sign up now</h5></Modal.Title>
                        </Modal.Header>
                    </Alert>
                    <Modal.Body><Login /></Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
};

export default Register;