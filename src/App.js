import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json'

function App() {
  return (
    <div>
      <Section title="Задание 1 - Профиль социальной сети">
        <Profile
        url={user.avatar}
        alt={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
        
      </Section>

      <Section title="Задание 2 - Секция статистики">
        <Statistics title="Upload stats" stats={statisticalData} />
        
        <Statistics
          stats={statisticalData} />
        

      </Section>

      <Section title="Задание 3 - Список друзей">
        <FriendList friends={friends} />
      </Section>

      <Section title="Задание 4 - История транзакций">
        <TransactionHistory items={transactions} />
      </Section> 
    </div>
  );
}

export default App;
