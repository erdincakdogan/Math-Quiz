import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../molecules/Header";
import Start from "../atoms/Start";
import { useEffect } from "react";
import ScoreContext from "../../context/use-scores";
import Checked from "../atoms/Checked";
import UnChecked from "../atoms/UnChecked";
const Result = () => {

  /* if localstorage has a key named "stats" this codeblock
  adds to known values to new game stat values.
  if there is no localstorage item it sets fresh new one*/
  const gameScores = useContext(ScoreContext);
  const setLocalStorageItems = () => {
    let stats = localStorage.getItem("stats");
    if(stats) {
      stats = JSON.parse(localStorage.getItem("stats"))
      const pts = stats.points += gameScores.Points
      const ans = stats.answeredQuestions += 10;
      const cor = stats.correctAnswers += gameScores.True;
      const wro = stats.wrongAnswers += gameScores.False;
      console.log(stats)
      localStorage.setItem(
        "stats",
        JSON.stringify({
          points: pts,
          answeredQuestions: ans,
          correctAnswers: cor,
          wrongAnswers: wro,
        })
      );
    }else {
      localStorage.setItem(
        "stats",
        JSON.stringify({
          points: gameScores.Points,
          answeredQuestions: 10,
          correctAnswers: gameScores.True,
          wrongAnswers: gameScores.False,
        })
      );
    }
    
  };

  useEffect(() => {
    setLocalStorageItems();
  }, []);

  return (
    <div className="result-page">
      <div className="result-section">
        <div class="result">
          <Header type="main-header">Sonuç</Header>
          <ul className="result-list">
            <li>Puan: {gameScores.Points}</li>
            <li>Doğru Cevap: {gameScores.True}</li>
            <li>Yanlış Cevap: {gameScores.False}</li>
          </ul>
          <Link to="/">
            <Start>Başla</Start>
          </Link>
        </div>
        <div class="questions">
          <Header type="main-header">Sorular</Header>
          <ul className="question-list">
            {console.log(gameScores.Questions.state)}
            <li>
              {gameScores.Questions[0].question.slice(0, -1)}{" "}
              {gameScores.Questions[0].state ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[1].question.slice(0, -1)}{" "}
              {gameScores.Questions[1].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[2].question.slice(0, -1)}{" "}
              {gameScores.Questions[2].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[3].question.slice(0, -1)}{" "}
              {gameScores.Questions[3].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[4].question.slice(0, -1)}{" "}
              {gameScores.Questions[4].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[5].question.slice(0, -1)}{" "}
              {gameScores.Questions[5].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[6].question.slice(0, -1)}{" "}
              {gameScores.Questions[6].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[7].question.slice(0, -1)}{" "}
              {gameScores.Questions[7].state ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[8].question.slice(0, -1)}{" "}
              {gameScores.Questions[8].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
            <li>
              {gameScores.Questions[9].question.slice(0, -1)}{" "}
              {gameScores.Questions[9].state  ? (
                <Checked width="18" height="18" />
              ) : (
                <UnChecked width="18" height="18" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;
