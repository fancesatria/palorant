let form = document.querySelector('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let server = document.getElementById("server").value;
    let description = document.getElementById("description").value;
    let checkbox = document.getElementById("followup").checked;

    // 1. Validation if form is blank
    if (username === '' || email === '' || server === '' || description === '') {
        alert('Please fill in all fields');
        PerformanceObserver
        return;
    
    // 2. Validation if form is filled with '-'
    } else if (username === '-' || email === '-' || description === '-') {
        alert('Invalid input');
        return;
        
    // 3. email must be ended with @gmail.com
    } else if(email.endsWith('@gmail.com') === false){
        alert('Invalid email address, must be ended with @gmail.com');
        return;

    // 4. Email at least 11 character (a@gmail.com)
    } else if (email.length < 11) {
        alert('Email is too short, it should be at least 11 characters long');
        return;

    // 5. Description content at least contain 5 character
    } else if (description.length < 5) {
        alert('Description is too short, it should be at least 5 characters long');
        return;

    // 6. Description content is less than 500 character
    } else if (description.length > 500) {
        alert('Description is too long, it should be at most 500 characters long');
        return;

    } 
    // else if (checkbox === false) {
    //     alert('Please check the follow-up box');
    //     return;
    // }

    showModal();
    form.reset();
});

function showModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'flex';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}