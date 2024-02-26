import Profile from './Profile/Profile';
import Statistics from './Statistics/statistics';
import Friends from './Friends/FriendsList';
import TransactionHistory from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics condition={false} />
      <Friends />
      <TransactionHistory />
    </div>
  );
};
