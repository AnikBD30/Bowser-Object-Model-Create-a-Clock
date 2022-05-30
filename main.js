// JS BOM 
// Popup boxes - alert, confirm , prompt 
// console.log(window); 
// alert('error here'); 

/*
function delateSomething(){
	let value = confirm('Are you Sure');
	if(value){
		console.log('Deleted')
	}else{
		console.log('Not Deleted')
	}
}
delateSomething()
*/
/*
function welcomeMessage(){
	var h1 = document.createElement('h1'); 
	let text; 
	var name = prompt('Enter your Name'); 
	if(name == null || name == ""){
		text = 'No Name found'
	}else{
		text = "Welcome " + name;  
	}
	var textNode = document.createTextNode(text);
	h1.appendChild(textNode)
	document.body.appendChild(h1); 
}
welcomeMessage(); 

*/
//JS Timing events methods 
//SetTimeOut(), setInterval()
/*
setTimeout(() =>{
  console.log('Hi HOW are you ')
}, 2000)

setTimeout(display, 2000); 
function display(){
	console.log('display function'); 
}*/
/*
const saveButton = document.querySelector(".save_btn"); 
const message = document.querySelector('.message'); 
saveButton.addEventListener("click", saveUser); 

function saveUser(){
	message.textContent = "User registration successful"; 

}
setTimeout(() => {
	message.textContent = " "; 
}, 2000); 
*/

/*
const saveButton = document.querySelector(".save_btn"); 
const message = document.querySelector('.message'); 
saveButton.addEventListener('click', displayCount); 
function displayCount(){
	let count = 0; 
	message.textContent = count; 
	setInterval(() => {
		count++; 
		message.textContent = count;
	}, 1000); 
}
*/
const saveButton = document.querySelector(".save_btn"); 
const message = document.querySelector('.message'); 

saveButton.addEventListener('click', startClock ); 


function startClock(){
	let date = new Date(); 
	let hours = date.getHours(); 
	let minutes = date.getMinutes(); 
	let seconds = date.getSeconds();
	minutes = formatTime(minutes); 
	seconds = formatTime(seconds); 
	let time = hours + ":" + minutes + ":" + seconds; 
	message.textContent = time; 
    setInterval(startClock,1000); 
}
function formatTime(value){
	if(value<10){
		value = "0" + value; 
	}
	return value; 

}