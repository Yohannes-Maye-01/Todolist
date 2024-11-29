import React, { useState, MouseEvent } from "react";
import "./EllipsisMenu.css";

interface MenuPosition {
  x: number;
  y: number;
}

function EllipsisMenu() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({ x: 0, y: 0 });

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setMenuVisible(true);
  };

  const handleOptionClick = (option: string) => {
    alert(`You clicked: ${option}`);
    setMenuVisible(false);
  };

  const handleClickOutside = () => {
    if (menuVisible) setMenuVisible(false);
  };

  return (
    <div
      className="context-area"
      onContextMenu={handleContextMenu}
      onClick={handleClickOutside}
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: "#e8f5ff",
      }}
    >
      {menuVisible && (
        <ul
          className="context-menu"
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
          }}
        >
          <li onClick={() => handleOptionClick("Share")}>Share</li>
          <li className="highlight" onClick={() => handleOptionClick("Copy")}>
            Copy
          </li>
          <li onClick={() => handleOptionClick("Embed")}>Embed</li>
          <li onClick={() => handleOptionClick("Block")}>Block</li>
          <li onClick={() => handleOptionClick("Report")}>Report</li>
        </ul>
      )}
    </div>
  );
}

export default EllipsisMenu;

