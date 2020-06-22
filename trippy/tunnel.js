function loadTunnel(){
    for(var i = 0; i < 30; i++){
        setTimeout(() => {
            animateTunnel()
            addTunnel()
        }, i * 400)
    }
    
      
}

function animateTunnel(){
    animateTopRightTunnel()
    animateMidRightTunnel()
    animateBottomRightTunnel()

    animateTopLeftTunnel()
    animateMidLeftTunnel()
    animateBottomLeftTunnel()
}


function addTunnel(){
    addTopLeftTunnel()
    addMidLeftTunnel()
    addBottomLeftTunnel()

    addTopRightTunnel()
    addMidRightTunnel()
    addBottomRightTunnel()
}

function addTopRightTunnel(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="tunnelElmTR"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.background = "linear-gradient(#4dfffc, #2ac9c7,#057d7b)";

    cur.style.border = "solid black 0px"

    cur.style.borderRadius = "1200px";

    cur.style.top = numToString((height/2 - 20));
    cur.style.right = numToString((width/2) - 20);
    cur.style.transition = "7s"
    canvas.insertBefore(cur,child);
}

function addMidRightTunnel(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="tunnelElmMR"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.background = "linear-gradient(#057d7b,#025755,#003254,#025755,#057d7b)";

    cur.style.border = "solid black 0px"

    cur.style.borderRadius = "1200px";

    cur.style.top = numToString((height/2 - 20));
    cur.style.right = numToString((width/2) - 20);
    cur.style.transition = "7s"
    canvas.insertBefore(cur,child);
}


function addBottomRightTunnel(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="tunnelElmBR"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.background = "linear-gradient(#057d7b,#057d7b,#2ac9c7)";

    cur.style.border = "solid black 0px"

    cur.style.borderRadius = "1200px";

    cur.style.bottom = numToString((height/2 - 20));
    cur.style.right = numToString((width/2) - 20);
    cur.style.transition = "7s"
    canvas.insertBefore(cur,child);
}

function addTopLeftTunnel(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="tunnelElmTL"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.background = "linear-gradient(#ea00ff, #73027d, #5a027d)";


    cur.style.border = "solid black 0px"

    cur.style.borderRadius = "1200px";

    cur.style.top = numToString((height/2 - 20));
    cur.style.left = numToString((width/2) - 20);
    cur.style.transition = "7s"
    canvas.insertBefore(cur,child)
}

function addMidLeftTunnel(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="tunnelElmML"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.background = "linear-gradient(#5a027d, #2c0052, #230b38 ,#2c0052, #5a027d)";

    cur.style.border = "solid black 0px"

    cur.style.borderRadius = "1200px";

    cur.style.top = numToString((height/2 - 20));
    cur.style.left = numToString((width/2) - 20);
    cur.style.transition = "7s"
    canvas.insertBefore(cur,child)
}

function addBottomLeftTunnel(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="tunnelElmBL"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.background = "linear-gradient(#5a027d, #73027d, #ea00ff)";

    cur.style.border = "solid black 0px"

    cur.style.borderRadius = "1200px";

    cur.style.bottom = numToString((height/2 - 20));
    cur.style.left = numToString((width/2) - 20);
    cur.style.transition = "7s"
    canvas.insertBefore(cur,child)
}

function animateTopRightTunnel(){
    var elmList = document.getElementsByClassName("tunnelElmTR")
    var len = elmList.length;
    let screenSize = getScreenInfo()
    let newRight = (screenSize[0] + 100) * -1
    for(var i = 0; i <len; i++){
        
        var cur = elmList[i]
        if(cur.value == "not animated"){
            cur.style.width = "200px"
            cur.style.height = "200px"
            cur.style.right = "-150px"
            cur.style.top = "-50px"
            cur.value = "animated"
        }
        
    }
}

function animateMidRightTunnel(){
    var elmList = document.getElementsByClassName("tunnelElmMR")
    var len = elmList.length;
    let screenSize = getScreenInfo()
    let height = screenSize[1]
    for(var i = 0; i <len; i++){
        
        var cur = elmList[i]
        if(cur.value == "not animated"){
            cur.style.width = "200px"
            cur.style.height = "200px"
            cur.style.right = "-150px"
            cur.style.top = numToString((height/2 - 100))
            cur.value = "animated"
        }
        
    }
}

function animateBottomRightTunnel(){
    var elmList = document.getElementsByClassName("tunnelElmBR")
    var len = elmList.length;
    let screenSize = getScreenInfo()
    let newRight = (screenSize[0] + 100) * -1
    for(var i = 0; i <len; i++){
        
        var cur = elmList[i]
        if(cur.value == "not animated"){
            cur.style.width = "200px"
            cur.style.height = "200px"
            cur.style.right = "-150px"
            cur.style.bottom = "-50px"
            cur.value = "animated"
        }
        
    }
}


function animateTopLeftTunnel(){
    var elmList = document.getElementsByClassName("tunnelElmTL")
    var len = elmList.length;
    let screenSize = getScreenInfo()
    let newRight = screenSize[0] + 100
    for(var i = 0; i <len; i++){
        
        var cur = elmList[i]
        if(cur.value == "not animated"){
            cur.style.width = "200px"
            cur.style.height = "200px"
            cur.style.left = "-150px"
            cur.style.top = "-50px"
            cur.value = "animated"
        }
        
    }
}

function animateMidLeftTunnel(){
    var elmList = document.getElementsByClassName("tunnelElmML")
    var len = elmList.length;
    let screenSize = getScreenInfo()
    let height = screenSize[1]
    for(var i = 0; i <len; i++){
        
        var cur = elmList[i]
        if(cur.value == "not animated"){
            cur.style.width = "200px"
            cur.style.height = "200px"
            cur.style.left = "-150px"
            cur.style.top = numToString((height/2 - 100))
            cur.value = "animated"
        }
        
    }
}

function animateBottomLeftTunnel(){
    var elmList = document.getElementsByClassName("tunnelElmBL")
    var len = elmList.length;
    let screenSize = getScreenInfo()
    let newRight = (screenSize[0] + 100) * -1
    for(var i = 0; i <len; i++){
        
        var cur = elmList[i]
        if(cur.value == "not animated"){
            cur.style.width = "200px"
            cur.style.height = "200px"
            cur.style.left = "-150px"
            cur.style.bottom = "-50px"
            cur.value = "animated"
        }
        
    }
}




function getScreenInfo(){
    var canvas = document.getElementById("tunnelCanvas");
    var child = document.getElementById("tunnelTemp");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    return [width,height]
}


function numToString(i){
    var rv = i.toString();
    rv += "px";
    return rv;
}
  
function stringToNum(metric){
    var strLength = metric.length
    var res = metric.substring(0, strLength-2);
    return parseInt(res)
}
  