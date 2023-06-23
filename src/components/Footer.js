import React from "react";
// import github from  "../assets/images/green-github.png";
// import linkedin from  "../assets/images/green-linkedin.png";
// import spotify from "../assets/images/green-spotify.png";

export default function Footer() {
  return (
    <footer className="text-center footer">
      <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
        <img src={"github"} alt="github logo" style={{ width: 'auto', height: '6em' }} />
      </a>
      <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
        <img src={"linkedin"} alt="linkedin logo" style={{ width: 'auto', height: '6em' }} />
      </a>
      <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
        <img src={"spotify"} alt="spotify logo" style={{ width: 'auto', height: '7em' }} />
      </a>
    </footer>
  );
}