import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={"world2.svg"} alt={"logo"}/>
        </header>
    )
}