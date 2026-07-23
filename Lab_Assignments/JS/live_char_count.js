function show() {
    let text = document.getElementById("char").value;
    let length = text.length;

    document.getElementById("result").innerHTML = "Characters Count :" + length;
}