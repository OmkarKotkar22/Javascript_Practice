function checkPhone(str){
    let span = document.getElementById("s");

    span.innerHTML = "Please Enter the valid Mobile Number";
    span.style.color = "red";

    if(str.length == 10){

        if(!(str[0] == '6' || str[0] == '7' || str[0] == '8' || str[0] == '9')){
            span.innerHTML = "Mobile Number not follow Indian Code";
            span.style.color = "red";
            return;
        }

        for (let index = 0; index < str.length; index++) {

            let ascii = str.charCodeAt(index);

            if(ascii >= 48 && ascii <= 57){
                continue;
            }
            else{
                span.innerHTML = "Mobile Number must contain numbers only";
                span.style.color = "red";
                return; 
            }
        }

        span.innerHTML = "Mobile number is valid";
        span.style.color = "green";
    }
    else{
        span.innerHTML = "Mobile Number must be 10 digits";
        span.style.color = "red";
    }
}