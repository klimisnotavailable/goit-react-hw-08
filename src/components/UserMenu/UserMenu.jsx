import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


export default function UserMenu() {
    const dispatch = useDispatch();

    const handleClick = () =>{
        dispatch(logout())
    };
    
    const user = useSelector(selectUser);

    return <div> 
    <p>Welcome , {user.name} </p>
    <button onClick={handleClick}>Logout</button>
    </div> 
}