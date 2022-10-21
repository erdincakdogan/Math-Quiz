/*
 * Fetches stats from Locale Storage
 *
 */
const getStatsFromLS = () => {
  let stats = localStorage.getItem("stats");
  if (stats) {
    return JSON.parse(localStorage.getItem("stats"));
  } else {
    return {
      points: 0,
      answeredQuestions: 0,
      correctAnswers : 0,
      wrongAnswers : 0
    }
  }
  return null;
};

export default getStatsFromLS;
