let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  } else {
    locationDiv.innerText = "Geolocation is not supported by this browser.";
  }
});

function showLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  //  address using the Nominatim API
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Check for city or fall back to town/village/state
    let city = data.address.city || data.address.town || data.address.village || data.address.state || "Unknown location";
    let country = data.address.country || "Unknown country";

    locationDiv.innerText = `${city}, ${country}`;
  });
}

// Function to show error messages
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDiv.innerText = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      locationDiv.innerText = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      locationDiv.innerText = "The request to get user location timed out.";
      break;
    default:
      locationDiv.innerText = "An unknown error occurred.";
      break;
  }
}
