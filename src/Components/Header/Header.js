import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className="header-section">
            <div className="container">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="header-logo">
                            <h4><FontAwesomeIcon icon={faSquareFull}></FontAwesomeIcon> Sonaly Akther /<span> web developer</span></h4>
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-2 col-12">
                        <nav class="menu">
                            <ul>
                                <li><a href="/home">Home</a>
                                </li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/resume">Resume</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;