import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../molecules/Header";
import Stats from "../molecules/Stats";
import Nav from "../molecules/Nav";
import Start from "../atoms/Start";
import StatContext from "../../context/use-stats";
import getStatsFromLS from "../atoms/GetStatsFromLS";

const Main = () => {
  const [page, setPage] = useState("/");
  const ctx = useContext(StatContext)
  const pageLinkCreator = (selectedPage) => {
    setPage(() => selectedPage);
  };

  return (
    <StatContext.Consumer>
      {(ctx) => {
        return (
          <div className="main">
            <Header type="main-header">Matematik Oyunu</Header>
            <div className="main-section">
              <Stats stats={ctx} />
              <Nav pageLink={pageLinkCreator} />
            </div>
            <Link to={page}>
              <Start>Başla</Start>
            </Link>
          </div>
        );
      }}
    </StatContext.Consumer>
  );
};

export default Main;
