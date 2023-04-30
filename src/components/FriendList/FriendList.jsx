import PropTypes from 'prop-types';
import { FriendSec, FriendItem, StatusElement } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSec>
      {friends.map(event => (
        <FriendItem key={event.id}>
          <StatusElement status={event.isOnline}></StatusElement>
          <img
            className="avatar"
            src={event.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{event.name}</p>
        </FriendItem>
      ))}
    </FriendSec>
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
