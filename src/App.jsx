import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import userData from './components/Profile/userData.json';
import friends from './components/Friends/friends.json';
import FriendList from './components/Friends/FriendList.jsx';
import styles from './components/Friends/FriendList.module.css';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <div className={styles.friendList}>
        <FriendList friends={friends} />
      </div>
    </>
  );
};

export default App;
