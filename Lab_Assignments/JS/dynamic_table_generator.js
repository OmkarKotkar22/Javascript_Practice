function addData(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.textContent = name;
    td2.textContent = age;
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById("table").appendChild(tr);

}