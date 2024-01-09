import React from 'react';
import './styles/CardStyles.css';
import RevenueCard from './components/cards/RevenueCard';
import SubscribersCard from './components/cards/SubscribersCard';
import ConversationsCard from './components/cards/ConversationsCard';
import AutomationsCard from './components/cards/AutomationsCard';
import ProfilePhoto from './components/ProfilePhoto';
import Graph from './components/Graph';
import Sidebar from './components/cards/Sidebar';




function App() {
  const graphData = [
    { name: 'Jan', value: 20 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 28 },
    
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <Sidebar> </Sidebar>
      <main>
        <div className="card-container">
          <RevenueCard />
          <SubscribersCard />
          <ConversationsCard />
          <AutomationsCard />
          <ProfilePhoto imageUrl="https://lh3.googleusercontent.com/pw/ABLVV85AOcZ3ZpxwA75rkdwgW28PaYR-ufYW--OGeaACUdBCeeFKxlhXmI4RTh7252KZP-Lf7NZD5risyB4b9UiPg1GvsZh-bpzDLZSbob-gU4UW5OqKDAdAqd0Jyx4G5Z3uYM8VMzZCA6rt_ABUiQPoAHSX=w609-h913-s-no-gm?authuser=0" />
          <Graph data={graphData} />
        </div>
      </main>
    </div>
  );
}

export default App;
