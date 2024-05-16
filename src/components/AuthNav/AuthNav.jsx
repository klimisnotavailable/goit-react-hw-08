import { Link } from "react-router-dom";

export default function AuthNav() {
    return <nav><ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul></nav>
}