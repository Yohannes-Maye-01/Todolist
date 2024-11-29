import "./pined.css";
import "./Tasklist";
import Tasklist from "./Tasklist";
import pin from "../assets/pin.png";

export default function Pined() {
  return (
    <div className="pined">
      <div className="pindcontent">
        <div>
          <img className="pinimg" src={pin} alt="" />
        </div>

        <Tasklist />
      </div>
<div className="pindcontent">
       <div>
        <img className="pinimg" src={pin} alt="" />
      </div>

      <Tasklist />
    </div>
</div>
      
  );
}
