import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';

function App() {


  return (
    <div className="app-container">
      <Navbar />
      <h2>Movies library</h2>
      <Outlet></Outlet>
    </div>
  )
}

export default App
