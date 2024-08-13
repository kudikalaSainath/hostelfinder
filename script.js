async function fetchHostels() {
    const response = await fetch('/api/hostels');
    const hostels = await response.json();
    return hostels;
  }
  
  function displayHostels(hostels) {
    const hostelList = document.getElementById('hostel-list');
    hostelList.innerHTML = '';
  
    hostels.forEach(hostel => {
      const hostelDiv = document.createElement('div');
      hostelDiv.className = 'hostel-item';
      hostelDiv.innerHTML = `
        <h3>${hostel.name}</h3>
        <p>Gender: ${hostel.gender}</p>
        <p>Location: ${hostel.location}</p>
        <p>Contact: ${hostel.contact}</p>
      `;
      hostelList.appendChild(hostelDiv);
    });
  }
  
  async function searchHostels() {
    const gender = document.getElementById('gender-filter').value;
    const location = document.getElementById('location-filter').value;
    const hostels = await fetchHostels();
  
    const filteredHostels = hostels.filter(hostel => {
      return (!gender || hostel.gender === gender) &&
             (!location || hostel.location.includes(location));
    });
  
    displayHostels(filteredHostels);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    searchHostels();
  });
  
  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 17.385044, lng: 78.486671 }, // Default center (Hyderabad)
    zoom: 12
  });
}

function addMarkers(hostels) {
  hostels.forEach(hostel => {
    new google.maps.Marker({
      position: { lat: parseFloat(hostel.lat), lng: parseFloat(hostel.lng) },
      map: map,
      title: hostel.name
    });
  });
}

async function searchHostels() {
  const gender = document.getElementById('gender-filter').value;
  const location = document.getElementById('location-filter').value;
  const hostels = await fetchHostels();

  const filteredHostels = hostels.filter(hostel => {
    return (!gender || hostel.gender === gender) &&
           (!location || hostel.location.includes(location));
  });

  displayHostels(filteredHostels);
  addMarkers(filteredHostels);
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  searchHostels();
});
import React from 'react';

const InteractiveComponent = () => {
    return (
        <div>
            <button onClick={() => alert('Clicked!')}>Click Me</button>
            {/* Add interactive elements here */}
        </div>
    );
};

export default InteractiveComponent;
