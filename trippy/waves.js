function loadWaves(){
    
    setTimeout( () => {
        for(var i = 0; i < 40; i++){
            if(i % 3 == 0){
                continue
            }
            if(i % 4 == 0){
                setTimeout( () =>{
                    wrapper("yellow")
                }, 200 * i)
            }else {
                setTimeout( () =>{
                    wrapper("red")
                }, 200 * i)
            }
        }
    }, 1 )

    // setTimeout( () => {
    //     for(var i = 0; i < 2; i++){
    //         setTimeout( () =>{
    //             wrapper("red")
    //         }, 200 * i)
    //     }
    // }, 5000 )
}

function wrapper(color){
    addWaves(color)
    animateWaves()
}


function addWaves(color){
    addBottomWave(color)
    addTopWave(color)
}


function animateWaves(){
    setTimeout(() => {
        animateTopWaves()
    }, 10)
    animateBottomWaves()
}

function addTopWave(color){
    var canvas = document.getElementById("waveTop");
    var child = document.getElementById("waveTemp1");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="waveTopElm"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.backgroundColor = "none"

    cur.style.border = "solid " + color  + " 10px"
    cur.style.borderRadius = "1200px";

    cur.style.top = numToString(height/2);
    cur.style.left ="-200px";
    cur.style.transition = "3s"
    canvas.insertBefore(cur,child);
}

function addBottomWave(color){
    var canvas = document.getElementById("waveBottom");
    var child = document.getElementById("waveTemp2");

    var positionInfo = canvas.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    var cur = document.createElement("div");
    cur.className="waveBottomElm"
    cur.value = "not animated"
    cur.style.position = "absolute";
    cur.style.width = "20px";
    cur.style.height = "20px";

    cur.style.backgroundColor = "none"

    cur.style.border = "solid " + color  + " 10px"
    cur.style.borderRadius = "1200px";

    cur.style.top = numToString(height/2);
    cur.style.right = "-200px";
    cur.style.transition = "3s"
    canvas.insertBefore(cur,child);
}

function animateBottomWaves(){
    var elmList = document.getElementsByClassName("waveBottomElm")
    var len = elmList.length;
    for(var i = 0; i <len; i++){
        var cur = elmList[i];
        if(cur.value == "not animated"){
            cur.style.width = "1200px"
            cur.style.height = "800px"
            cur.style.top = "-300px"
            cur.style.right = "-100px"
            cur.value = "animated"
        }
    }
}


function animateTopWaves(){
    var topList = document.getElementsByClassName("waveTopElm")
    var len = topList.length;
    for(var i = 0; i <len; i++){
        var cur = topList[i];
        if(cur.value == "not animated"){
            cur.style.width = "1200px"
            cur.style.height = "800px"
            cur.style.top = "-300px"
            cur.style.left = "-100px"
            cur.value = "animated"
        }
    }
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
  