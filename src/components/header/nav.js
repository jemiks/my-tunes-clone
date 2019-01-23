import React from "react";
import NavListItems from "./nav-items"

const NavList = ({values}) => {
    const elements = values.map((item) => {
        const {id} = item
        return (
            <li key = {id}>< NavListItems {... item} /></li>
        )
    })
    return (
        <nav>
            <ul>
                {elements}
            </ul>
        </nav>
    )
}


export default NavList