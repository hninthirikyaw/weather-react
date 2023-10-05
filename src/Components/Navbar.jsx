import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <div>
      <ul className=" d-flex gap-3 ps-0">
        <a href="#" className="list-items text-decoration-none">
          <li>Lisbon</li>
        </a>
        <a href="#" className="list-items text-decoration-none">
          <li>Paris</li>
        </a>
        <a href="#" className="list-items text-decoration-none">
          <li>Sydney</li>
        </a>
        <a href="#" className="text-decoration-none list-items">
          <li>San Franscisco</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
