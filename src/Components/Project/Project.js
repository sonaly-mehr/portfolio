import React from 'react';
import './Project.css';
import ProjectTab from './ProjectTab';

// import project1 from '../../img/gym.22f4c0ee.png';
// import project2 from '../../img/project2.PNG';
// import project3 from '../../img/project3.PNG';
// import project4 from '../../img/commerce-cart.png';

const Project = () => {
    return (
        <div className="portfolio-sec">
            <div class="container">
                <h6>Showcase</h6>
                <h4 class="portfolio-header">Projects</h4>
                <ProjectTab />
            </div>
        </div>
    );
};

export default Project;