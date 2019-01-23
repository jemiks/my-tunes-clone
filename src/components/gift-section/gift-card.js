import React from 'react';
import '../style/style.css';
import card from '../imgs/cards.png'
import { Icon } from '../icons';
const GiftCardSection = () => {
 return (  <section id="gift-card" className="section bg-light">
        <div className="container">
            <div className="gift-cards">
                <div>
                    <img src={card} alt="" />
                </div>
                <div>
                    <h3>Gift Cards</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste exercitationem quis commodi architecto porro asperiores labore aspernatur placeat fugit ex laborum praesentium corrupti, itaque ea debitis pariatur quod incidunt minima.</p>
                    <p>Already have an Orange MyTunes Music Gift Card?</p>
                    <hr />
                    <span><Icon icon = "chevron-right" /> Reedem</span>

                </div>
            </div>
        </div>
    </section>)
}


export default GiftCardSection;