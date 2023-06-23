import React from 'react';
import jpQuiz from "../assets/images/jp-quiz.png";
import scraggily from "../assets/images/scraggily-pets.png";
import onlyHands from "../assets/images/only-hands.png";
import expressNotes from "../assets/images/express-note-taker.png";
import graphBooks from "../assets/images/graphql-books.png";
import weather from "../assets/images/weather-api.png";

export default function Projects() {
  const styles = {
    img: {
      width: "300px",
      height: "300px",
    },
    box: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <div>
      <div style={styles.box}>
        <a href="https://stasiadiamond.github.io/jurassic-park-timed-quiz-04/" target="_blank" rel="noopener noreferrer">
          <div id="work-div">
            <img style={styles.img} src={jpQuiz} alt="jp-quiz screenshot" />
            <p className="corner text-left">Jurassic Park Quiz</p>
          </div>
        </a>
        <a href="https://stasiadiamond.github.io/scraggily-pets/" target="_blank" rel="noopener noreferrer">
          <div className="box-1">
            <img style={styles.img} src={scraggily} alt="scraggily-pets screenshot" />
            <p className="corner text-left">Scraggily Pets</p>
          </div>
        </a>
        <a href="https://only-hands.netlify.app" target="_blank" rel="noopener noreferrer">
          <div className="box-1">
            <img style={styles.img} src={onlyHands} alt="only-hands screenshot" />
            <p className="corner text-left">Only Hands</p>
          </div>
        </a>
        <a href="https://infinite-reef-61323.herokuapp.com" target="_blank" rel="noopener noreferrer">
          <div className="box-1">
            <img style={styles.img} src={expressNotes} alt="expressNotes screenshot" />
            <p className="corner text-left">Express Note Taker</p>
          </div>
        </a>
        <a href="https://boiling-ocean-90033-b0a098801dc7.herokuapp.com" target="_blank" rel="noopener noreferrer">
          <div className="box-1">
            <img style={styles.img} src={graphBooks} alt="graph-books screenshot" />
            <p className="corner text-left">GraphQL Book Search</p>
          </div>
        </a>
        <a href="https://stasiadiamond.github.io/weather-forecast-06/" target="_blank" rel="noopener noreferrer">
          <div className="box-1">
            <img style={styles.img} src={weather} alt="weather-api" />
            <p className="corner text-left">Weather API</p>
          </div>
        </a>
      </div>
    </div>
  );
}
