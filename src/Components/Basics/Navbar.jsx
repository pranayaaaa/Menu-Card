import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currEle, index) => (
            <button
              key={index}
              className="btn-group_item"
              onClick={() => filterItem(currEle)}
            >
              {currEle}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
