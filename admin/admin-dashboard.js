const backendURL = 'https://your-backend.onrender.com/api/locations';
const token = localStorage.getItem('token'); // Get stored token

// Fetch locations
async function fetchLocations() {
    const res = await fetch(backendURL);
    const locations = await res.json();
    const list = document.getElementById('locations-list');
    list.innerHTML = '';

    locations.forEach(loc => {
        const li = document.createElement('li');
        li.innerHTML = `${loc.name} (${loc.type}) - ${loc.lat}, ${loc.lng}
            <button onclick="deleteLocation('${loc._id}')">Delete</button>`;
        list.appendChild(li);
    });
}

// Add a new location
document.getElementById('add-location-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const lat = document.getElementById('lat').value;
    const lng = document.getElementById('lng').value;
    const type = document.getElementById('type').value;

    const res = await fetch(backendURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify({ name, lat, lng, type }),
    });

    if (res.ok) {
        alert('Location added');
        fetchLocations();
    } else {
        alert('Error adding location');
    }
});

// Delete a location
async function deleteLocation(id) {
    const res = await fetch(`${backendURL}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: token },
    });

    if (res.ok) {
        alert('Location deleted');
        fetchLocations();
    } else {
        alert('Error deleting location');
    }
}

// Run on page load
fetchLocations();
