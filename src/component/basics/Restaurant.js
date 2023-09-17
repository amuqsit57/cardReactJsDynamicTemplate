import React from 'react'
import "./style.css";
import Menu from "./menuApi"
import MenuCard from './menuCard';
import Nav from './nav';


const navContentsFromMenuCardCategoryAPI =[ ...new Set(Menu.map((currElem)=>{
  return currElem.category;
}))
,
"All"
]

const Restaurant = () => {


    const [menuData, setMenuData] = React.useState(Menu);
    const [navData, setNavData] = React.useState(navContentsFromMenuCardCategoryAPI);

    // console.log(menuData);

   
    console.log(navContentsFromMenuCardCategoryAPI);

    const filterItem = (category)=>{
      
      if(category === "All"){
         setMenuData(Menu);
      }
      else{
      const updateList = Menu.filter((currElem)=>{
        return currElem.category === category;
      });
      
      setMenuData(updateList);
      }
    }

    return (
    <>
    <Nav filterItem = {filterItem} navData = {navData}/>     
    <MenuCard MenuData = {menuData}/>
    
    </>
  )
}

export default Restaurant
