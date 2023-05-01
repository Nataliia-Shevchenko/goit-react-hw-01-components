import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendSec } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSec>
      <FriendListItem items={friends} />
    </FriendSec>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
