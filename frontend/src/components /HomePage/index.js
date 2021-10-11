import { useSelector } from 'react-redux';
import './HomePage.css'

function Homepage() {
    const sessionUser = useSelector(state => state.session.user);

    if(!sessionUser) {
        return (
            <>
                <div id="hp-misc-div">
                    <p>Some content goes here</p>
                    <img src="https://res.cloudinary.com/lpriya/image/upload/v1633931860/Catalyst/earth_word_bubble_nmx9k1.png"></img>
                </div>
                <div id="hp-feed-container">
                <div id="left-div">
                    left div
                </div>
                <div id="center-div">
                    center div containing stories feed
                </div>
                <div id="right-div">
                    right div
                </div>
                </div>
            </>

          );
    } else {
        return null;
    }

}

export default Homepage;
