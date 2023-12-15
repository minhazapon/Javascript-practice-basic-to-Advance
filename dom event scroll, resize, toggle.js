


window.addEventListener("load", function (){

console.log("load");

});


window.addEventListener("unload", function (){

    console.log("unload");
});


window.addEventListener("scroll", function (){

  console.log("scroll");

});


window.addEventListener("resize", function (){

  console.log("resize");

});

const detauils = document.querySelector("details");


detauils.addEventListener("toggle", function(){

  console.log("toggle");

});
