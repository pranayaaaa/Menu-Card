import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard.jsx';
import Navbar from './Navbar.jsx';
import { use } from 'react';

const uniqueList=[...new Set(Menu.map((currEle)=>{
  return currEle.category
})),
"All",];

const Restraurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList]=useState(uniqueList)

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu); // Reset to full menu
    } else {
      const updatedList = Menu.filter((currEle) => currEle.category === category);
      setMenuData(updatedList);
    }
  };

  return (
    <>
      
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restraurant;
