function submitAndValidateForm(){
    nameReg = /^[a-zA-Z]*$/;
    emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    passwordReg = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    firstNameValue = document.getElementById('firstName').value;
    lastNameValue = document.getElementById('lastName').value;
    emailValue = document.getElementById('email').value;
    passwordValue = document.getElementById('password').value;

    if(firstNameValue.length < 1 || !nameReg.test(firstNameValue)) {
        alert('Please enter first name and only characters are allowed between a-z');
        return false;
    }

    if(lastNameValue.length < 1  || !nameReg.test(lastNameValue)) {
        alert('Please enter last name and only characters are allowed between a-z');
        return false;
    }

    if(emailValue.length < 1 || !emailReg.test(emailValue)) {
        alert('Please enter a valid email id');
        return false;
    }
    if(!passwordReg.test(passwordValue)) {
        alert('Password must be of 8 characters and must contain 1 number');
        return false;
    }

    alert('Form data is valid');
}
