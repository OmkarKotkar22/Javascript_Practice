// let isValid = false;

// function checkPan(str) {
//     isValid= false;
//     let span = document.getElementById("s");
//     if(str.length != 10){
//         span.innerHTML = "Invalid Length";
//         span.style.color="red";
//         return;
//     }

//     for(let i = 0; i < 5; i++){
//         let ascii = str.charCodeAt(i);
//         if(!((ascii >= 65 && ascii <=90) || (ascii >= 97 && ascii <= 122))){
//             span.innerHTML = "First 5 must be alphabet";
//             span.style.color= "red";
//             return;
//         }
//     }

//     for(let i = 5; i < 8; i++){
//         let ascii = str.charCodeAt(i);
//         if(!(ascii >= 48 && ascii <=57)){
//             span.innerHTML = "Next 4 must be digits";
//             span.style.color = "red";
//         }
//     }

//     let last = str.charCodeAt(9);
//     if(!(last>=65 && last <= 90)){
//         span.innerHTML = "Last must be alphabet";
//         span.style.color = "red";
//         return;
//     }

//     span.innerHTML = "Pan Card Number is Valid";
//     span.style.color= "green";
//     isValid=true;
// }

// function submitForm(){
//     if(isValid){
//         alert("Pan Card Number Submitted");
//     }
//     else{
//         alert("Not valid Pan Number");
//     }
// }

let isValid = false;

function checkPan(str){

    let span = document.getElementById("s");
    isValid = false;

    str = str.toUpperCase(); // ✅ auto uppercase

    // ✅ Length check
    if(str.length != 10){
        span.innerHTML = "PAN must be 10 characters ❌";
        span.style.color = "red";
        return;
    }

    // ✅ First 5 alphabets
    for(let i = 0; i < 5; i++){
        let ch = str.charCodeAt(i);
        if(!(ch >= 65 && ch <= 90)){
            span.innerHTML = "First 5 must be alphabets ❌";
            span.style.color = "red";
            return;
        }
    }

    // ✅ Next 4 digits
    for(let i = 5; i < 9; i++){
        let ch = str.charCodeAt(i);
        if(!(ch >= 48 && ch <= 57)){
            span.innerHTML = "Next 4 must be digits ❌";
            span.style.color = "red";
            return;
        }
    }

    // ✅ Last 1 alphabet
    let last = str.charCodeAt(9);
    if(!(last >= 65 && last <= 90)){
        span.innerHTML = "Last must be alphabet ❌";
        span.style.color = "red";
        return;
    }

    // ✅ Valid
    span.innerHTML = "Valid PAN Card ✅";
    span.style.color = "green";
    isValid = true;
}

function submitForm(){
    if(isValid){
        alert("PAN Submitted Successfully ✅");
    }
    else{
        alert("Invalid PAN ❌");
    }
}
