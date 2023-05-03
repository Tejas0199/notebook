
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SideBar from './components/sidebar';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <div className='navigation-container'>
      <SideBar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
