import Contact from "../Contact/Contact"
import css from "../ContactsList/ContactsList.module.css"

export default function ContactsList(data) {
    const contacts = data.data.map((contact) => {
        return <li key={contact.id} className={css.contactItem}><Contact contact={contact}></Contact></li>
    })
    return <ul>{contacts }</ul>
}