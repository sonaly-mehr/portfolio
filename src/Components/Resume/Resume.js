import React from "react";
import "./Resume.css";
import portfolio from "../../img/portfolio-img.570fc921.jpg";

const Resume = () => {
  return (
    <div className="resume-section">
      <div class="container">
        <div class="resume-intro">
          <div class="resume-img">
            <img src={portfolio} alt="" />
          </div>
          <div class="intro">
            <h1>
              Sonaly <br /> Akther
            </h1>
            <h6>Fullstack web developer</h6>
          </div>
          <div class="information">
            <span class="info-span">Name: </span>
            <span>Sonaly Akter</span> <br />
            <span class="info-span">Email: </span>
            <span>sonaly.mehr@gmail.com</span> <br />
            <span class="info-span">Phone: </span>
            <span>xx-xxx-xxx</span> <br />
            <span class="info-span">Address: </span>
            <span>Dhaka, Bangladesh</span> <br />
          </div>
        </div>
        <div class="resume-details">
          <h2>Resume</h2>
          <div class="resume-objective">
            <h4>- Career Objective</h4>
            <p>
              Full Stack and Skilled Web Developer to build a career which
              enhance my skill set in web technologies to develop and implement
              solutions to meet business needs
            </p>
          </div>
          <div class="resume-objective">
            <h4>- Education</h4>
            <div class="education">
              <h6>American International University-Bangladesh</h6>
              <span>Computer Science &amp; Engineering</span>
            </div>
          </div>
          <div class="resume-objective">
            <h4>- Skills</h4>
            <div class="skills">
              <h6>
                Expertise:{" "}
                <span>HTML, CSS, Bootstrap, JavaScript, React.js</span>
              </h6>
              <h6>
                Comfortable:{" "}
                <span>
                Node.js, MongoDB, Express.js, Jquery, ES6, Redux.js , Context API
                </span>
              </h6>
              <h6>
                Familiar:{" "}
                <span>TypeScript, React Native, Material UI, SASS</span>
              </h6>
              <h6>
                Tools:{" "}
                <span>
                  Git, Github, VS Code, Chrome Dev tool, Firebase, Netlify,
                  Heroku
                </span>
              </h6>
            </div>
          </div>
          <div class="resume-objective">
            <h4>- Language</h4>
            <div class="language">
              <span>Bangla(Native)</span>
              <span>English(proficient)</span> <br />
              <span>Hindi(proficient)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
