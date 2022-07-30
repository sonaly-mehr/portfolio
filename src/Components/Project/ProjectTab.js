import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import './Project.css'
import project1 from '../../img/gym.22f4c0ee.png';
import project2 from '../../img/project2.PNG';
import project3 from '../../img/project3.PNG';
import project4 from '../../img/ecommerce.PNG';
import design1 from '../../img/design1.PNG'
import design2 from '../../img/design2.PNG'
import design3 from '../../img/design3.PNG'
import design4 from '../../img/design4.PNG'
import design5 from '../../img/design5.PNG'
// import design1 from '../../img/design1.PNG'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const ProjectTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Web Development" {...a11yProps(0)} />
                    <Tab label="Web Design" {...a11yProps(1)} />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
            <div class="portfolio-container">
                    <div class="row">
                    <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={project4} alt="" />
                                <p>An E-commerce website where any user can view product, search product, buy products and make purchase for the product</p>
                                <div className="view-bttn">
                                <a href="https://ecommerce-shop-webapp.netlify.app/" target="_blank">View</a>
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
                                <a href="https://elated-gates-bf687d.netlify.app/" target="_blank">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={project1} alt="" />
                                <p>This project is about gym training service where user can enrol services, give feedback. Admin can add or delete services, or make a new admin</p>
                                <div className="view-bttn">
                                <a href="https://thirsty-hermann-9697cb.netlify.app/" target="_blank">View</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <div class="portfolio-container">
                    <div class="row">
                    <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={design1} alt="" className='design_img'/>
                                <div className="view-bttn">
                                <a href="https://agency-website-monu.netlify.app/" target="_blank">View</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={design2} alt="" className='design_img'/>
                                <div className="view-bttn">
                                <a href="https://bizness-website.netlify.app/" target="_blank">View</a>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={design3} alt="" className='design_img'/>
                                <div className="view-bttn">
                                <a href="https://cude-website.netlify.app/" target="_blank">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={design4} alt="" className='design_img'/>
                                <div className="view-bttn">
                                <a href="https://creative-website-template.netlify.app/" target="_blank">View</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="single-portfolio" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={design5} alt="" className='design_img'/>
                                <div className="view-bttn">
                                <a href="https://vacation-website.netlify.app/" target="_blank">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>
    );
};

export default ProjectTab;