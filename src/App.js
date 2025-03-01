import React from 'react';
import './App.css';
import ChargingStationMap from './components/ChargingStationMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Solana EV Charging Network</h1>
        <p>Decentralized Charging for Electric Vehicles</p>
      </header>
      <main style={{ padding: '1rem' }}>
        <ChargingStationMap />
        
        <div style={{ marginTop: '2rem', maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto', padding: '1.5rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <div style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>For Homeowners</h3>
              <p style={{ marginTop: '0.5rem' }}>Register your home charger and earn SOL when others use your station.</p>
              <button style={{ marginTop: '1rem', backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', width: '100%', border: 'none' }}>
                Register Your Charger
              </button>
            </div>
            
            <div style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>For EV Drivers</h3>
              <p style={{ marginTop: '0.5rem' }}>Find convenient charging stations and pay seamlessly with Solana.</p>
              <button style={{ marginTop: '1rem', backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', width: '100%', border: 'none' }}>
                Find Chargers
              </button>
            </div>
            
            <div style={{ border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>Powered by Solana</h3>
              <p style={{ marginTop: '0.5rem' }}>Fast, secure, and low-fee transactions for a better charging experience.</p>
              <button style={{ marginTop: '1rem', backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', width: '100%', border: 'none' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer style={{ backgroundColor: '#f3f4f6', padding: '1rem', marginTop: '2rem', textAlign: 'center', color: '#4b5563' }}>
        Solana EV Charging Network &copy; 2025
      </footer>
    </div>
  );
}

export default App;