import user from 'user.json';


export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     textTransform: 'uppercase',
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>

    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
  );
};
