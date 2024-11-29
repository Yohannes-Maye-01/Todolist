import "./tasklist.css";
import pin from "../assets/pin.png";
import React from "react";
import EllipsisMenu from "./EllipsisMenu";

export default function Tasklist() {
  const [isPined, setPined] = React.useState(false);
  return (
    <div className="tasklist">
      <div className="pinimage">
        {isPined ? <img src={pin} alt="pin" className="pinimage" /> : " "}
      </div>

      <label className="custom-checkbox ">
        <input type="checkbox" />
        <span className="checkmark"></span>
        Stylish Checkbox
      </label>

      <div className="ellipsis">
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className=" menuelipsi">
        <EllipsisMenu />
      </div>
    </div>
  );
}
