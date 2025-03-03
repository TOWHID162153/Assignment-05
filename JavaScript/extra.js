// Clear History
document.getElementById("clearHistory").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("notifications").innerText= ``;
})


// Random BG  
const button = document.getElementById("body-color-change");
button.addEventListener('click', function randomBgColor(){
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
   } );

// Goto the anotherWorld page

