import { useState, useEffect } from 'react';
import './App.css';

import ContactsList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';

function App() {


  const [nameToSearch, setNameToSearch] = useState("");

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== id)
    })
  };

  // const filteredContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(nameToSearch.toLowerCase().trim())
  // });  

  const handleChange = (event) => {
    setNameToSearch(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox handleChange={handleChange}></SearchBox>
      <ContactsList></ContactsList>
    </>
  );
}

export default App
