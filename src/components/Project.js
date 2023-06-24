import React from "react";
// import github from "../assets/images/github.png";
// import LinkIcon from "../assets/images/link.png";
import "../styling/PortfolioPage.css";

export default function Project(props) {
    return (
        <div className="col-md-4">
            <div className="box">
                <img src={props.image} />
                <div className="box-content">
                    <h3 className="title">{props.title}</h3>
                    <span className="post">{props.tech}</span>
                </div>
                <ul className="icon">
                    {/* <li><a href={props.link}><img src={LinkIcon} /></a></li> */}
                    {/* <li><a href={props.github}><img src={github} /></a></li> */}
                </ul>
            </div>
        </div>
    )
}



