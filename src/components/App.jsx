import React, { Component } from 'react'
import Form from './form/Form'
import ContactList from './new_contact/ContactList'
import Filter from './filter/Filter'
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

formSubmitHandle = data => {
  data.id = nanoid();

  if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase() )
  )
    {
      alert(`${data.name} is already in Contacts.`);
      return;
    }
  
  this.setState(prevState => ({
      contacts: [data, ...prevState.contacts],
   }));
  };

 
  handleFilterInputChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  }
  

  renderContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteButton = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
   
  render() {
    return(
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandle} />
        
          <h2>Contacts</h2>
          <Filter value={this.filter} onChange={this.handleFilterInputChange} />
          {this.state.contacts.length ? (
          
            <ContactList contacts={this.renderContacts()} onDeleteButton={this.onDeleteButton } />) : (
            <p>Contact not found</p>
          )}
    </>
  );
 } 
};

export default App;