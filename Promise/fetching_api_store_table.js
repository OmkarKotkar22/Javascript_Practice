function fetchData(){
    let promise = fetch('https://jsonplaceholder.typicode.com/todos/');
    promise.then((response) => response.json())
    .then((data) => {
        let tableBody = document.getElementById("data");
        tableBody.innerHTML = "";
        data.forEach((item) => {
            let row = document.createElement("tr");
            
            let userIdCell = document.createElement("td");
            userIdCell.innerHTML = "" + item.userId;
            row.appendChild(userIdCell);

            let idCell = document.createElement("td");
            idCell.innerHTML = "" + item.id;
            row.appendChild(idCell);

            let titleCell = document.createElement("td");
            titleCell.innerHTML = "" + item.title;
            row.appendChild(titleCell);

            let statusCell = document.createElement("td");
            statusCell.innerHTML = "" + item.completed;
            row.appendChild(statusCell);

            tableBody.appendChild(row);
        });
    })
    .catch((err)=>{
        console.log("Error fetching data: ", err);
    })
}