import React from "react";
import "../../styling/ResumePage.css";
import resume from "../../assets/resume/fake-resume.png";

export default function Resume() {
    return (
        <main>
            <div className="skills-container">
                <div className="skills-row">
                    <h3>Front-End Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="skills-row">
                    <h3>Back-End Skills</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySql, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                    </ul>
                </div>
            </div>

            <div className="download-resume">
                <h2>...click below to download</h2>
                <div className="text-center">
                    <a href={resume} download>
                        <img
                            src={resume}
                            style={{ height: "10em", width: "auto" }}
                            alt="Download"
                        />
                    </a>
                </div>
            </div>
        </main>
    );
}
