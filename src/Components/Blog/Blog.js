import React from 'react';
import './Blog.css'
import blog1 from '../../img/blog1.jpg';
import blog2 from '../../img/blog2.jpg';
import blog3 from '../../img/blog3.jpg';

const Blog = () => {
    return (
        <div className="blog-sec">
            <div class="container">
                <h6>Writings</h6>
                <h4 class="blog-header">Blog</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="single_blog" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={blog1} alt="" />
                            <h4>10 Basic JavaScript Method You Should Know As A Beginner</h4>
                            <p>JavaScript is one of the most popular modern web technologies! As your JavaScript skills grow, your websites will enter a new dimension of power and creativity.</p>
                            <a href="https://medium.com/@sonaly.mehr/10-basic-javascript-method-you-should-know-as-a-beginner-6aa723b29e11" target="_blank">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single_blog" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={blog3} alt="" />
                            <h4>10 Es6 Block Bindings And Function Core Topics You Should Know</h4>
                            <p>An ECMAScript engine is a program that executes source code written in a version of the ECMAScript language standard, for example, JavaScript.</p>
                            <a href="https://medium.com/@sonaly.mehr/10-es6-block-bindings-and-function-core-topics-you-should-know-b54bb998d7e" target="_blank">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="single_blog" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <img src={blog2} alt="" />
                            <h4>10 Fundamental Things You Need To Know About React</h4>
                            <p>Today, ReactJS has become highly popular because of its extra simplicity and flexibility. Many people are even referring to it as the future of web development. </p>
                            <a href="https://medium.com/@sonaly.mehr/10-fundamental-things-you-need-to-know-about-react-13cc8e65cff0" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;