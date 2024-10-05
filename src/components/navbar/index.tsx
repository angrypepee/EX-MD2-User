import { Link, useLocation } from 'react-router-dom';
import Logo from '../logo/logo.png'
function Navbar() {
    const location = useLocation();

    return (
        <header className='bg-green-600 p-2 rounded-lg'>

            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/register">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-12 h-12 mr-2"
                        />
                    </Link>
                    <span className="text-white font-bold text-xl">Kermit </span> {/* Text logo (optional) */}
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
                        Members
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
