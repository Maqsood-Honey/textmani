import React, { useState } from 'react'
import Menu from "./menuApi"
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import './style.css'
const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "All"]
const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((elem) => {
            return elem.category === category;
        })

        setMenuData(updateList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Resturant;
