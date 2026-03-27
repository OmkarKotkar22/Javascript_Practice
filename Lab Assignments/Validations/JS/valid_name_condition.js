function pwdValidate(str){
    let span = document.getElementById("s");
    if(str.length == 0){
        span.innerHTML= "Name should follow all Condition";
        span.style.color="red";
    }
    else{
        let dcount = 0, smalpha = 0, lgalpha = 0, spcount = 0;
        for(let i = 0; i < str.length; i++){
            let ascii = str.charCodeAt(i);
            if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)){
                ++smalpha;
                ++lgalpha;
            }
            else if(ascii>=48 && ascii <=57){
                ++dcount;
            }
            else{
                ++spcount;
            }
        }
        if(dcount>=1 && smalpha >= 1 && lgalpha >= 1 && spcount >= 1 && str.length >=8){
            span.innerHTML="Strong Password";
            span.style.color="Green";
        }
        else{
            span.innerHTML="Weak Password";
            span.style.color="red";

        }
    }
}