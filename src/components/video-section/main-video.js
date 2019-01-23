import React from "react";
import mockup2 from "../imgs/mockup2.png"
import '../style/style.css'
const SectionVideo = () => {
    return (
        <section id="video" className="section bg-light">
            <div className="container">
                <h3>The movie and TV collection you always  wished for. Granted.</h3>
                <p className="lead">With over 100,000 movies    and TV shows to choose from, there’s always    something great to watch on myTunes and if     you watch on Orange TV 4K, you’ll be able to    enjoy a tremendous selection of your   favorite content in 4K HDR. So get ready to   enjoy
                    episodes of your favorite TV shows or   hit movies you’ve been waiting to see —   anytime, anywhere. Just tap to play, or   even download if you’re going somewhere   you won’t have Wi-Fi.</p>
                <a href="#" className="btn  btn-secondary">Show more</a>
                <img src={mockup2} alt="" />
            </div>
    </section>
    )
}


export default SectionVideo ;