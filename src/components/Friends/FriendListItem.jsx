import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline = 'Online' }) => {
  return (
    <div className={styles.friendListItem}>
      <img className={styles.imgItem} src={avatar} alt="Avatar" width="48" />
      <p className={styles.nameItem}>{name}</p>
      <p
        className={clsx(styles.statusItem, {
          [styles.online]: isOnline === true,
          [styles.offline]: isOnline === false,
        })}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
