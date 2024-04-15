import { useState } from 'react'
import './App.css'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactsList from './Components/ContactsList/ContactsList'
import SearchBox from './Components/SearchBox/SearchBox'

const contactsList = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
  const [nameToSearch, setNameToSearch] = useState("");

  const [contacts, setContacts] = useState(contactsList);
  
  const addContact = (contact) => {
    setContacts(contacts.push(contact))
  }

  const filteredContacts = contactsList.filter(contact => {
    return contact.name.toLowerCase().includes(nameToSearch.toLowerCase().trim())
  });  

  const handleChange = (event) => {
    setNameToSearch(event.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}></ContactForm>
      <SearchBox handleChange={handleChange}></SearchBox>
      <ContactsList data={filteredContacts}></ContactsList>
    </>
  )
}

export default App
