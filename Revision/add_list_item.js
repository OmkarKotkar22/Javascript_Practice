function addList(){

    let adding = document.getElementById('items');
    let add = document.createElement("li");
    add.innerHTML = adding;
    document.getElementById('list').appendChild(add);
}