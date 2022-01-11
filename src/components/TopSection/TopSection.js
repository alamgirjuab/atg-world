import React from 'react';
import { FaSistrix } from "react-icons/fa";
import logo from '../../atg-img/logo.png';

const TopSection = () => {
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
            <div className="col-md-4">Create account. <button type="button" className="btn btn-link text-decoration-none fw-bold">It's Free</button> </div>
        </div>
    );
};

export default TopSection;