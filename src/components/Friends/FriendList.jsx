import FriendListItem from './FriendListItem.jsx';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return friends.map(friend => {
    return (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    );
  });
};

export default FriendList;
