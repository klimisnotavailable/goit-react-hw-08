import css from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({contact}) {    
    const {newContact:{name,number}, id} = contact;
    const dispatch = useDispatch();
    return <>
        <div className={css.contactContainer}>
            <span><p className={css.contactInfo}>{name}</p></span>
            <span><p className={css.contactInfo}>{number }</p></span>
        </div>
        <button className={css.deleteButton} onClick={()=>{dispatch(deleteContact(id));}}>Delete</button>
    </>
}