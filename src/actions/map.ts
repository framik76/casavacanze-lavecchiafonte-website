function getMap() {
    
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    return new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
  
}