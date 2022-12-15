
var start= new Date().getTime();

//funtion to display shape in random size,positon and color
function makeShapeAppear(){
    var top= Math.random() * 400;
    var left= Math.random() * 1250;
    var width = Math.random() *150 + 50;
    document.getElementById("shape").style.display="block";
    start= new Date().getTime();

    document.getElementById("shape").style.top= top+"px";
    document.getElementById("shape").style.left= left+"px";
    document.getElementById("shape").style.width= width+"px";
    document.getElementById("shape").style.height= width+"px";

    //changing the shape to circle;
    if(Math.random()>0.5){
        document.getElementById("shape").style.borderRadius= "50%";
    }else{
        document.getElementById("shape").style.borderRadius= "0";
    }

    //changing the shape color randomly
    document.getElementById("shape").style.backgroundColor= randomColor();
}

//function to get random color

function randomColor(){
    var letter="0123456789ADCDEF".split("");

    var color="#";

    for(let i=0; i<6; i++){
        color+=letter[Math.floor( Math.random()*16)];
    }

    return color;
}


//function to display shape in random delay

function appearAfterDelay(){
    setTimeout(makeShapeAppear,Math.random() * 1000);
}

appearAfterDelay();

//disapper the shape on click

var bestTimetaken= 10;

document.getElementById("shape").onclick= function(){
    document.getElementById("shape").style.display="none";

    var end= new Date().getTime();
    var timeTaken= (end-start)/1000 ;//to display in seconds

    //display time
    document.getElementById("timeTaken").innerHTML= timeTaken;
   
    if(bestTimetaken> timeTaken){
        document.getElementById("bestTime").innerHTML=timeTaken;
        bestTimetaken=timeTaken;
    }

    appearAfterDelay();

    //play audio
    document.getElementById("audio").play();
}

function refreshTime(){
    window.location.reload();
}





