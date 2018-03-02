var clear = document.getElementById("clear");
var svg = document.getElementById("board");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");

var id = 0;

var clearIt = function(e){
    clearInterval(id);
    while (svg.hasChildNodes()){
	svg.removeChild(svg.firstChild);
    }
};

var stopIt = function(e){
    clearInterval(id);
};


var dvdMove = function(e){
    svg.innerHTML = "";
    var radius = 10;
    var x = 250;
    var y = 250;
    var xIncrement = 2;
    var yIncrement = 1;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svg.appendChild(c);

    var move = function(e){
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r",radius);
	c.setAttribute("fill","lightsteelblue");
	
	if( x == 500 || x == 0){
	    xIncrement*=-1;
	}
	if ( y == 500 || y == 0 ){
	    yIncrement*=-1;
	}
	x+= xIncrement;
	y+= yIncrement;
    };
    id = setInterval(move,10);
};

var growShrink = function(e){
    svg.innerHTML = "";
    var radius = 10;
    var grow = true;
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",250);
    c.setAttribute("cy",250);
    c.setAttribute("fill","lightsteelblue");
    svg.appendChild(c);
    var growDot = function(e){
	c.setAttribute("r",radius);
	if (grow){
	    radius++;
	    if (radius >= 250){
		grow = false;
	    }
	}
	else {
	    radius--;
	    if (radius <= 0){
		grow = true;
	    }
	}
    }
    id = setInterval(growDot,10);
};

clear.addEventListener("click", clearIt);
stop.addEventListener("click", stopIt);
dvd.addEventListener("click", dvdMove);
circle.addEventListener("click", growShrink);
