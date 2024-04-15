import css from "../Contact/Contact.module.css"

export default function Contact(contact) {
    const { name, number } = contact.contact;

    return <>
        <div className={css.contactContainer}>
            <span><p className={css.contactInfo}>{name}</p></span>
            <span><p className={css.contactInfo}>{number }</p></span>
        </div>
        <button className={css.deleteButton}>Delete</button>
    </>
}