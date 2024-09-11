document.getElementById("home").addEventListener("click", function(){
    window.location.href="home.html";
});

document.getElementById('menu').addEventListener("click", function(){
    window.location.href="menu.html";
});

document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    var messageElement = document.getElementById("message");
    messageElement.textContent = "Submitting...";

    // Simulate form submission (replace with actual AJAX call)
    setTimeout(function() {
        messageElement.textContent = "Reservation for " + data.name + " confirmed on " + data.date + " at " + data.time + ".";
        document.getElementById("reservationForm").reset();
    }, 2000);
});