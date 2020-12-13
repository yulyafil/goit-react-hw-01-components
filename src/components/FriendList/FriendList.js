import FriendListItem from './FriendListItem';
import './FriendList.css'
import PropTypes from 'prop-types';


function FriendList({ friends }) {
    
    return (
        <ul className="FriendList">
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem id={friend.id}
                        isOnline={friend.isOnline}
                        avatar={friend.avatar}
                        name={friend.name}
                    />
                </li>
                
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendList;