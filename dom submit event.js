

const form = document.querySelector("form");

const email = form.querySelector("div #email");
const password = form.querySelector("div #password");



form.addEventListener("submit", formHandler);


function formHandler (e){

e.preventDefault();
console.log("submit");


}