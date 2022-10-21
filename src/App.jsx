import { Routes, Route } from "react-router-dom";
import Main from "./components/organisms/Main";
import Result from "./components/organisms/Result";
import Sum from "./components/organisms/Sum";
import Subtract from "./components/organisms/Subtract";
import Multiply from "./components/organisms/Multiply";
import Divide from "./components/organisms/Divide";
import NotFound from "./components/organisms/NotFound";
import StatContext from "./context/use-stats";
import ScoreContext from "./context/use-scores";
import getStatsFromLS from "./components/atoms/GetStatsFromLS";
function App() {
  const stats = getStatsFromLS();
  const scores = {
    Points: 0,
    Tour: 0,
    Question: 0,
    True: 0,
    False: 0,
    Questions: [],
  };
  return (
    <div className="App">
      <StatContext.Provider value={stats}>
        <ScoreContext.Provider value={scores}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="sum" element={<Sum />} />
            <Route path="subtract" element={<Subtract />} />
            <Route path="multiply" element={<Multiply />} />
            <Route path="divide" element={<Divide />} />
            <Route path="result" element={<Result />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScoreContext.Provider>
      </StatContext.Provider>
    </div>
  );
}

export default App;
