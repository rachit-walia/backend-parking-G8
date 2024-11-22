import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Wallet from './components/Wallet';
import Charging from './components/Charging';
// import ParkingSpace from './components/ParkingSpace';
import WalletNav from './components/walletNav';
import Booking from './components/Booking';
import BodyPage from './components/BodyPage';
import ParkingPage from './components/ParkingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BodyPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet-nav" element={<WalletNav />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/charging" element={<Charging />} />
        <Route path="/parking" element={<ParkingPage />} /> {/* Corrected the path */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
