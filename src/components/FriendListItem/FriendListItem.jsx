import PropTypes from 'prop-types';
import { FriendItem, StatusElement } from './FriendListItem.styled';

export const FriendListItem = ({ items }) => {
  return items.map(item => (
    <FriendItem key={item.id}>
      <StatusElement status={item.isOnline}></StatusElement>
      <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
      <p className="name">{item.name}</p>
    </FriendItem>
  ));
};

FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
