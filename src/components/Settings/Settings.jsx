import React from "react";
import set from "./Settings.module.css"

const Settings = () => {
    return(
        <ul className={set.set__list}>
            <li className={set.set__item}>Настройка 1</li>
            <li className={set.set__item}>Настройка 2</li>
            <li className={set.set__item}>Настройка 3</li>
            <li className={set.set__item}>Настройка 4</li>
            <li className={set.set__item}>Настройка 5</li>
        </ul>
    );
}

export default Settings;