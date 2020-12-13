import './Profile.css';
import PropTypes from 'prop-types';
import urlImage from './colin.jpg';

const Profile = ({
 url, alt, name, tag, location, followers, views, likes, 
}) => {

 return (
    <div className="Profile">
      <div className="Description">
        <img
          src={urlImage}
          alt={alt}
          className="Avatar"
        />
        <p className="Name">{name}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="Stats">
        <li className="Stats-item">
          <span className="Label">Followers: </span>
          <span className="Quantity">{followers}</span>
        </li>
        <li className="Stats-item">
          <span className="Label">Views: </span>
          <span className="Quantity">{views}</span>
        </li>
        <li className="Stats-item">
          <span className="Label">Likes: </span>
          <span className="Quantity">{likes}</span>
        </li>
      </ul>
   </div>
 );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;