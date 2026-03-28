let isValid = false;

function checkPwd(str) {
    isValid = false;

    let span = document.getElementById("msg1");
    
    if(str.length < 8){
        span.innerHTML = "Password Must atleast 8 character";
        span.style.color = "red";
        return;
    }

    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;

    for(let i = 0; i < str.length; i++){
        let ascii = str.charCodeAt(i);
        if(ascii >= 65 && ascii <= 90){
            hasUpper = true; 
        }

        else if(ascii >= 97 && ascii <= 122){
            hasLower = true;
        }

        else if(ascii >= 48 && ascii <= 57){
            hasDigit = true;
        }
        
        else if(str[i] === " "){
            span.innerHTML = "No spaces allowed";
            span.style.color = "red";
            return;
        }

        else{
            hasSpecial = true;
            
        }
    }

    if(!hasUpper){
        span.innerHTML = "Enter Atleast One Uppercase Alphabet";
        span.style.color = "red";
        return;
    }
    if(!hasLower){
        span.innerHTML = "Enter Atleast One Lowercase Alphabet";
        span.style.color = "red";
        return;
    }
    if(!hasDigit){
        span.innerHTML = "Enter Atleast One Digit Alphabet";
        span.style.color = "red";
        return;
    }
    if(!hasSpecial){
        span.innerHTML = "Enter Atleast One Special Character";
        span.style.color = "red";
        return;
    }

    span.innerHTML = "Password is Strong";
    span.style.color = "green";


    isValid = true;
    
}

function submitForm() {
    if(isValid){
        alert("Password Submitted Successfully!");
    }
    else{
        alert("password is wrong!!");
    }
}