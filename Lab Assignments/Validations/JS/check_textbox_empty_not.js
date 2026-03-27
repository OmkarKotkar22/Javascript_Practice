function checktxt() {
    let check = document.getElementById("txt").value;
    let span = document.getElementById("s");

    if(check.length == 0){
        span.innerHTML = "TextBox is Empty";
        span.style.color = "red";
    }
    else{
        span.innerHTML=check;
        span.style.color="green";
    }

}