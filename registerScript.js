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

function validateRegistration(){
 

    const password = document.getElementById("passwordReg").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    const isvalid = validatePassword(password);

    if(isvalid==false){
        alert("Password is not valid. Please make sure it has at least 8 characters, one uppercase letter, and one special character.");
        return;
    }

    if(passwordConfirm != password){
        alert("Please enter the same password in both fields!");
        return
    }

    var checkbox = document.getElementById("agreeCheckbox");
    if(!checkbox.checked){
        alert("You have to accept company's Terms and Conditions, in order to Register yourself!");
        return;
    }

    //else if(ischecked == false){
       // alert("You have to agree to the Company's Terms & conditions in order to register!");
       // evennt.preventDefault();
   // }

  
        alert("Registration successfully done.");
    
}

function goToLogin(){
  window.location.href = 'login.html'; 
}