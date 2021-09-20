import React from 'react';
import './Project.css';
import project1 from '../../img/gym.22f4c0ee.png';
import project2 from '../../img/project2.PNG';
import project3 from '../../img/project3.PNG';

const Project = () => {
    return (
        <div className="portfolio-sec">
            <div class="container">
                <h6>Showcase</h6>
                <h4 class="portfolio-header">Projects</h4>
                <div class="portfolio-container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={project1} alt="" />
                                <p>This project is about gym training service where user can enrol services, give feedback. Admin can add or delete services, or make a new admin</p>
                                <div className="view-bttn">
                                <a href="https://thirsty-hermann-9697cb.netlify.app/" target="_blank">View</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={project3} alt="" />
                                <p>This website is a lulurious hotel website Where user can find and book rooms accoring to their needs. After the booking process user can see order details. User can also view all their booking history if they are logged in!</p>
                                <div className="view-bttn">
                                <a href="https://tender-galileo-68f243.netlify.app/" target="_blank">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={project2} alt="" />
                                <p>This is a doctor portal website where any Patients can select a specific date and can take appointment on that date. Admin can view all the patients list also can see appointments for the day on a selected date</p>
                                <div className="view-bttn">
                                <a href="https://zealous-neumann-c42683.netlify.app/" target="_blank">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;