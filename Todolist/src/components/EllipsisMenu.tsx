import React from "react";
import "./EllipsisMenu.css";

export default function EllipsisMenu() {
  const content = [
    {
      text: "Pine on the top",
      id: 1,
      clikhandler: () => {
        console.log("clicked");
      },
      Icon: "fa fa-thumb-tack",
    },
    {
      text: "Delete",
      id: 2,
      clikhandler: () => {
        console.log("clicked");
      },
      Icon: "fa fa-trash",
    },
    {
      text: "Add to memo",
      id: 3,
      clikhandler: () => {
        console.log("clicked");
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
