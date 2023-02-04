import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "70px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
      };

    return(
        <div className="navbar">
            <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                background:'red'
            }}
            >
                Home
            </NavLink>
            <NavLink
            to="/book"
            exact
            style={linkStyles}
            activeStyle={{
                background:'red'
            }}
            >
                Book
            </NavLink>
        </div>
    )
}

export default NavBar;