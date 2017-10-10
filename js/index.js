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
var word = 0;

function textAnimation(){
	
	var letter = 0;
	var writing = document.getElementById('writing');

	
	var x = setInterval(function(){
		writing.innerHTML += text[word][letter];		
		letter++;		
		if(letter===text[word].length){
			clearInterval(x);
			setTimeout(function(){
				var y = setInterval(function(){
					var include =  writing.innerHTML;
					var includeCut = include.slice(0, letter);
					writing.innerHTML = includeCut;
					letter--;
					if(letter===0){
						setTimeout(function(){
							writing.innerHTML = "";
						},150);						
						setTimeout(function(){
							clearInterval(y);
							if(word +1 === text.length){
								word = -1;
							};
							textAnimation(word++);
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

var about = [document.getElementById("aboutLink"), document.getElementById("about")];
var contact = [document.getElementById("contactLink"), document.getElementById("contact")];
var home = [document.getElementById("homeLink"), document.getElementById("homes")];
console.log(about)
function smoothScroll(x){
		x[0].addEventListener("click", function(){
			if(pageYOffset < x[1].offsetTop){
			var y = setInterval(function(){
		        window.scrollBy(0, 10);
		        console.log(window.pageYOffset)
			      if(window.pageYOffset >= x[1].offsetTop || window.pageYOffset >= document.body.scrollHeight - window.innerHeight){
			        console.log("stop")
			        clearInterval(y);
			      } 
			        return;
			      }, 0.1)
			}
			else {
			var i = setInterval(function(){
				window.scrollBy(0, -10);
				console.log(window.pageYOffset)
				if(window.pageYOffset <= x[1].offsetTop || window.pageYOffset === 0){
					console.log("stop");
					clearInterval(i);
				}
			}, 0.1);
			}	
		}, false);

		
}


window.onload = function() {

//loadScript();
textAnimation(word);
dash();
smoothScroll(about);
smoothScroll(contact);
smoothScroll(home);
};
