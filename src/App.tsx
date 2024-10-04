import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Navbar from './components/navbar';
import Register from './pages/register';
import Users from './pages/users';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>  
          <Routes>
              <Route path='/' element={<Register/>} />

              <Route path='/register' element={<Register/>}></Route>
              <Route path='/users' element={<Users />}></Route>
          </Routes>
        
    </>

  );
}


export default App;
