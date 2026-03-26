function show() {
    let input = document.getElementById("taskinput").value;
    let li = document.createElement("li");
    li.textContent = input;

    let btn = document.createElement("button");
    btn.textContent="remove";
    btn.onclick = function (){
        li.remove();
    };
    li.appendChild(btn);
    document.getElementById("list").appendChild(li);
}