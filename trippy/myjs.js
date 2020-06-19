function load(){

  var canvas = document.getElementById("mycanvas");
  var positionInfo = canvas.getBoundingClientRect();
  var height = positionInfo.height;
  var width = positionInfo.width;

  let screenMidX = (width/2)
  let screenMidY = (height/2)
  let increment = 5
  let start = 0
  let count = 0;
  var colorFlag = true
  var altFlag = false

  for(i = 0; i < 100; i++){
    setTimeout(() => {
      let emod = count % 8
      console.log("i - " + i)
      console.log("emod - " + emod)
      if(emod == 0){
          colorFlag = !colorFlag
      }
      runOne(start, screenMidX, screenMidY, increment, colorFlag)
      runAll(screenMidX, screenMidY, increment)
      count++
    }, i * 1000);
  }
}

function expandOld(){
  var elmList = document.getElementsByClassName("animElm")
  var len = elmList.length;
  for(var i = 0; i <len; i++){
    var cur = elmList[i];
    cur.style.top = numToString(parseInt(cur.style.top) + 25);
    cur.style.left = numToString(parseInt(cur.style.left) + 25);
    cur.style.transform = "rotate(45deg)";
    var curVal = cur.value
  }
}

function runOne(start, screenMidX, screenMidY, increment, color){

  var canvas = document.getElementById("mycanvas");
  var child = document.getElementById("temp");

  var xyArr = calcPlacement(start,screenMidX, screenMidY, increment)
  var cur = document.createElement("div");
  cur.className="animElm"
  cur.value = start
  cur.style.position = "absolute";
  cur.style.width = "20px";
  cur.style.height = "20px";

  (color) ? cur.style.backgroundColor = "blue" : cur.style.backgroundColor = "green";

  cur.style.border = "solid black 2px"

  cur.style.top = numToString(xyArr[1]);
  cur.style.left = numToString(xyArr[0]);
  cur.style.transition = "1s"
  canvas.insertBefore(cur,child);
}

function runAll(screenMidX, screenMidY, increment){
  var elmList = document.getElementsByClassName("animElm")
  var len = elmList.length;
  for(var i = 0; i <len; i++){
    var cur = elmList[i];
    var currentVal = parseInt(cur.value)
    xyArr = calcPlacement(currentVal,screenMidX, screenMidY, increment)
    var sizeOffset = stringToNum(cur.style.width)/2
    cur.style.top = numToString(xyArr[1] - sizeOffset);
    cur.style.left = numToString(xyArr[0] - sizeOffset);
    cur.value = currentVal + 1
    var size = stringToNum(cur.style.width)
    size += 1
    console.log("size int = " + size)
    cur.style.width = numToString(size)
    cur.style.height = numToString(size)
    var degree = (currentVal * 45)
    cur.style.transform = "rotate("+degree+"deg)";
  }
}

// i is the growth rate
function calcPlacement(counter, screenMidX, screenMidY, i){

  let x = (counter * i)
  let y = (counter * i)
  let pyX = (x/2) + (x/4)
  //always going to be 5 planes
  let offset = 8
  let plane = counter % offset
  if(plane == 0) {
    var pyY = pyagarins(x,pyX)
    return [screenMidX + (pyX), screenMidY + pyY]

  }else if (plane == 1){
    return [screenMidX, screenMidY + y]

  }else if (plane == 2){
    var pyY = pyagarins(x,pyX)
    return [screenMidX - (pyX), screenMidY + pyY]

  }else if (plane == 3){
    return [screenMidX + ( x * -1 ), screenMidY]

  }else if(plane == 4){
    var pyY = pyagarins(x,pyX)
    return [ screenMidX - ( pyX ), screenMidY - pyY]

  }else if(plane == 5){
    return [ screenMidX, screenMidY + (-1 * y)]

  }else if (plane == 6){
    var pyY = pyagarins(x,pyX)
    return [ screenMidX + (pyX), screenMidY - pyY]
  }else{
    return [screenMidX + x, screenMidY]
  }
}

function pyagarins(distance, foot){
  csquare = distance * distance
  asquare = foot * foot
  return Math.sqrt(csquare - asquare)
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
