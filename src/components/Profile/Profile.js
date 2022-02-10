
import PropTypes from "prop-types";

import {
  UserProfile,
  Description,
  Avatar,
  UserName,
  Info,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled.jsx';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
      <UserProfile>
        <Description>
    <Avatar
            src={avatar}
            alt="User avatar"           
    />
    <UserName>{username}</UserName>
    <Info>@{tag}</Info>
    <Info>{location}</Info>
  </Description>

        <StatsList>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </StatsList>
</UserProfile>
    )
}
 
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape(PropTypes.number),
};