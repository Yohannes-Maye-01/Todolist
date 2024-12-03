import React from "react";
import "./EllipsisMenu.css";

export default function EllipsisMenu({
  setEllispsOpen,
  item,
  isPined,
  onpin,
  deleteTask,
}) {
  const content = [
    {
      text: isPined ? "unpin" : "Pin on the top",
      id: 1,
      clikhandler: () => {
        setEllispsOpen(null);
        onpin(item);
      },
      Icon: "fa fa-thumb-tack",
    },
    {
      text: "Delete",
      id: 2,
      clikhandler: () => {
        setEllispsOpen(null);
        deleteTask(item);
      },
      Icon: "fa fa-trash",
    },

    {
      text: "Add to memo",
      id: 3,
      clikhandler: () => {
        setEllispsOpen(null);
      },
      Icon: "fa fa-file",
    },
  ];
  return (
    <div>
      <div className="menuEllipsis">
        {content.map((item) => (
          <>
            <div
              className="menuEllipsiscontent"
              key={item.id}
              onClick={item.clikhandler}
            >
              <div>
                <i className={item.Icon} aria-hidden="true"></i>
              </div>

              <div>{item.text}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
