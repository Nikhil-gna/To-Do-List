import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handlefun} type="text" value={props.input} />
      <button onClick={props.items}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
