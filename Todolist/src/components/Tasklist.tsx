import "./tasklist.css";
import image from "../assets/pin.png";

import EllipsisMenu from "./EllipsisMenu";

export default function Tasklist({
  isEllipsOpen,
  setEllispsOpen,
  item,
  isPined,
  pin,
  Unpin,
  deleteTask,

}) {
  return (
    <>
      <div className="tasklist">
        {/* Pin image section */}
        <div className="pinimage">
          {isPined ? <img src={image} alt="pin" className="pinimage" /> : " "}
        </div>

        {/* Stylish checkbox */}
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          {item.title}
        </label>

        {/* Ellipsis menu button */}
        <div
          className="ellipsis"
          onClick={
            (event) => {
              event.stopPropagation();
              setEllispsOpen(!isEllipsOpen ? item.id : null);
            }

            // Toggle ellipsis menu
          }
        >
          <i className="fas fa-ellipsis-h"></i>
        </div>

        {/* Ellipsis menu */}
        {isEllipsOpen && (
          <div
            className="menuelipsi"
            onClick={(event) => {
              event.stopPropagation(); // Prevent menu from closing when clicked
            }}
          >
            <EllipsisMenu
              setEllispsOpen={setEllispsOpen}
              item={item}
              isPined={isPined}
              onpin={isPined ? Unpin : pin}
              deleteTask={deleteTask}
            
            />
          </div>
        )}
      </div>
    </>
  );
}
