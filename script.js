var n = document.getElementById("count");
var h = document.getElementById("height");
var result;
// console.log(w);
// console.log(h.value);


function decrease() {
  if(n.innerHTML != 1){
    n.innerHTML--;
  }
  else {
    n.innerHTML = 1;
  }
}



function increase() {
    n.innerHTML++;
}



function validate() {
  if(!h.value || h.value < 1){
        document.getElementById("err-msg").style.opacity = 1;
  }
  else{
        document.getElementById("err-msg").style.opacity = 0;
        calculate();
        finalResult();
  }
}



function calculate() {
  var w = document.getElementById("count").innerHTML;
  // console.log(h.value);
  // console.log(w);
  var originalResult = w / ((h.value/100) * (h.value/100));
  var result = originalResult.toFixed(2);
  return result;
  // console.log(result);
}

function finalResult() {
  if(calculate() < 18.5) {
    document.getElementById("index-number-low").innerHTML = calculate();
    document.getElementById("low-feedback").style.transform = "translateY(-225%)";
    document.getElementById("cal-btn").style.display="none";
    document.getElementById("cal-btn-revert").style.display="block";
  } 

  else if (calculate() >= 25 && calculate() <= 29.9){
    document.getElementById("index-number-ow").innerHTML = calculate();
    document.getElementById("ow-feedback").style.transform = "translateY(-425%)";
    document.getElementById("cal-btn").style.display="none";
    document.getElementById("cal-btn-revert").style.display="block";
  }
    
  else if(calculate() >=30) {
    document.getElementById("index-number-high").innerHTML = calculate();
    document.getElementById("high-feedback").style.transform = "translateY(-325%)";
    document.getElementById("cal-btn").style.display="none";
    document.getElementById("cal-btn-revert").style.display="block";
  } 
  else {
    document.getElementById("index-number-normal").innerHTML = calculate();
    document.getElementById("positive-feedback").style.transform = "translateY(-125%)";
    document.getElementById("cal-btn").style.display="none";
    document.getElementById("cal-btn-revert").style.display="block";
  }
}

function revert(){
  document.getElementById("cal-btn").style.display="block";
  document.getElementById("cal-btn-revert").style.display="none";

  if(calculate() < 18.5) {
    document.getElementById("low-feedback").style.transform = "translateY(300%)";
  } 
    else if (calculate() >= 25 && calculate() <= 29.9){
    document.getElementById("ow-feedback").style.transform = "translateY(300%)";
  }
    else if(calculate() >= 30) {
    document.getElementById("high-feedback").style.transform = "translateY(300%)";
  } 
  else {
    document.getElementById("positive-feedback").style.transform = "translateY(300%)";
  }
  
}

function infoExpand() {
  document.getElementById("info").style.transform = "translateY(-100%)";
  document.getElementById("info-expand").style.display = "none";
  document.getElementById("info-collapse").style.display = "block";
}

function infoCollapse() {
  document.getElementById("info").style.transform = "translateY(-320%)";
  document.getElementById("info-collapse").style.display = "none";
  document.getElementById("info-expand").style.display = "block";
}
