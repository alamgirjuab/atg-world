import React, { useState } from 'react';
import { Alert, Modal } from 'react-bootstrap';
import { FaSistrix } from "react-icons/fa";
import logo from '../../atg-img/logo.png';
import useFirebase from '../../hooks/useFirebase';
import Register from '../Register/Register';
import { IoMdArrowDropdown } from "react-icons/io";
import './TopSection.css';

const TopSection = () => {
    const { user, logOut, registerUser } = useFirebase();
    // console.log(registerUser.email);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="row justify-content-between text-center py-3 d-flex justify-content-center">
            <div className="col-md-4">
                <img className="img-fluid w-25" src={logo} alt="" />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
                <div className="d-flex align-items-center px-2 bg-light w-50 rounded-pill">
                    <FaSistrix />
                    <input className="form-control bg-transparent border-0" type="search" placeholder="search for your favorite group in ATG" />
                </div>
            </div>
            {
                user?.email ?
                    <div className="col-md-4">
                        <img className="img-fluid rounded-circle img-size" src={user.photoURL} alt="" />
                        <button onClick={logOut} type="button" className="btn btn-link text-decoration-none fw-bold">{user.displayName}<IoMdArrowDropdown /></button>
                    </div>
                    :
                    <div className="col-md-4">Create account. <button onClick={handleShow} type="button" className="btn btn-link text-decoration-none fw-bold">It's Free</button> </div>

            }

            {/*------------------------------------ 
              | Registration Modal is added here |
              ----------------------------------*/}
            <Modal show={show} onHide={handleClose} size="lg">
                <Alert variant="success">
                    <Modal.Header closeButton>
                        <Modal.Title><h5>Let's learn, share and inspire each other with our passion for computer engineering. Sign up now</h5></Modal.Title>
                    </Modal.Header>
                </Alert>
                <Modal.Body><Register props={handleClose} /></Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default TopSection;