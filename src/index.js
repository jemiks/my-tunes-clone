import React from 'react';
import ReactDOM from "react-dom";
import NavList from './components/header/nav';
import './components/style/style.css'

const App = () => {
    const valueDate = [
        {value: "myTunes", id : 1},
        {value: "OverView", id : 2},
        {value: "OverView", id : 3},
        {value: "Showcase", id : 4},
        {value: "Gift Cards", id : 5},
    ]


    return (
        <header id = "showcase">
            < NavList values = {valueDate} />
        </header>       
    )
}



ReactDOM.render(<  App /> , document.getElementById("root"))