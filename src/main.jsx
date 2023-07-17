import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './index.css';
import Navbars from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='cursor-div'>
      <Navbars />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
