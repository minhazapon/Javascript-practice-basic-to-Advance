

saveButton.addEventListener("click", startClock);


function startClock() {

 let date = new Date ();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();

 let time = hours + ":" + minutes + ":" + seconds;

 Message.textContent = time;


setInterval(startClock, interval);

}