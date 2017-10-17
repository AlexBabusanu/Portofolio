




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


var word = 0;
function textAnimation(){
	var text = ["writing code!", "designing websites!", "testing!", "challanges!"];

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
function smoothScroll(x){
		x[0].addEventListener("click", function(){
			if(pageYOffset < x[1].offsetTop){
			var y = setInterval(function(){
		        window.scrollBy(0, 10);
			      if(window.pageYOffset >= x[1].offsetTop || window.pageYOffset >= document.body.scrollHeight - window.innerHeight){
			        clearInterval(y);
			      } 
			        return;
			      }, 0.1)
			}
			else {
			var i = setInterval(function(){
				window.scrollBy(0, -10);
				if(window.pageYOffset <= x[1].offsetTop || window.pageYOffset === 0){
					clearInterval(i);
				}
			}, 0.1);
			}	
		}, false);

		
};
var test;
function header(){
	var fired = false;
	var headerBackground = document.getElementById("backgroundNav");
	var height =  headerBackground.style.height;
	height = height.replace("px", "");
	height =+ height;
	var pixels = 1;
		function grow(){			
			if(height < 50){
				height = pixels + height;
				headerBackground.style.height = height + "px";					
			}
			else{
				headerBackground.parentNode.style.color = "#000";
				headerBackground.style.borderBottom = "solid 3px #000";
				fired = false;
				clearInterval(test);
				
			}			
		}
		function shrink(){
			if(height > 0){
				headerBackground.style.borderBottom = "";
				height = height - pixels;
				headerBackground.style.height = height + "px";
			}
			else {
				headerBackground.parentNode.style.color = "#fff"
				clearInterval(test);
				fired = false;
			}

		}
	window.addEventListener("scroll", function(){
		if(pageYOffset >= about[1].offsetTop){
			if(pageYOffset >= contact[1].offsetTop || document.body.scrollHeight - (pageYOffset + window.innerHeight) === 0){
				about[0].style.fontWeight = "";
				contact[0].style.fontWeight = "bold";

			}
			else {
			about[0].style.fontWeight = "bold";
			contact[0].style.fontWeight = "";
			home[0].style.fontWeight = "";
			}
		}
		if(pageYOffset < about[1].offsetTop){
			about[0].style.fontWeight = "";
			home[0].style.fontWeight = "bold";
		}
		
		if(pageYOffset >100 && fired == false){
				fired = true;
				test = setInterval(grow, 5);

		}
		if(pageYOffset < 100 && fired == false){
			fired = true;
			test = setInterval(shrink, 5);
		}
		
	})
	
};

window.onload = function() {

//loadScript();
textAnimation(word);
dash();
smoothScroll(about);
smoothScroll(contact);
smoothScroll(home);
header();
};
