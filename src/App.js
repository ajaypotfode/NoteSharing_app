
import './component/admin/Admin.css'
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home'
// import Notes from './component/users/Notes';
import Admin from './component/admin/Admin';
import User from './component/users/User';
import Login from './component/pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
