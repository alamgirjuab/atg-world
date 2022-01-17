import React, { useEffect, useState } from 'react';
import './Blogs.css';
import meetupImg from '../../atg-img/meetup.jpg';
import img3 from '../../atg-img/ronal jones.png';
import img4 from '../../atg-img/joseph gray.png';
import { GrView } from "react-icons/gr";
import { MdShare, MdOutlineLocationOn } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Dropdown } from 'react-bootstrap';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-9">
                    {
                        blogs.map(blog => <div key={blog._id} className="card mb-3">
                            <img src={blog.imgUrl} alt="" />
                            <div className="card-body">
                                <h6>{blog.type}</h6>
                                <h5 className="card-title">{blog.title}</h5>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="card-text">{blog.description}</p>
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
                                </div>
                                <div className="row">
                                    <div className="d-flex align-items-center col-md-6">
                                        <img className="img-fluid article-profile-img" src={blog.photoUrl} alt="" />
                                        <h5 className="ms-2">{blog.displayName}</h5>
                                    </div>
                                    <div className="d-flex align-items-center text-end col-md-6 ps-5">
                                        <GrView />
                                        <h6 className="mx-3">1.4k views</h6>
                                        <span className="p-2 rounded bg-light"><MdShare /></span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }


                    <div className="card mb-3">
                        <img src={meetupImg} alt="" />
                        <div className="card-body">
                            <h6>Meetup</h6>
                            <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
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
                            </div>
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
                    <div className="card mb-3">
                        {/* <img src={meetupImg} alt="" /> */}
                        <div className="card-body">
                            <h6>Meetup</h6>
                            <h5 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h5>
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
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
                            </div>
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