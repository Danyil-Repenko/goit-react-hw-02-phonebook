import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Strarza Rui', number: '200-61-26' },
      { id: 'id-6', name: 'Marnie Starson', number: '207-91-96' },
      { id: 'id-7', name: 'Dan Kortess', number: '127-12-76' },
      { id: 'id-8', name: 'Preston Wertons', number: '227-91-86' },
      { id: 'id-9', name: 'Max Maddie', number: '227-00-56' },
      { id: 'id-10', name: 'Lily Rom', number: '227-67-36' },
    ],
    filter: '',
  };

  addContact = e => {
    e.preventDefault();
    let nameInput = e.target.elements.name.value;
    let numberInput = e.target.elements.number.value;

    const contact = [
      {
        name: nameInput,
        number: numberInput,
        id: nanoid(),
      },
    ];

    if (this.state.contacts.find(contact => contact.name === nameInput)) {
      alert(`${nameInput} is already in contacts`);
    } else {
      this.setState(state => {
        return { contacts: [...state.contacts, ...contact] };
      });
    }

    nameInput = '';
    numberInput = '';
  };

  removeContact = e => {
    if (e.target.nodeName === 'BUTTON') {
      console.log(e.currentTarget);
    }
  };

  handleFilterInput = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter handleInput={this.handleFilterInput} />
        <ContactList
          contacts={this.state.contacts}
          filterState={this.state.filter}
          handleBtnClick={this.removeContact}
        />
      </div>
    );
  }
}
