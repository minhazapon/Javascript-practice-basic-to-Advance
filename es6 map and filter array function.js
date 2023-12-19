

//map

var numbers = [2, 3, 4, 5]

var squareNumbers = numbers.map(function(x){

  return x*x;

})

console.log(squareNumbers)
console.log(numbers)

//filter

var numbers = [22, 31, 4, 5, 35, 26, 78]

var newNumbers = numbers.filter(function(x){

  return x>10;

})

console.log(newNumbers)
console.log(numbers)