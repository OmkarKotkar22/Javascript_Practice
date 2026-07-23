// let isValid = false; // ✅ global flag

// function checkPhone(str){
//     let span = document.getElementById("s");

//     isValid = false; // reset every time

//     // 1. Length check
//     if(str.length != 10){
//         span.innerHTML = "Mobile number must be exactly 10 digits";
//         span.style.color = "red";
//         return;
//     }

//     // 2. First digit check
//     if(!(str[0]=='6' || str[0]=='7' || str[0]=='8' || str[0]=='9')){
//         span.innerHTML = "Mobile number must start with 6, 7, 8, or 9";
//         span.style.color = "red";
//         return;
//     }

//     // 3. Digit check
//     for(let i = 0; i < str.length; i++){
//         let ascii = str.charCodeAt(i);

//         if(ascii < 48 || ascii > 57){
//             span.innerHTML = "Only digits (0-9) are allowed";
//             span.style.color = "red";
//             return;
//         }
//     }

//     // ✅ valid
//     span.innerHTML = "Valid mobile number";
//     span.style.color = "green";
//     isValid = true; // ✅ mark valid
// }


// // 🔥 Submit button
// function submitForm(){
//     if(isValid){
//         alert("Form Submitted Successfully ✅");
//     }
//     else{
//         alert("Please enter a valid mobile number ❌");
//     }
// }

let isValid = false;

function checkPhone(str){

    let span = document.getElementById("s");
    isValid = false;

    // ✅ Empty check
    if(str.length == 0){
        span.innerHTML = "Please enter mobile number";
        span.style.color = "red";
        return;
    }

    // ✅ Length check
    if(str.length != 10){
        span.innerHTML = "Must be exactly 10 digits";
        span.style.color = "red";
        return;
    }

    // ✅ First digit check
    if(!(str[0]=='6' || str[0]=='7' || str[0]=='8' || str[0]=='9')){
        span.innerHTML = "Must start with 6, 7, 8, or 9";
        span.style.color = "red";
        return;
    }

    // ✅ Digit check
    for(let i=0;i<str.length;i++){
        let ascii = str.charCodeAt(i);

        if(ascii < 48 || ascii > 57){
            span.innerHTML = "Only numbers allowed";
            span.style.color = "red";
            return;
        }
    }

    // ✅ Valid
    span.innerHTML = "Valid mobile number ✅";
    span.style.color = "green";
    isValid = true;
}

function submitForm(){

    let value = document.getElementById("mob").value;

    if(value.length == 0){
        alert("Please enter mobile number ❌");
        return;
    }

    if(isValid){
        alert("Form Submitted Successfully ✅");
    }
    else{
        alert("Invalid Mobile Number ❌");
    }
}
