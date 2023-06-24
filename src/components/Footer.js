import React from "react";
import github from "../assets/images/github.png";
import "../styling/EntireApp.css";

export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/stasiaDiamond" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github logo" style={{ width: '3em', height: '3em' }} />
      </a>
    </footer>
  );
}
