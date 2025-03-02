import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ChargingStationMap from './components/ChargingStationMap';
import TransactionPage from './pages/TransactionPage';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [location, setLocation] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [stations, setStations] = useState([]);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newStation = {
      id: stations.length + 1,
      owner: walletAddress,
      lat: parseFloat(location.split(',')[0]),
      lng: parseFloat(location.split(',')[1]),
      pricePerKwh: 0.12, // Default value, can be changed
      available: true,
      powerOutput: 11, // Default value, can be changed
      plugType: 'Type 2' // Default value, can be changed
    };
    setStations([...stations, newStation]);
    setShowForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Solana EV Charging Network</h1>
        <p>Decentralized Charging for Electric Vehicles</p>
      </header>
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={
            <>
              <ChargingStationMap stations={stations} />
              <div style={{ marginTop: '2rem', maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>How It Works</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                  <div style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
                    <h3 style={{ fontWeight: 'bold' }}>For Homeowners</h3>
                    <p style={{ marginTop: '0.5rem' }}>Register your home charger and earn SOL when others use your station.</p>
                    <button 
                      style={{ marginTop: '1rem', backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', width: '100%', border: 'none' }}
                      onClick={handleRegisterClick}
                    >
                      Register Your Charger
                    </button>
                  </div>
                </div>
              </div>
              {showForm && (
                <form onSubmit={handleFormSubmit} style={{ marginTop: '2rem', maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Register Your Charger</h2>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Location (latitude, longitude):</label>
                    <input 
                      type="text" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)} 
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }} 
                      required 
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Wallet Address:</label>
                    <input 
                      type="text" 
                      value={walletAddress} 
                      onChange={(e) => setWalletAddress(e.target.value)} 
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }} 
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}
                  >
                    Submit
                  </button>
                </form>
              )}
            </>
          } />
          <Route path="/transaction/:stationId" element={<TransactionPage />} />
        </Routes>
      </main>
      <footer style={{ backgroundColor: '#f3f4f6', padding: '1rem', marginTop: '2rem', textAlign: 'center', color: '#4b5563' }}>
        Solana EV Charging Network &copy; 2025
      </footer>
    </div>
  );
}

export default App;