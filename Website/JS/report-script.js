let form = document.querySelector('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let server = document.getElementById("server").value;
    let description = document.getElementById("description").value;
    let checkbox = document.getElementById("followup").checked;

    if (username === '' || email === '' || server === '' || description === '') {
        alert('Please fill in all fields');
        PerformanceObserver
        return;

    } else if (username === '-' || email === '-' || description === '-') {
        alert('Invalid input');
        return;
        
    } else if(email.endsWith('@gmail.com') === false){
        alert('Invalid email address');
        return;

    } else if (email.length < 11) {
        alert('Email is too short, it should be at least 11 characters long');
        return;

    } else if (description.length < 5) {
        alert('Description is too short, it should be at least 5 characters long');
        return;

    } else if (description.length > 500) {
        alert('Description is too long, it should be at most 500 characters long');
        return;

    } 
    // else if (checkbox === false) {
    //     alert('Please check the follow-up box');
    //     return;
    // }

    alert("Report submitted successfully");
    form.reset();
});