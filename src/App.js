import React from 'react';

import {SearchBox} from './components/search-box/serach-box.component'

import './App.css';

// import Display from './components/Display';
import JsonPlaceholder from './api/JsonPlaceholder';
import {CardList} from './components/card-lists/card-list.components';

 class App extends React.Component {
 componentDidMount() {
   // const users = this.josnApi();
   // const output = JsonPlaceholder.get('/users');
    //this.setState({monsters: users})

  fetch('https://jsonplaceholder.typicode.com/users')
                       .then(response => response.json())
                       .then(users => this.setState({monsters: users}))

 }
  josnApi = async () => {
   return await JsonPlaceholder.get('/users');
  }

   state = {
    monsters:[],
    serachField:''

  }

 

  render(){
   const {monsters, serachField} = this.state;
   const filteredMonsters = monsters.filter(monster =>
     monster.name.toLowerCase().includes(serachField.toLowerCase())
     )
  
  return (
    
    <div  className="App">
     
      {/* //<CardList monsters = {this.state.monsters} /> */}
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder = 'Search monsters'
      handelChange = {(e) => this.setState({serachField: e.target.value})}
      />
     <CardList monsters = {filteredMonsters} />


    </div>
  )
  }
}


export default App;
