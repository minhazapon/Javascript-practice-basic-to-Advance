



const taskOne = () => {
  return new Promise((resolve, reject) => {
     resolve("task 1 is completed");

  });



};



const taskTwo = () => {
    return new Promise((resolve, reject) => {
       resolve("task 2 is completed");
  
    });
  
  
  
  };


  

const taskthree = () => {
    return new Promise((resolve, reject) => {
       resolve("task 3 is completed");
  
    });
  
  
  
  };


  taskOne()
  .then((res) => console.log(res))
  
  taskTwo()
  .then((res) => console.log(res))
  
  taskthree()
  .then((res) => console.log(res))


