import PropTypes from 'prop-types';
import { FriendSec } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSec >
      {friends.map(event => (
        <li key={event.id} class="item">
          <span className="status">{event.isOnline}</span>
          <img className="avatar" src={event.avatar} alt="User avatar" width="48" />
          <p className="name">{event.name}</p>
        </li>
      ))}
    </FriendSec >
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};