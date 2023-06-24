import React from "react";
import profilePic from "../../assets/images/profile-pic.jpg";

export default function About() {
    return (
    <main>
        <div className="about">
            <img src={profilePic} alt="Nastasia profile pic" style={{ width: "32%", height: "auto", filter: "none" }} />
        <p className="about-text">
            Hi there, I'm Nastasia! Welcome to my page. 
            <br />
            <br />
            Feel free to poke around my portfolio. I'm so excited to be graduating University of Washington's Full Stack / Full Time Bootcamp!!! Woo! 
            <br />
            <br />
            I like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like catsI like cats
        </p>
        </div>
    </main>
    );
}
