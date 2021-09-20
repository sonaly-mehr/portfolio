import React from 'react';
import './IntroBanner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import profile from '../../img/portfolio-img.570fc921.jpg'
import resume from '../../../src/resume.pdf';


const IntroBanner = () => {
    return (
        <div className="banner-section">
            <div class="banner-wrap">
                <div class="banner-left">
                    <div class="introduction" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <img src={profile} alt="" class="img img-fluid" />
                        <h4>Sonaly <br /> Akter</h4>
                        <h5>Web Developer</h5>
                        <div class="social-links">
                            <ul>
                                <li><a href="https://www.facebook.com/profile.php?id=100010859238930" target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
                                <li><a href="https://www.linkedin.com/in/sonaly-mehr-bb1b721ba/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
                                <li><a href="https://github.com/sonaly-mehr" target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
                                <li><a href="https://www.instagram.com/sonaly_mehr/" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="banner-right" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <h1>Hello</h1>
                    <h6>Here's who I am &amp; what I do</h6>
                    <div class="resume-project-btn">
                        <a href={resume} download="resume.pdf" class="resume">Resume</a>
                        <a class="project" href="/projects">Projects</a>
                    </div>
                    <p>I work on web design and development. Need help on your project? </p>
                </div>
            </div>
        </div>
    );
};

export default IntroBanner;