
import React from 'react'
import user from './Data/user.json'
import data from './Data/data.json'
import friends from './Data/friends.json'
import transactions from './Data/transactions.json'

import Profile from "../profile/Profile";
import Statistics from "../statistics/Statistics";
import FriendList from "../friendList/FriendList";
import TransactionHistory from "../transation/TransactionHistory";
import Container from '../styled/Container'

export function App() {
  return <Container>
  <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
    <Statistics stats={data} title={'Upload stats'}/>
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </Container>;
}



