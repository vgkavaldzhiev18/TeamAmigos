// Initialize and add the map
function initMap() {
  // The location of Burgas, Sofia, Plovdiv, Varna
  const burgas = { lat: 42.513, lng: 27.466 };
  const sofia = { lat: 42.697, lng: 23.321 };
  const plovdiv = { lat: 42.144, lng: 24.750 };
  const varna = { lat: 43.214, lng: 27.914 };
  // The map, centered at Burgas
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: burgas,
  });
  // The marker, positioned at Burgas
   marker = new google.maps.Marker({
    position: burgas,
    map: map,
  });
 
  // The marker, positioned at Burgas
  marker = new google.maps.Marker({
    position: sofia,
    map: map,
  });
 
  // The marker, positioned at Burgas
  marker = new google.maps.Marker({
    position: varna,
    map: map,
  });
 
  // The marker, positioned at Burgas
  marker = new google.maps.Marker({
    position: plovdiv,
    map: map,
  });
 
}