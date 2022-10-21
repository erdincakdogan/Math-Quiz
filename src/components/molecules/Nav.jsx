import { useState, useEffect } from "react";
import PageList from "../atoms/PageList";
import Checked from "../atoms/Checked";
import sound from "../../assets/click.mp3";

const Nav = ({ pageLink }) => {
  const audio = new Audio(sound);
  const [path, setPath] = useState("/");
  const [pages, setPages] = useState(PageList);

  const clickHandler = (props) => {
    let index = props.target.id;

    let tempArr = [...pages];
    tempArr.map((item) => (item.checked = false));
    tempArr[index].checked = true;

    setPages(() => tempArr);
    setPath(() => tempArr[index].path);

    audio.play();
  };

  useEffect(() => {
    pageLink(path);
  }, [path, pages, pageLink]);

  return (
    <ul className="nav">
      {pages.map((item, index) => {
        return (
          <li id={item.id} key={index} onClick={clickHandler}>
            {item.text + "\u00A0"}
            <div>{item.checked && <Checked width="18" height="18" /> }</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
