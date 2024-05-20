import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return <><ul>
        <li><Link to={"/"}>Home</Link></li>
        {isLoggedIn && <li><Link to={"/contacts"}>Contacts</Link></li>}
    </ul></>
}