// Initialize and add the map
function initMap() {
    // The location of Uluru
    const burgas = { lat: 42.513, lng: 27.466 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: burgas,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: burgas,
      map: map,
    });
  
  }