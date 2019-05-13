var sticks = 0;

function stickClick(number){
    sticks = sticks + number;
    document.getElementById("sticks").innerHTML = sticks;
};

var axes = 0;

function buyAxe(){
    var axeCost = Math.floor(10 * Math.pow(1.1,axes));     //works out the cost of this axe
    if(sticks >= axeCost){                                   //checks that the player can afford the axe
        axes = axes + 1;                                   //increases number of axes
    	sticks = sticks - axeCost;                          //removes the sticks spent
        document.getElementById('axes').innerHTML = axes;  //updates the number of axes for the user
        document.getElementById('sticks').innerHTML = sticks;  //updates the number of sticks for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,axes));       //works out the cost of the next axe
    document.getElementById('axeCost').innerHTML = nextCost;  //updates the axe cost for the user
};

window.setInterval(function(){
	
	stickClick(axes);
	
}, 100);

};

var axes = 0;

function buyAxe(){
    var axeCost = Math.floor(10 * Math.pow(1.1,axes));     //works out the cost of this axe
    if(sticks >= axeCost){                                   //checks that the player can afford the axe
        axes = axes + 1;                                   //increases number of axes
    	sticks = sticks - axeCost;                          //removes the sticks spent
        document.getElementById('axes').innerHTML = axes;  //updates the number of axes for the user
        document.getElementById('sticks').innerHTML = sticks;  //updates the number of sticks for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,axes));       //works out the cost of the next axe
    document.getElementById('axeCost').innerHTML = nextCost;  //updates the axe cost for the user
};

window.setInterval(function(){
	
	stickClick(axes);
	
}, 900);

};

var chainsaws = 0;

function buyChainsaw(){
    var chainsawCost = Math.floor(10 * Math.pow(1.1,chainsaws));     //works out the cost of this axe
    if(sticks >= chainsawCost){                                   //checks that the player can afford the axe
        chainsaws = chainsaws + 1;                                   //increases number of axes
    	sticks = sticks - chainsawCost;                          //removes the sticks spent
        document.getElementById('axes').innerHTML = chainsaw;  //updates the number of axes for the user
        document.getElementById('sticks').innerHTML = sticks;  //updates the number of sticks for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,chainsaws));       //works out the cost of the next axe
    document.getElementById('chainsawCost').innerHTML = nextCost;  //updates the axe cost for the user
};

window.setInterval(function(){
	
	stickClick(chainsaws);
	
}, 500);

