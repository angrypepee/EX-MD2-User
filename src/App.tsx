import { Routes, Route } from 'react-router-dom';
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
