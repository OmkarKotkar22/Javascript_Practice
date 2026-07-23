// function checkAdhaar(str){
//     let span = document.getElementById("s");
//     span.innerHTML = "Enter the Valid Adhaar Number";
//     if(str.length == 12){
//         for (let index = 0; index < str.length; index++) {
//             let ascii = str.charCodeAt(index);
//             if(ascii >= 48 && ascii <=57){
//                 if(index == 0 && (str[0] == '0' || str[0] == '1')){
//                     span.innerHTML = "Invalid Starting";
//                     span.style.color = "red";
//                     return;
//                 }
//                 continue;
//             }
//             else{
//                 span.innerHTML = "Enter only Numbers";
//                 span.style.color = "red";
//             }
//         }
//         span.innerHTML = "Number is Valid";
//         span.style.color = "Green";
//     }
//     else{
//         span.innerHTML = "Enter the Valid Number only";
//         span.style.color="red";
//     }
// }

function checkAdhaar(str){
    let span = document.getElementById("s");

    span.innerHTML = "Enter the Valid Aadhaar Number";
    span.style.color = "orange";

    if(str.length == 12){

        for (let index = 0; index < str.length; index++) {

            let ascii = str.charCodeAt(index);

            // ✅ Only digits check
            if(ascii >= 48 && ascii <= 57){

                // ❌ First digit cannot be 0 or 1
                if(index == 0 && (str[0] == '0' || str[0] == '1')){
                    span.innerHTML = "Invalid Starting Digit (0 or 1 not allowed)";
                    span.style.color = "red";
                    return;
                }

                continue;
            }
            else{
                span.innerHTML = "Only numbers allowed";
                span.style.color = "red";
                return;
            }
        }

        // ✅ Valid
        span.innerHTML = "Aadhaar Number is Valid ✅";
        span.style.color = "green";
    }
    else{
        span.innerHTML = "Aadhaar must be exactly 12 digits ❌";
        span.style.color = "red";
    }
}
