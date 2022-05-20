import React from "react";

import "./Square.css";

import KIT from "../materials/kit.png";
import SVINA from "../materials/porosenok.png";
const svina = <img className="pig_img" src={SVINA} alt="pig"></img>;
const kit = <img className="kit_img" src={KIT} alt="kitten"></img>;

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value === "КiТ" && kit}
      {props.value === "свина" && svina}
    </button>
  );
};

export default Square;
