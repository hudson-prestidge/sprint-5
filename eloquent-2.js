//Looping a Triangle
var output = '';
for (var i = 0; i < 7; i++){
  output += '#';
  console.log(output);
};

//FizzBuzz

for(var i = 1; i <= 100; i++){
  var output = "";
    if(i % 3 == 0){
      output+="Fizz";  
    }if(i % 5 == 0){
      output+="Buzz";  
    }if(output === ""){
    output = i;
    } console.log(output);
}

//Chess Board

var size = 12;
var output = "";
var isCross = false;
var lineStartsWithCross = false;

for (var i = 0; i < size; i++){
  isCross = lineStartsWithCross;
  for(var j = 0; j < size; j++){
    if (isCross){
      output += "#";
    } else {
      output += " ";
    } isCross = !isCross;
  }output += "\n";
  lineStartsWithCross= !lineStartsWithCross;
}console.log(output);