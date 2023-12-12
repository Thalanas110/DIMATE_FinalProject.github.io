// clock clock clock hickety clock
function updateClock() 
        {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
        
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
        
            var timeString = hours + ":" + minutes + ":" + seconds;
            document.getElementById("clock").innerHTML = timeString;
        
            setTimeout(updateClock, 1000);
        }
        
        document.addEventListener("DOMContentLoaded", function() 
        {
            updateClock();
        });


// east scroll
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// mobile view
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


// document forms
const scriptURL = 'https://script.google.com/macros/s/AKfycbysRcUIs3KUkABAFTqt1lVt2ESmcdD7RxQYz_6d2R9gsbRu-mxzbeNLylyIHhgkljh5OQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Submitted. Thank you!";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});