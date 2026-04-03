fetch("https://jsonplaceholder.typicode.com/todos/").then(function(response) {
        return response.json();
    })

    .then(function(data){
        let table = document.getElementById("data");
        data.forEach(function(item){
            let row = document.createElement("tr");
            row.innerHTML = `
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.completed}</td>`;
            table.appendChild(row);
        ;
        table.appendChild(row);
        });
    }).catch((error)=>{
        console.log(error);
    });