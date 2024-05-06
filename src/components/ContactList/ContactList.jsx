import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";



export default function ContactsList() {
    const value = useSelector(state => state.contacts.contacts.items);
    
    const [contacts, setContacts] = useState(value);
  
    useEffect(() => {
        setContacts(value)
    }, [value]);

    const contactsMarkup = contacts.map((contact) => {
        return <li key={nanoid()} className={css.contactItem}><Contact contact={contact} ></Contact></li>
    })
    return <ul>{contactsMarkup }</ul>
}