import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className='bg-slate-950'>
            <div className='container mx-auto'>
                    <nav>
                        {/* <Link to="/">Home</Link> */}
                        <Link to="/register">Register</Link>
                        <Link to="/users">Users</Link>
                    </nav>
            </div>
        </header>
    );
}

export default Navbar;