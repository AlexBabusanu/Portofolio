function map() {
	var center = {lat: 47.934315, lng: 25.3338432};
	var mark = {lat: 47.1572996,lng: 27.5886934};
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: center,
          disableDefaultUI:true,
          styles: [
          	{elementType: "geometry", stylers: [{color:"#000000"}]},
          	{elementType: 'labels.text.stroke', stylers: [{color: '#ffffff', Weight: 0.1}]},
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
      
};

function loadScript() {
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=map';
  document.body.appendChild(script);
};

var text = ["writing code!", "designing websites!", "testing!", "challanges!"];
var count = 0;

function textAnimation(){
	
	var counter = 0;
	var test = document.getElementById('mod');

	
	var x = setInterval(function(){
		test.innerHTML += text[count][counter];		
		counter++;		
		if(counter===text[count].length){
			clearInterval(x);
			setTimeout(function(){
				var y = setInterval(function(){
					var hello =  test.innerHTML;
					var helloCut = hello.slice(0, counter);
					test.innerHTML = helloCut;
					counter--;
					if(counter===0){
						setTimeout(function(){
							test.innerHTML = "";
						},150);						
						setTimeout(function(){
							clearInterval(y);
							if(count +1 === text.length){
								count = -1;
							};
							textAnimation(count++);
						}, 1000);						
					}
				},100);
			},2000);
		};	
	},150);	
	

};
function dash(){
	var dash = document.getElementById("dash");
	var hide = setInterval(function(){
		if(dash.style.opacity === "1"){
			dash.style.opacity = "0";
		}
		else {
			dash.style.opacity = "1";
		}
	}, 600);
};

window.onload = function() {

loadScript();
textAnimation(count);
dash();
};
