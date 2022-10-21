import Start from "../atoms/Start";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{ padding: "1rem", color: "white", textAlign: "center" }}>
      <p
        style={{
          fontSize: "2rem",
          color: "white",
          margin: "2rem auto",
        }}
      >
        Burada bir şey yok!
      </p>
      <div style={{ width: "30%", color: "white", margin: "2rem auto" }}>
      <Link to="/">
        <Start>Başa Dön</Start>
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
