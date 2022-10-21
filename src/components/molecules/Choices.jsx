import Choice from "../atoms/Choice";


const Choices = (props) => {
 
  return (
    <div className="choices">
      <Choice className="choices-1" onClick={props.onClick}>
        {props.choices && props.choices[0]}{" "}
      </Choice>
      <Choice className="choices-2" onClick={props.onClick}>
        {props.choices && props.choices[1]}{" "}
      </Choice>
      <Choice className="choices-3" onClick={props.onClick}>
        {props.choices && props.choices[2]}{" "}
      </Choice>
    </div>
  );
};

export default Choices;
