import React from "react";
import s from "./ProfileInfo.module.css"


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.header_img} src={"header.jpeg"} alt={"birds"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar_img} src={"avatar2.jpg"} alt={"avatar"}/>
                description
            </div>
        </div>
    )
}