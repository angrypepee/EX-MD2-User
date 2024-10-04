import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    return (
        <header className='bg-red-500 p-4 rounded-sm'>
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/register">
                        <img
                            src="./assets/img/kermit-the-frog.png" 
                            alt="Logo"
                            className="w-12 h-12 mr-2"
                        />
                    </Link>
                    <span className="text-white font-bold text-xl">Angry Pepe Ltd. </span> {/* Text logo (optional) */}
                </div>

                {/* Right side - Navigation links */}
                <div className="flex space-x-4">
                    <Link 
                        to="/register" 
                        className={`text-white font-semibold hover:underline ${location.pathname === '/register' ? 'underline' : ''}`}
                    >
                        Registration
                    </Link>
                    <Link 
                        to="/users" 
                        className={`text-white font-semibold hover:underline ${location.pathname === '/users' ? 'underline' : ''}`}
                    >
                        Users
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
