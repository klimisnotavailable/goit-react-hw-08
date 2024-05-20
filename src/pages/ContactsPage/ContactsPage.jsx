import ContactsList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
function ContactsPage() {
    const dispatch = useDispatch();

    useEffect(()=>{
         
    })

    return <section>
        <ContactForm/>
        <SearchBox></SearchBox>
        <ContactsList ></ContactsList>
        </section>
}


export default ContactsPage;