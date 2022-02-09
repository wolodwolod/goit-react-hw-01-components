import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
      <ul class="friend-list">
  {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</ul>






    // <Container>
    //   {friends.map(({ id, avatar, name, isOnline }) => (
    //     <FriendListItem
    //       key={id}
    //       avatar={avatar}
    //       name={name}
    //       isOnline={isOnline}
    //     />
    //   ))}
    // </Container>
  );
};