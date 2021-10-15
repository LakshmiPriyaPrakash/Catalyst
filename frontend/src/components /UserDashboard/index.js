import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import UserFeed from '../UserFeed';
import './UserDashboard.css'

function Userdashboard() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <div id="ud-feed-container">
                <div id="ud-left-div">

                </div>
                <div id="ud-center-div">
                    <UserFeed />
                </div>
                <div id="ud-right-div">
                    
                </div>
            </div>
          );
    } else {
        return (
            <Redirect to='/' />
        );
    }
}

export default Userdashboard;
