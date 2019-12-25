let myImg = document.querySelector('img');

myImg.onclick= function(){
	if(myImg.getAttribute('src') === "images/titleimage.PNG"){
		myImg.setAttribute('src', "images/titleimage2.PNG");
	}else{
		myImg.setAttribute('src', "images/titleimage.PNG");
	}
}

function setUserName(){
	let myName = prompt("Enter your name");
	if(myName === null || myName === "" ){
		setUserName();
	}else{
		localStorage.setItem('name', myName);
		document.querySelector('h1').textContent = "Hello " + myName + "!";
	}
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	let myName = localStorage.getItem('name');
	document.querySelector('h1').textContent = "Hello " + myName + "!";
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;