
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SideBar from './components/sidebar';
import Signup from './pages/Signup';

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
      </Routes>
      </div>
    </div>
  );
}

export default App;
