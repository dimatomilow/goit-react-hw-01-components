
import React from 'react'
import user from './user.json'
import data from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";
import Container from '../styled/Container'

export function App() {
  return <Container>
  <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
    <Statistics stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </Container>;
}



