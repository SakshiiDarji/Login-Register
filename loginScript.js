function validatePassword(password){
    const minLengthRegex = /.{8,}/;
      const uppercaseRegex = /[A-Z]/;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

      if (
        minLengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        specialCharRegex.test(password)
      ) {
        return true;
      } else {
        return false;
      }
}

function validateLogin(evennt){

    const password = document.getElementById("passwordLogin").value;
    const isvalid = validatePassword(password);
    if(isvalid){
        alert("Loged in successfully.")
    }
    else{
      
      alert("Password is not valid. Please make sure it has at least 8 characters, one uppercase letter, and one special character.");
        evennt.preventDefault();
    }
}


function goToLogin(){
  window.location.href = 'login.html'; 
}


