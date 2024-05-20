import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactsList() {
    const contactsData = useSelector(selectFilteredContacts);

    return <ul>
            {contactsData.map((contact) => {
                return <li key={contact.id} className={css.contactItem}><Contact contact={contact} ></Contact></li>
            })}
            </ul>;
}