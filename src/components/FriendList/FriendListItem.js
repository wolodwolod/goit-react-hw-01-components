import PropTypes from 'prop-types';
import { FriendItem, FrendStatus, FrendAvatar, FrendName } from './FriendListItem.styled.jsx';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
   <FriendItem key={id}>
          <FrendStatus status={isOnline} ></FrendStatus>
      <FrendAvatar src={avatar} alt="User avatar" width="48" />
          <FrendName>{name}</FrendName>
</FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};