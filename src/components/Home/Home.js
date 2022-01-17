import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <div>
            <Banner />
            <Nav />
            <Blogs />
        </div>
    );
};

export default Home;