import css from './App.module.css';
import { Profile } from './components/Profile/profile';
import { Statistics } from 'components/Statistics/statistics';
import { FriendList } from './components/FriendList/friendList';
import { TransactionHistory } from 'components/TransactionHistory/transactionHistory';

import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import friends from 'components/FriendList/friends';
import transactions from 'components/TransactionHistory/transactions';

export const App = () => {
  return (
    <>
      <div className={css.container}>
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </>
      <>
        <Statistics title="Upload stats" stats={data} />
      </>
      <>
        <FriendList friends={friends} />
      </>
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
};
