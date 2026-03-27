
function showForm(){
    let contain = document.getElementById("div");
    contain.innerHTML = "";
    let form = document.createElement("form");
    form.setAttribute("name", "form");
    form.setAttribute("method", "POST");
    form.style.marginTop= "20%";
    form.style.position = "absolute";
    form.style.top = "50%";
    form.style.left = "53%";
    form.style.transform = "translate(-50%, -50%)";
    form.style.background = "white";
    form.style.padding = "20px";
    form.style.borderRadius = "8px";

    let userText = document.createElement("input");
    userText.setAttribute("type", "text");
    userText.setAttribute("name", "in");
    userText.setAttribute("placeholder", "Enter the Name");
    userText.style.padding="8px";
    userText.style.marginBottom="10px";
    
    form.appendChild(userText);
    let newline = document.createElement("br");
    form.appendChild(newline);
    
    let pwd = document.createElement("input");
    pwd.setAttribute("type","password");
    pwd.setAttribute("name", "pwd");
    pwd.setAttribute("placeholder", "Enter Password");
    pwd.style.padding="8px";
    pwd.style.marginBottom="10px";
    
    form.appendChild(pwd);
    newline = document.createElement("br");
    form.appendChild(newline);

    let submit = document.createElement("input");
    submit.setAttribute("type", "button");
    submit.setAttribute("name", "b");
    submit.setAttribute("value", "Submit");
    submit.style.padding="10px";
    submit.style.marginRight="50px";
    form.appendChild(submit);    
    
    let cancel = document.createElement("input");
    cancel.setAttribute("type", "button");
    cancel.setAttribute("name", "b");
    cancel.setAttribute("value", "Cancel");
    cancel.style.padding="10px";

    form.appendChild(cancel);

    contain.appendChild(form);
}

function hideForm(){
    let hideform = document.getElementById("div");
    hideform.innerHTML="";
}