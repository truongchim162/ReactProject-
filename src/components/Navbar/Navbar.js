import React, { useState } from "react";
import { Button } from "../Button/Button";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
    const [state, setState] = useState({ clicked: false });
    const handleClick = () => {
        setState({ clicked: !state.clicked });
        console.log(state);
    };
    return (
        <div
            className={state.clicked ? "NavbarItems responsive" : "NavbarItems"}
        >
            <h3 className="navbar-logo">FOODSHOP</h3>

            <div className="menu-icon" onClick={handleClick}>
                <i
                    className={state.clicked ? "fas fa-times" : "fas fa-bars"}
                ></i>
            </div>
            <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <Button>Sign Up</Button>
            <div className="menu-cart">
                <a href="/fs-reactjs#/cart">
                    <i className="fas fa-shopping-bag"></i>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
