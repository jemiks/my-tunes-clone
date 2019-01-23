import React from "react";
import  { Icon } from "../icons"
import '../style/style.css'
import  mockup1 from "../imgs/mockup1.png"
const SectionMusic = () => {
    return(
        <section id="music" className="section">
            <div className="container">
                <h2 className="section-head">
                    <span><Icon icon = "music" /> Music</span>
                </h2>
                <h3>45 million songs. Zero ads.</h3>
                <p className="lead hide-on-small">Stream over 45 million songs, ad-free. Or download albums and tracks to listen to     offline. All the music in your personal myTunes library — no matter where it came from — lives right alongside the  Orange Music catalog. Start your free three-month
                    trial with no commitment, and cancel anytime.</p>
                <a href="#" className="btn btn-primary mb">Start Your Trial Now</a>
                <p className="text-light">Orange Music is available in myTunes, and for iOS and Android devices.</p>
                <img src = {mockup1} />
        </div>
    </section>
    )
}


export default SectionMusic;