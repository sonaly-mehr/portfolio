import React from 'react';
import './About.css'
import women from '../../img/woman3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import resume from '../../../src/resume.pdf';
// ..
AOS.init();

const About = () => {
    return (
        <div className="about-section">
            <div class="container">
                <h6>Information</h6>
                <h4 class="about-header">About me</h4>
                <div class="row">
                    <div class="col-md-7">
                        <div class="about-me" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <h4>I help you to build proffesional websites</h4>
                            <p>I am a junior full stack web developer. I have completed my Bsc in Computer Science and Engineering at American International University - Bangladesh. Talking about my strengths &amp; skills, I am innovative, hardworking and quick learner. Seeking a responsible position to use my abilities and skill effectively and efficiently.</p>
                            <a href={resume} download="resume.pdf">Download Resume</a>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="about-pic" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={women} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;