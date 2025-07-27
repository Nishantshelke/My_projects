document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rescueForm');
    const shareLocationBtn = document.getElementById('shareLocationBtn');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const mobile = document.getElementById('mobile').value;
      const picture = document.getElementById('picture').files[0];
  
      // Perform actions with the form data, such as sending it to a server
  
      // Reset the form after submission
      form.reset();
    });
  
    shareLocationBtn.addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          
          // Open the location URL in a new tab
          window.open(locationUrl, '_blank');
        }, function(error) {
          alert('Error getting your location: ' + error.message);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    });
  });
  