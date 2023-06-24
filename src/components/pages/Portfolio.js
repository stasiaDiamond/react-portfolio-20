import React from 'react';
import jpQuiz from "../../assets/images/jp-quiz.png"
import scraggily from "../../assets/images/scraggily-pets.png";
import onlyHands from "../../assets/images/only-hands.png";
import expressNotes from "../../assets/images/express-note-taker.png";
import graphBooks from "../../assets/images/graphql-books.png";
import weather from "../../assets/images/weather-api.png";
import "../../styling/PortfolioPage.css";

export default function Projects() {
  return (
    <main>
      <div className="main-box">
        <div className="showcase">
          <a href="https://stasiadiamond.github.io/jurassic-park-timed-quiz-04/" target="_blank" rel="noopener noreferrer">
            <img className="showcase-img" src={jpQuiz} alt="jp-quiz screenshot" />
            <div className="surprise">
              <p className="links">
                <a href="https://stasiadiamond.github.io/jurassic-park-timed-quiz-04/" target="_blank" rel="noopener noreferrer">JP Quiz</a>
                <span> | </span>
                <a href="https://github.com/stasiaDiamond/jurassic-park-timed-quiz-04" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </p>
            </div>
          </a>
        </div>
        <div className="showcase">
          <a href="https://stasiadiamond.github.io/scraggily-pets/" target="_blank" rel="noopener noreferrer">
            <img className="showcase-img" src={scraggily} alt="scraggily-pets screenshot" />
            <div className="surprise">
              <p className="links">
                <a href="https://stasiadiamond.github.io/scraggily-pets/" target="_blank" rel="noopener noreferrer">Scraggily Pets</a>
                <span> | </span>
                <a href="https://github.com/stasiaDiamond/scraggily-pets" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </p>
            </div>
          </a>
        </div>
        <div className="showcase">
          <a href="https://only-hands.netlify.app" target="_blank" rel="noopener noreferrer">
            <img className="showcase-img" src={onlyHands} alt="only-hands screenshot" />
            <div className="surprise">
              <p className="links">
                <a href="https://only-hands.netlify.app" target="_blank" rel="noopener noreferrer">Only Hands</a>
                <span> | </span>
                <a href="https://github.com/stasiaDiamond/oh-front" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </p>
            </div>
          </a>
        </div>
        <div className="showcase">
          <a href="https://infinite-reef-61323.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="showcase-img" src={expressNotes} alt="expressNotes screenshot" />
            <div className="surprise">
              <p className="links">
                <a href="https://infinite-reef-61323.herokuapp.com" target="_blank" rel="noopener noreferrer">Note Taker</a>
                <span> | </span>
                <a href="https://github.com/stasiaDiamond/express-note-taker-11" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </p>
            </div>
          </a>
        </div>
        <div className="showcase">
          <a href="https://boiling-ocean-90033-b0a098801dc7.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img className="showcase-img" src={graphBooks} alt="graph-books screenshot" />
            <div className="surprise">
              <p className="links">
                <a href="https://boiling-ocean-90033-b0a098801dc7.herokuapp.com" target="_blank" rel="noopener noreferrer">GraphQL Books</a>
                <span> | </span>
                <a href="https://github.com/stasiaDiamond/MERN-book-search-21" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </p>
            </div>
          </a>
        </div>
        <div className="showcase">
          <a href="https://stasiadiamond.github.io/weather-forecast-06/" target="_blank" rel="noopener noreferrer">
            <img className="showcase-img" src={weather} alt="weather-api" />
            <div className="surprise">
              <p className="links">
                <a href="https://stasiadiamond.github.io/weather-forecast-06/" target="_blank" rel="noopener noreferrer">Weather Forecast</a>
                <span> | </span>
                <a href="https://github.com/stasiaDiamond/weather-forecast-06" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
