import { useContext } from "react";
import ScoreContext from "../../context/use-scores";
import CreatePage from "./CreatePage";

const Subtract = () => {

  const gameScore = useContext(ScoreContext);
  gameScore.Points = 0;
  gameScore.Tour = 0;
  gameScore.Question = 0;
  gameScore.True = 0;
  gameScore.False = 0;

  return (
    <CreatePage operation={"sub"}/>
  );
};

export default Subtract;