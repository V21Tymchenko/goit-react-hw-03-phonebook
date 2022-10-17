import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Box, Phonebook, Contacts, ContactContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  filterContact = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('обновили наши контакты');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const ourContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(ourContacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  render() {
    const { filter } = this.state;
    const newFilterContact = this.getVisibleContacts();
    return (
      <Box>
        <Phonebook>Phonebook</Phonebook>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <Contacts>Contacts</Contacts>
        <ContactContainer>
          <Filter value={filter} onChange={this.filterContact}></Filter>
          <ContactList
            contacts={newFilterContact}
            onDeleteContact={this.deleteContact}
          ></ContactList>
        </ContactContainer>
      </Box>
    );
  }
}
