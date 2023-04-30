import PropTypes from 'prop-types';
import {
  ProfileCont,
  ProfilePic,
  ProfileTitle,
  ProfileStats,
  ProfileStatsItem,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCont>
      <div className="description">
        <ProfilePic src={avatar} alt="User avatar"></ProfilePic>
        <ProfileTitle>{username}</ProfileTitle>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ProfileStats>
        <ProfileStatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ProfileStatsItem>
        <ProfileStatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ProfileStatsItem>
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
};
