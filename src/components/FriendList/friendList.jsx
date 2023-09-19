import css from './friendList.module.css';
import { FriendListItem } from './friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(item => {
        return (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
};
