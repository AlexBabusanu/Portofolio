function map() {
	var center = {lat: 47.934315, lng: 25.3338432};
	var mark = {lat: 47.1572996,lng: 27.5886934};
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: center,
          disableDefaultUI:true,
          styles: [
          	{elementType: "geometry", stylers: [{color:"#252839"}]},
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

//header word writing animation
var word = 0;

function textAnimation(){
	var text = ["writing code!", "designing websites!", "testing!", "challanges!"];
	//speed options header text
	var deleteSpeed = 50;
	var writeSpeed = 100;
	var wordsInterval = 1000;
	var fullWordTime = 2000;
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
						}, wordsInterval);						
					}
				}, deleteSpeed);
			}, fullWordTime);
		};	
	}, writeSpeed);	
	
//header dash animation
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

//smooth scroll buttons=>anchors
var about = [document.getElementById("aboutLink"), document.getElementById("about")];
var contact = [document.getElementById("contactLink"), document.getElementById("contact")];
var home = [document.getElementById("homeLink"), document.getElementById("homes")];
//smooth scroll animation
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
				headerBackground.style.boxShadow = "0px 5px 10px #333333";
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
	var focus = function(element){
	  element.style.fontWeight = "bold";
	  element.style.backgroundColor="rgba(0, 0, 0, .2)";
	}
		window.addEventListener("scroll", function(){
		if(pageYOffset >= about[1].offsetTop){
			if(pageYOffset >= contact[1].offsetTop || document.body.scrollHeight - (pageYOffset + window.innerHeight) === 0){
				about[0].style = null;
				focus(contact[0]);
			}
			else {
			focus(about[0]);
			contact[0].style = null;
			home[0].style = null;
			}
		}
		if(pageYOffset < about[1].offsetTop){
			about[0].style = null;
			focus(home[0]);
		}
		
		if(pageYOffset >100 && fired == false){
				fired = true;
				test = setInterval(grow, 5);

		}
		if(pageYOffset < 100 && fired == false){
			fired = true;
			test = setInterval(shrink, 5);
		}
		if(pageYOffset <100){
			home[0].style = null; 
		}
	})
	
};
function projectsHover(id, language, year){
	var button = document.getElementById(id);
	var tools = document.getElementById("websiteTools");
	var date = document.getElementById("builtOn");
	button.onmouseover = function(e){
		tools.innerHTML = language;
		date.innerHTML = year;

	}
	setTimeout(function(){
		button.onmouseout = function(e){
			tools.innerHTML = "";
			date.innerHTML = "";
		}
	}, 1600);

}
window.onload = function() {
loadScript();
textAnimation(word);
dash();
smoothScroll(about);
smoothScroll(contact);
smoothScroll(home);
header();
};
