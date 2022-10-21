import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import Choices from "../molecules/Choices";
import Mentor from "../atoms/Mentor";
import HappyMentor from "../atoms/HappyMentor";
import SadMentor from "../atoms/SadMentor";
import GameStats from "../molecules/GameStats";
import GameAlgorithm from "../atoms/GameAlgorithm";
import successSound from "../../assets/success.mp3";
import failureSound from "../../assets/failure.mp3";
import ScoreContext from "../../context/use-scores";

const CreatePage = ({ operation }) => {
  const gameScore = useContext(ScoreContext)
  /* initial state values for game scores */
  const [scores, setScores] = useState({
    Points: 0,
    Tour: 0,
    Question: 0,
    True: 0,
    False: 0,
  });
  const [isCorrect, setIscorrect] = useState("");

  const success = new Audio(successSound);
  const failure = new Audio(failureSound);

  const pack = GameAlgorithm(operation);
  let choices, question, correctAnswer;
  question = pack[0].question;
  choices = pack[0].choices;
  correctAnswer = pack[0].answer;

  const onClickHandler = (event) => {
    /*
    When click any chois onClickHandler checks if it's
    true or false. then updates score state and general
    game stats for localstorage action.
    */
    const choice = Number(event.target.innerHTML);

    const updatedScore = { ...scores };
    updatedScore.Question += 1;
    if (choice === correctAnswer) {
      if (operation === "sum") {
        updatedScore.Points += 2;
      }
      if (operation === "sub") {
        updatedScore.Points += 3;
      }
      if (operation === "mult") {
        updatedScore.Points += 4;
      }
      if (operation === "div") {
        updatedScore.Points += 5;
      }
      gameScore.True += 1;
      gameScore.Questions.push({question: question, state: true})
      setScores(() => updatedScore);
      setIscorrect(() => "correct");
      success.play();
    } else {
      gameScore.False += 1;
      gameScore.Questions.push({question: question, state: false})
      setScores(() => updatedScore);
      setIscorrect(() => "wrong");
      failure.play();
    }
    gameScore.Points = scores.Points;
  };

  /* sets timeout for new question after an answer */
  useEffect(() => {
    setTimeout(() => {
      setIscorrect(() => "");
    }, 2000);
  }, [isCorrect]);

  return (
    /* conditional styling related to answers */
    <div className={isCorrect === "correct" ? "game-screen game-screen-success" : isCorrect === "wrong" ? "game-screen game-screen-fail" : "game-screen"}>
      <div className="left">
        {/* Mentor behavior changes on answers */}
        {isCorrect === "correct" && <HappyMentor>{question}</HappyMentor>}
        {isCorrect === "wrong" && <SadMentor>{question}</SadMentor>}
        {isCorrect === "" && <Mentor>{question}</Mentor>}
      </div>
      <div className="right">
        <GameStats gameStats={scores} />
        <Choices
          choices={choices}
          answer={correctAnswer}
          onClick={onClickHandler}
        />
      </div>
     {console.log("")}
      {scores.Question > 9 ? <Navigate to="/result" /> : null}
    </div>
  );
};

export default CreatePage;
