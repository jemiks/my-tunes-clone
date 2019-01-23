import React from "react";
import "../style/style.css"

const NavList = () => {

    return (
        <header id = "showcase">

        <nav>
            <ul>
                <li><a href = "showcase">myTunes</a></li>
                <li><a href = "showcase">OverView</a></li>
                <li><a href = "music">Music</a></li>  
                <li><a href = "video">Video</a></li>
                <li><a href = "gift-card">Gift Cards</a></li>
            </ul>
        </nav>
        <div className="section-main container">
            <h1>myTunes.</h1>
            <h2>Your music, movies, and TV shows take center stage.</h2>
            <p className="lead hide-on-small"> myTunes is the best way to organize and enjoy the music, movies, and TV shows you        already have — and shop for the ones you want. Enjoy all the entertainment myTunes has to offer on your Mac and PC.</p>
    </div>
    </header>
    )
}


export default NavList