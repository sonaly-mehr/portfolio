import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import IntroBanner from '../IntroBanner/IntroBanner';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <IntroBanner></IntroBanner>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;