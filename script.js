let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#login').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
  }
  
  document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
  }
  
  window.onscroll = () =>{
  
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
    }else{
      document.querySelector('.header').classList.remove('active');
    };
  
  };




  const form = document.getElementById('form');
const username = document.getElementById('username');

const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mobile = document.getElementById('mobile');
const lastname = document.getElementById('lastname');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 
   
const validateInputs = () => {
    const usernameValue = username.value.trim();
    
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const mobileValue = mobile.value.trim();
    const lastnameValue = lastname.value.trim();
   

    if(usernameValue === '') {
        setError(username, 'first name is required');
    } else {
        setSuccess(username);
    }
    
    

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (!passwordValue.match(passw)) {
        setError(password, 'Password must be at least 8 character and start with uppercase letter and contain one special character .')
    } 
     else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }
    if(mobileValue === '') {
        setError(mobile, 'mobile number is required');
    } else if (mobileValue.length > 11 || mobileValue.length < 11 ) {
        setError(mobile, 'mobile number must be 11 digit.')
    } else {
        setSuccess(mobile);
    }
    if(lastnameValue === '') {
        setError(lastname, 'last name is required');
    } else {
        setSuccess(lastname);
    }
    
    


};
