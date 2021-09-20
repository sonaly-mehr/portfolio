import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-sec">
            <div class="container">
                <h6>Communicate</h6>
                <h4 class="contact-header">Contact Me</h4>
                <div class="contact-form" data-aos="fade-down-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <form action="">
                        <input type="text" placeholder="Your Name" name="name" />
                        <input type="email" placeholder="Your Email" name="email" /> <br />
                        <textarea name="message" id="" placeholder="Your Message"></textarea> <br />
                        <div class="form-submit">
                            <input type="submit" name="" id="" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;