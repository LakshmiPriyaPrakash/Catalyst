import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import UserFeed from '../UserFeed';
import './UserDashboard.css'

function Userdashboard() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <div className="ud-feed-container">
                <div className="ud-left-div">

                </div>
                <div className="ud-center-div">
                    <UserFeed />
                </div>
                <div className="ud-right-div">

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
