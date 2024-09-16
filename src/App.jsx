import React from 'react';
import './App.css';
import Navbar from './components/common/NavBar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <AppRoutes /> {/* Render your routes here */}
      <Footer/>
    </div>
  );
}
export default App