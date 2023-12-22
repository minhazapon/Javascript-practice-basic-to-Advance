



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

    
  async function  callAllTask() {

   const t1 = await taskOne();
   console.log(t1);

   const t2 = await taskTwo();
   console.log(t2);

   const t3 = await taskthree();
   console.log(t3);


}




callAllTask();