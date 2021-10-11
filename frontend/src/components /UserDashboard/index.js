import { useSelector } from 'react-redux';
import './UserDashboard.css'

function Userdashboard() {
    const sessionUser = useSelector(state => state.session.user);

    if(sessionUser) {
        return (
            <div id="ud-feed-container">
                <div id="ud-left-div">
                    left div
                </div>
                <div id="ud-center-div">
                    center div containing stories feed
                </div>
                <div id="ud-right-div">
                    right div
                </div>
            </div>
          );
    } else {
        return null;
    }

}

export default Userdashboard;
