import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import userData from './components/Profile/userData.json';

import friends from './components/Friends/friends.json';
import FriendList from './components/Friends/FriendList.jsx';
import styles from './components/Friends/FriendList.module.css';

import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './components/TransactionHistory/transactions.json';

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

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
