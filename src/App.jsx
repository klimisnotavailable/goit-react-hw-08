import { useState, useEffect } from 'react';
import './App.css';

import ContactsList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

function App() {

  const value = useSelector(state => state.contacts.contacts)
  const [nameToSearch, setNameToSearch] = useState("");


  const [contacts, setContacts] = useState(() => {

    const savedContacts = JSON.parse(localStorage.getItem("contacts"))

    if (savedContacts !== null && savedContacts.length !== 0) {
      return savedContacts;
    } else {
    return value;
    }
  });


  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //       newContact.id = nanoid()
  //       return [...prevContacts, newContact]
  //     });
  // };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== id)
    })
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(nameToSearch.toLowerCase().trim())
  });  

  const handleChange = (event) => {
    setNameToSearch(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <SearchBox handleChange={handleChange}></SearchBox>
      <ContactsList data={filteredContacts} onDelete={deleteContact}></ContactsList>
    </>
  );
}

export default App
