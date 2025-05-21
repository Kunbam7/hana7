import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    return <>
        <ul>
            <li>
                <NavLink to='/'replace>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
                <NavLink to='/my'>My</NavLink>
            </li>
            <li>
                <NavLink to='/posts'>Posts</NavLink>
            </li>
            <li>
                <NavLink to='/hello'>Hello</NavLink>
            </li>
        </ul>
    
    </>;
}