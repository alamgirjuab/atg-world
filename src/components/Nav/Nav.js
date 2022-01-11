import React from 'react';
import { HiUserGroup } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import './Nav.css';

const Nav = () => {
    return (
        <div className="container">
            <div className='d-flex justify-content-between mt-5'>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">All Posts (32)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Article</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Job</a>
                    </li>

                </ul>
                <div>
                    <button type="button" className="btn btn-secondary me-3">Write a Post<IoMdArrowDropdown /> </button>
                    <button type="button" className="btn btn-primary"><HiUserGroup /> Join Group</button>
                </div>
            </div>
            <div className="line mt-2"></div>
        </div>
    );
};

export default Nav;