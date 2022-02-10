import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FrendListUl } from './FriendList.styled.jsx';
export const FriendList = ({ friends }) => {
    return (
      <FrendListUl>
  {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</FrendListUl>
      );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};