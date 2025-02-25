import React from "react";


const MenuCard = ({ menuData }) => {
  return (
    <div className="main-container">
      {menuData.map((currEle) => {

        const{id,name,category,image,desc}=currEle;
        return (
          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-desc subtle">{desc}</span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} className="card-media" alt={name} />
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
