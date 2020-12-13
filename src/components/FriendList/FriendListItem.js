import PropTypes from 'prop-types';


const FriendListItem = ({isOnline, avatar, name }) => {
    
    return (
     <div className="FriendItem">
      <span className="Status" style={{ backgroundColor: isOnline ? "green" : "red" }} >{isOnline}</span>
       <img className="AvatarFriend" src={avatar} alt={name} width="48" />
       <p className="Name">{name}</p>
   </div>
    );
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

};
export default FriendListItem;
