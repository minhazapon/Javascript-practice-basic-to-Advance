

function square (x){

console.log(`square of ${x}: ${x * x}`);
}




function higherOrderFunction (num, callback){

   
callback (num);


}

higherOrderFunction(6, square);