import React from "react";

const InputShortener = () => {
  return ( 
    <div className="inputContainer">
      <h1>URL <span>Shotener</span></h1>
      <input type="text" placeholder="Ingrese url" />
      <button>Shorten</button>
    </div>
  );
}

export default InputShortener;
