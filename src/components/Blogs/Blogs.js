import React from 'react';
import './Blogs.css';
import articleImg from '../../atg-img/article.jpg';
import eduImg from '../../atg-img/education.jpg';
import meetupImg from '../../atg-img/meetup.jpg';
import img1 from '../../atg-img/sarthak kamra.png';
import img2 from '../../atg-img/sara west.png';
import img3 from '../../atg-img/ronal jones.png';
import img4 from '../../atg-img/joseph gray.png';
import { GrView } from "react-icons/gr";
import { MdShare, MdOutlineLocationOn } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-9">
                    <div class="card mb-3">
                        <img src={articleImg} alt="" />
                        <div class="card-body">
                            <h6>Article</h6>
                            <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className="row">
                                <div className="d-flex align-items-center col-md-6">
                                    <img className="img-fluid article-profile-img" src={img1} alt="" />
                                    <h5 className="ms-2">Shrthak Kamra</h5>
                                </div>
                                <div className="d-flex align-items-center text-end col-md-6 ps-5">
                                    <GrView />
                                    <h6 className="mx-3">1.4k views</h6>
                                    <span className="p-2 rounded bg-light"><MdShare /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <img src={eduImg} alt="" />
                        <div class="card-body">
                            <h6>Education</h6>
                            <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className="row">
                                <div className="d-flex align-items-center col-md-6">
                                    <img className="img-fluid article-profile-img" src={img2} alt="" />
                                    <h5 className="ms-2">Sara West</h5>
                                </div>
                                <div className="d-flex align-items-center text-end col-md-6 ps-5">
                                    <GrView />
                                    <h6 className="mx-3">1.4k views</h6>
                                    <span className="p-2 rounded bg-light"><MdShare /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <img src={meetupImg} alt="" />
                        <div class="card-body">
                            <h6>Meetup</h6>
                            <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <button type="button" className="btn btn-link text-decoration-none border border-2 rounded-pill w-75 fw-bold text-danger">Visit Website</button>
                            <div className="row mt-3">
                                <div className="d-flex align-items-center col-md-6">
                                    <img className="img-fluid article-profile-img" src={img3} alt="" />
                                    <h5 className="ms-2">Ronal Jones</h5>
                                </div>
                                <div className="d-flex align-items-center text-end col-md-6 ps-5">
                                    <GrView />
                                    <h6 className="mx-3">1.4k views</h6>
                                    <span className="p-2 rounded bg-light"><MdShare /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        {/* <img src={meetupImg} alt="" /> */}
                        <div class="card-body">
                            <h6>Meetup</h6>
                            <h5 class="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <p class="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            {/* dropdown menu will appear here */}
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <BiDotsHorizontalRounded />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <button type="button" className="btn btn-link text-decoration-none border border-2 rounded-pill w-75 fw-bold text-primary">Apply on Timejobs</button>
                            <div className="row mt-3">
                                <div className="d-flex align-items-center col-md-6">
                                    <img className="img-fluid article-profile-img" src={img4} alt="" />
                                    <h5 className="ms-2">Joseph Gray</h5>
                                </div>
                                <div className="d-flex align-items-center text-end col-md-6 ps-5">
                                    <GrView />
                                    <h6 className="mx-3">1.4k views</h6>
                                    <span className="p-2 rounded bg-light"><MdShare /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <MdOutlineLocationOn />
                            <h6 className="ms-2">Nodia, India</h6>
                        </div>
                        <GoPencil />
                    </div>
                    <div className="line mb-4"></div>
                    <div className="d-flex">
                        <span className="fs-5"><RiErrorWarningLine /></span>
                        <p className='px-2'>Your location will help us serve better and extend a personalised experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;