import React from "react";
import "./head.css"
import UserBarItem from "./UserBar/UserBarItem";
import LogoBox from "./Sign/logobox";

function Top(){
    return(
        <div className="top">
            <div className="userbar">
                <div className="pad">
                    <UserBarItem name = "Главная"/>
                    <UserBarItem name = "Доставка"/>
                    <UserBarItem name = "Оплата"/>
                    <UserBarItem name = "Контакты"/>
                    <UserBarItem name = "Наши партнёры"/>
                    <UserBarItem name = "Статьи"/>
                    <UserBarItem name = "Вход в кабинет"/>
                </div>
            </div>
            <div className="sign">
                <LogoBox />
            </div>
        </div>
        
    )
}

export default Top;