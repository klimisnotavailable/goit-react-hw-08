import css from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch ,useSelector} from "react-redux";

export default function Contact({contact}) {    
    const data = useSelector(state => state.contacts.contacts.items)
    const {newContact:{name,number}, id} = contact;
    const dispatch = useDispatch();
    console.log(dispatch(deleteContact(id)));
    return <>
        <div className={css.contactContainer}>
            <span><p className={css.contactInfo}>{name}</p></span>
            <span><p className={css.contactInfo}>{number }</p></span>
        </div>
        <button className={css.deleteButton} onClick={()=>{dispatch(deleteContact(id));console.log(data)}}>Delete</button>
    </>
}