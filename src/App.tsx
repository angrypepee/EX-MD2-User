import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Register from './pages/register';
import Users from './pages/users';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>  
        {/* <Navbar /> */}
          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Register' element={<Register />}></Route>
              <Route path='/users' element={<Users />}></Route>
          </Routes>
        
    </>

  );
}


export default App;
