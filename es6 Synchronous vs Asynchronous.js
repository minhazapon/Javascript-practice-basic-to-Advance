
const taskOne = () => {

console.log("task1");

};

const dataLoading = () => {
   console.log("task2. Data Loading");

};


const taskTwo = () => {

  setTimeout(dataLoading, 2000);

};



const taskThree = () => {

    console.log("task3");
    
};



    
const taskFour = () => {

    console.log("task4");
    
};


    
const taskFive = () => {

    console.log("task5");
    
};


taskOne();
taskThree();
taskFour();
taskFive();
taskTwo();

