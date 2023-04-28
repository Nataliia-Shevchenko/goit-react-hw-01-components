import PropTypes from 'prop-types';
import {
  ProfileCont,
  ProfilePic,
  ProfileTitle,
  ProfileStats,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  // followers,
  // views,
  // likes,
}) => {
  return (
    <ProfileCont>
      <div className="description">
        <ProfilePic
          src={avatar}
          alt="User avatar"
          className="avatar"
        ></ProfilePic>
        <ProfileTitle className="name">{username}</ProfileTitle>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ProfileStats>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ProfileStats>
    </ProfileCont>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
  // followers: PropTypes.number.isRequired,
  // views: PropTypes.number.isRequired,
  // likes: PropTypes.number.isRequired,
};
