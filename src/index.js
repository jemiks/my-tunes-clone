import React from 'react';
import ReactDOM from "react-dom";
import NavList from './components/header/header';
import SectionMusic from './components/music-section/main-music'
import SectionVideo from './components/video-section/main-video';
import EntertainmentSection from './components/entertainment-section/entr-main';
import GiftCardSection from './components/gift-section/gift-card'
import FooterSection from './components/footer/footer';


const App = () => {
   
    return (
    <div>
            < NavList />           
            < SectionMusic />
            < SectionVideo />
            < EntertainmentSection />
            < GiftCardSection />
            < FooterSection />
    </div>
    )
}



ReactDOM.render(<  App /> , document.getElementById("root"))