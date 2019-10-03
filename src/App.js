import React from 'react';
import './App.css';

import CardList from './components/cardList/cardList.component'
import AppNavbar from './components/navbar/navbar.component';


class App extends React.Component{
  
  state ={
    contacts: [],
    searchTerm: ''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(data => this.setState({contacts : data}))
  }
  handleSearch = (e)=>{
    this.setState({searchTerm:e.target.value})
  }
  render(){
    const { contacts, searchTerm } = this.state;
    const filterContact = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return(
      <div className='App'>
        <AppNavbar handleSearch = {this.handleSearch} />
        <CardList contacts={filterContact} />
          
      </div>
      
    )
  }
}

export default App;
