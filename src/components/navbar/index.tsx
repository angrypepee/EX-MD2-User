import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/users">Users</Link>
        </nav>
    );
}

export default Navbar;