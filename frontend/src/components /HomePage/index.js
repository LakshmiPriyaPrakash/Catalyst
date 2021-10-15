import HomeFeed from '../HomeFeed';
import './HomePage.css'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

function Homepage() {
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) {
        return (
            <Redirect to='/user/dashboard' />
        )
    } else {
        return (
            <>
                <div id="hp-misc-div">
                    <div id="quotes-container">
                        <p id="quote1">Catalyst is a place to write, read, and revolutionize the way we live.</p>
                        <p> It's easy and free to post your thinking on sustainability, minimalism, and everything we can do to change the world for the better. </p>
                    </div>
                    <img src="https://res.cloudinary.com/lpriya/image/upload/v1633931860/Catalyst/earth_word_bubble_nmx9k1.png" alt="Earth word bubble"></img>
                </div>
                <div id="hp-feed-container">
                <div id="hp-left-div">

                </div>
                <div id="hp-center-div">
                    <HomeFeed />
                </div>
                <div id="hp-right-div">

                </div>
                </div>
            </>

          );
        }
}

export default Homepage;
