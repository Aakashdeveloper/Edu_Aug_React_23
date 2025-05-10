import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';
import MyComp from './CustomeHooks';

const  stocks = [
  {
      id: 1,
      name: 'TCS'
          
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
]

const users = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
]

const StockComponent = Hoc(StockList,stocks);
const UserComponent = Hoc(UserList,users);

class App extends Component {
  
  render() {
    return (
      <div>
        <StockComponent/>
        <UserComponent/>
        <MyComp/>
      </div>
    )
  }
}

export default App;
