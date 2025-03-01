import React, { useState, useEffect } from 'react';
import { MapPin, BatteryCharging, Zap } from 'lucide-react';

const ChargingStationMap = () => {
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  
  // Mock data for demonstration
  const mockStations = [
    { id: '1', owner: 'GRxT...j28q', lat: 37.7749, lng: -122.4194, pricePerKwh: 0.12, available: true, powerOutput: 11, plugType: 'Type 2' },
    { id: '2', owner: 'HJ8k...p9L2', lat: 37.7833, lng: -122.4167, pricePerKwh: 0.15, available: false, powerOutput: 22, plugType: 'CCS' },
    { id: '3', owner: 'T5mP...r7Z3', lat: 37.7694, lng: -122.4862, pricePerKwh: 0.10, available: true, powerOutput: 7, plugType: 'Type 1' },
  ];
  
  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
    
    // In a real app, you would fetch stations from your backend
    // For now, we'll use mock data
    setTimeout(() => {
      setStations(mockStations);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };
  
  const handleConnectWallet = () => {
    // In a real app, this would connect to a Solana wallet
    // For demonstration, we'll just simulate it
    setWalletConnected(true);
    setWalletAddress("DLmj...78nK");
  };
  
  const handleBooking = async (stationId) => {
    if (!walletConnected) {
      alert("Please connect your wallet first");
      return;
    }
    
    // This would call your backend service which interacts with Solana
    alert(`Booking station ${stationId}. In a real app, this would create a transaction.`);
  };
  
  // Render station markers with inline styles instead of Tailwind
  const renderStations = () => {
    return stations.map(station => (
      <div 
        key={station.id}
        style={{
          padding: '0.5rem',
          marginBottom: '0.5rem',
          borderRadius: '0.5rem',
          border: '1px solid',
          borderColor: station.available ? '#d1fae5' : '#f3f4f6',
          backgroundColor: station.available ? '#ecfdf5' : '#f9fafb',
          cursor: 'pointer'
        }}
        onClick={() => handleStationSelect(station)}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            padding: '0.5rem', 
            backgroundColor: '#dbeafe', 
            borderRadius: '9999px', 
            marginRight: '0.75rem' 
          }}>
            <BatteryCharging size={20} style={{ color: '#2563eb' }} />
          </div>
          <div>
            <p style={{ fontWeight: '500' }}>Station #{station.id}</p>
            <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
              {station.available ? 'Available' : 'In Use'} • {station.powerOutput} kW • {station.plugType}
            </p>
          </div>
        </div>
      </div>
    ));
  };
  
  const mapContainerStyle = {
    width: '100%',
    maxWidth: '960px',
    margin: '0 auto',
  };
  
  const cardStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    overflow: 'hidden'
  };
  
  const headerStyle = {
    padding: '1rem 1.5rem',
    backgroundColor: '#2563eb',
    color: 'white'
  };
  
  const flexRowStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  
  const mapAreaStyle = {
    width: '100%',
    backgroundColor: '#eff6ff',
    padding: '1rem',
    minHeight: '16rem', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  const stationListStyle = {
    width: '100%',
    padding: '1rem',
    maxHeight: '16rem',
    overflowY: 'auto',
    borderTop: '1px solid #e5e7eb'
  };
  
  const stationDetailsStyle = {
    padding: '1rem',
    borderTop: '1px solid #e5e7eb'
  };
  
  // Use media query for responsive layout
  useEffect(() => {
    const handleResize = () => {
      const flexRowElement = document.getElementById('flex-row');
      if (flexRowElement) {
        if (window.innerWidth >= 768) {
          flexRowElement.style.flexDirection = 'row';
          document.getElementById('map-area').style.width = '66.666667%';
          document.getElementById('station-list').style.width = '33.333333%';
          document.getElementById('station-list').style.borderTop = 'none';
          document.getElementById('station-list').style.borderLeft = '1px solid #e5e7eb';
        } else {
          flexRowElement.style.flexDirection = 'column';
          document.getElementById('map-area').style.width = '100%';
          document.getElementById('station-list').style.width = '100%';
          document.getElementById('station-list').style.borderTop = '1px solid #e5e7eb';
          document.getElementById('station-list').style.borderLeft = 'none';
        }
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div style={mapContainerStyle}>
      <div style={cardStyle}>
        <div style={{...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>EV Charging Network</h2>
            <p>Find and book residential charging stations near you</p>
          </div>
          {!walletConnected ? (
            <button 
              onClick={handleConnectWallet}
              style={{
                backgroundColor: 'white',
                color: '#2563eb',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Connect Wallet
            </button>
          ) : (
            <div style={{
              backgroundColor: '#1e40af',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem'
            }}>
              {walletAddress}
            </div>
          )}
        </div>
        
        <div id="flex-row" style={flexRowStyle}>
          {/* Map area - would be an actual map in production */}
          <div id="map-area" style={mapAreaStyle}>
            {isLoading ? (
              <p>Loading charging stations...</p>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem' }}><MapPin size={32} style={{ display: 'inline', color: '#2563eb' }} /></p>
                <p>Map would display here with {stations.length} stations</p>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.5rem' }}>Using Mapbox or Google Maps in production</p>
              </div>
            )}
          </div>
          
          {/* Station list */}
          <div id="station-list" style={stationListStyle}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.75rem' }}>Nearby Stations</h3>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              renderStations()
            )}
          </div>
        </div>
        
        {/* Station details */}
        {selectedStation && (
          <div style={stationDetailsStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Station #{selectedStation.id}</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Owned by: {selectedStation.owner}</p>
                <div style={{ marginTop: '0.5rem' }}>
                  <p><Zap size={16} style={{ display: 'inline', marginRight: '0.25rem', color: '#eab308' }} /> {selectedStation.powerOutput} kW • {selectedStation.plugType}</p>
                  <p style={{ fontWeight: '500' }}>{selectedStation.pricePerKwh} SOL per kWh</p>
                </div>
              </div>
              <button
                onClick={() => handleBooking(selectedStation.id)}
                disabled={!selectedStation.available}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  backgroundColor: selectedStation.available ? '#2563eb' : '#e5e7eb',
                  color: selectedStation.available ? 'white' : '#6b7280',
                  border: 'none',
                  cursor: selectedStation.available ? 'pointer' : 'not-allowed'
                }}
              >
                {selectedStation.available ? 'Book Now' : 'Not Available'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChargingStationMap;