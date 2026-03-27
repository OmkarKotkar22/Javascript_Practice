let isValid = false; // ✅ global flag

function checkPhone(str){
    let span = document.getElementById("s");

    isValid = false; // reset every time

    // 1. Length check
    if(str.length != 10){
        span.innerHTML = "Mobile number must be exactly 10 digits";
        span.style.color = "red";
        return;
    }

    // 2. First digit check
    if(!(str[0]=='6' || str[0]=='7' || str[0]=='8' || str[0]=='9')){
        span.innerHTML = "Mobile number must start with 6, 7, 8, or 9";
        span.style.color = "red";
        return;
    }

    // 3. Digit check
    for(let i = 0; i < str.length; i++){
        let ascii = str.charCodeAt(i);

        if(ascii < 48 || ascii > 57){
            span.innerHTML = "Only digits (0-9) are allowed";
            span.style.color = "red";
            return;
        }
    }

    // ✅ valid
    span.innerHTML = "Valid mobile number";
    span.style.color = "green";
    isValid = true; // ✅ mark valid
}


// 🔥 Submit button
function submitForm(){
    if(isValid){
        alert("Form Submitted Successfully ✅");
    }
    else{
        alert("Please enter a valid mobile number ❌");
    }
}