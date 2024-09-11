//Menu

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('menu');

    if (button) {
        button.addEventListener('click', function() {

            window.location.href = 'menu.html';
        });
    }
});

//Typing Feature

const headingText = "Welcome To Bombay Bites! "; // Your heading text
const typingSpeed = 100; // Typing speed in milliseconds
const headingElement = document.getElementById("type");
 
let i = 0;
function typeWriter() {
  if (i < headingText.length) {
    headingElement.innerHTML += headingText.charAt(i);
    i++;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Call the function to start typing the heading when the window loads
window.onload = function() {
  typeWriter();
};


//Reservations

// Get reference to the button element
var reservationButton = document.getElementById("reservation");

// Add event listener to the button
reservationButton.addEventListener("click", function() {
    // Redirect to registration.html when button is clicked
    window.location.href = "reservation.html";
});

//Gallery

document.getElementById('gallery').addEventListener("click", function(){
  window.location.href="gallery.html";
});



//About

document.getElementById("about").addEventListener("click", function(){
  window.location.href="about.html";
});