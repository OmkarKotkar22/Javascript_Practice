// function user(str) {
//     let span = document.getElementById("alert");
//     if(str.length == 0){
//         span.innerHTML="Enter the Valid Name";
//         span.style.color="red";
//     }
//     else{
//         let flag = false;
//         for(let i = 0; i < str.length; i++){
//             let ascii = str.charCodeAt(i);
//             if(!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))){
//                 flag = true;
//                 break;
//             }
//         }
//         if(flag){
//             span.innerHTML = "Not another Character Allowed";
//             span.style.color="red";
//         }
//         else{
//             span.innerHTML = "Valid Name";
//             span.style.color="green";
//         }
//     }
// }

function user(str){

    let span = document.getElementById("alert");

    // ✅ Trim spaces
    str = str.trim();

    // ❌ Empty check
    if(str.length == 0){
        span.innerHTML = "Name cannot be empty ❌";
        span.style.color = "red";
        return;
    }

    // ❌ Only alphabets check
    for(let i = 0; i < str.length; i++){

        let ascii = str.charCodeAt(i);

        // allow space between names
        if(str[i] == " ") continue;

        if(!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))){
            span.innerHTML = "Only alphabets allowed ❌";
            span.style.color = "red";
            return;
        }
    }

    // ❌ Multiple spaces check
    if(str.includes("  ")){
        span.innerHTML = "Multiple spaces not allowed ❌";
        span.style.color = "red";
        return;
    }

    // ✅ Valid
    span.innerHTML = "Valid Name ✅";
    span.style.color = "green";
}