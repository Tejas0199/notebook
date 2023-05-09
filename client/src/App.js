
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SideBar from './components/sidebar';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <div className='navigation-container'>
      <SideBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
