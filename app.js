alert("Welcome to beauty consultant.pk");
var userInput = prompt("Enter your name");
var updatedUserInput = userInput.slice(0,1).toUpperCase() + userInput.slice(1,userInput.length).toLowerCase();
var date = new Date();
var currentTime = date.getHours();
if(currentTime < 12){
    alert("Good Morning " + updatedUserInput);
}
else{
    alert("Good Evening " + updatedUserInput);
}


function readMore(){
   var text = "I've been in this profession since past thirty years. It's my paasion to solve my client's problem. I always try to find solution of my client's queries and serve them keenly. My clients are from all over the world. You can also take my appointment over a phone.";
   var paragraph = document.getElementById("readmore");
   paragraph.innerHTML = text;
}



function changeImage(id , src){
    var clientImage = document.getElementById(id);
    clientImage.src = src;
}


function changeImage2(id , src){
    var clientImage2 = document.getElementById(id);
    clientImage2.src = src; 
}


function appointment(){
    var userInput = prompt("Enter date of your appointment in this (Jan 01 2020) format");
    var d = new Date();
    var dateString = d.toString().slice(4,15);                                                
    if(userInput === dateString){
    alert("Thank you. Your request has been received.")
    }
    else{
    alert("Congratz! You've successfully taken an appointment. We'll contact you soon for further process!")
}
}
