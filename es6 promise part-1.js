


const promise1 = new Promise( (resolve, reject) => {

    let completedPromise = true;
    if (completedPromise) {
     resolve("completed promise 1");
    }  else {
     reject ("not completed promise 1");
    

    }


});


promise1.then((res) => {
  console.log(res);

});