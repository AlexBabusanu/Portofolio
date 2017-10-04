function map() {
	var center = {lat: 47.934315, lng: 25.3338432};
	var mark = {lat: 47.1572996,lng: 27.5886934};
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: center,
          disableDefaultUI:true,
          styles: [
          	{elementType: "geometry", stylers: [{color:"#000000"}]},
          	{elementType: 'labels.text.stroke', stylers: [{color: '#f4eb42'}]},
          	{
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
             {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            
             {
              featureType: 'administrative.country',
              elementType: 'geometry.stroke',
              stylers: [{color: '#898e8c'}]
            },

          ]
        });
	var marker = new google.maps.Marker({
          position: mark,
          map: map
        });
      
}
function loadScript() {
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=map';
  document.body.appendChild(script);
}

window.onload = loadScript;