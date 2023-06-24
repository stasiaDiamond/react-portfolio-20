import React from "react";
import github from "../assets/images/github.png";

export default function Footer() {
  return (
    <footer className="text-center">
      <a href="https://github.com/stasiaDiamond" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github logo" style={{ width: '4em', height: '4em' }} />
      </a>
    </footer>
  );
}
