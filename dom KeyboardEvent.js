

const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", function(){

  console.log("keydown");

})


textarea.addEventListener("keypress", function(){

    console.log("keypress");
  
  })



  textarea.addEventListener("keyup", function(){

    console.log("keyup");
  
  })