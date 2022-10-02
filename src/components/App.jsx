import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      id: nanoid(),
    };
    this.setState(
      state => {
        if (!state.contacts.includes(contact))
          return state.contacts.push(contact);
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <Contacts contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}
