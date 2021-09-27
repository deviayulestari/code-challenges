//no 1
function rand(min, max) {
  if(min == null &&  max == null){
      return 0;
  }else if(max == null){
      max = min;
      min = 0
  }

  return Math.floor((Math.random() * max) + min);
}


console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());


//no 2
function chooseDecimals(n, d) {
if((typeof n !== "number") || (typeof d !== "number")){
  return false;
}else {
  n = parseFloat(n) || 0;
  return n.toFixed(d);
}
}


console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));


//no 3
function isItNumeric(n) {
  if(n == " "){
      return false;
  }
  return  !(isNaN(n));
}

console.log(isItNumeric(12));
console.log(isItNumeric('abcd'));
console.log(isItNumeric('12'));
console.log(isItNumeric(' '));
console.log(isItNumeric(1.20));
console.log(isItNumeric(-200));


//no 4
function roundUpToFive(num) {
  return Math.ceil(num/5)*5;
}

console.log(roundUpToFive(32));
console.log(roundUpToFive(137));
console.log(roundUpToFive(142));