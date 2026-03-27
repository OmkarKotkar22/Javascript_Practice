function checkAdhaar(str){
    let span = document.getElementById("s");
    span.innerHTML = "Enter the Valid Adhaar Number";
    if(str.length == 12){
        for (let index = 0; index < str.length; index++) {
            let ascii = str.charCodeAt(index);
            if(ascii >= 48 && ascii <=57){
                if(index == 0 && (str[0] == '0' || str[0] == '1')){
                    span.innerHTML = "Invalid Starting";
                    span.style.color = "red";
                    return;
                }
                continue;
            }
            else{
                span.innerHTML = "Enter only Numbers";
                span.style.color = "red";
            }
        }
        span.innerHTML = "Number is Valid";
        span.style.color = "Green";
    }
    else{
        span.innerHTML = "Enter the Valid Number only ";
        span.style.color="red";
    }
}