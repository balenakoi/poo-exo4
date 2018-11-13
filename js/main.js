class createUsers {
    constructor() {
        this.users = [];
    }
}
let newuser = new createUsers();

let htmlManager = {

    parentElement: document.getElementById("addTable"),
    display: function (object) {
        console.log(object.length);

        htmlManager.parentElement.innerHTML = "";
        for (let i = 0; i < object.length; i++) {

            let createTrElement = document.createElement("tr");
            htmlManager.parentElement.appendChild(createTrElement);

            let id = object[i].id;
            let idElement = document.createElement("th");
            idElement.innerHTML = id;
            createTrElement.appendChild(idElement);

            let name = object[i].name;
            let nameElement = document.createElement("th");
            nameElement.innerHTML = name;
            createTrElement.appendChild(nameElement);

            let age = object[i].age;
            let ageElement = document.createElement("th");
            ageElement.innerHTML = age;
            createTrElement.appendChild(ageElement);

            let from = object[i].from;
            let cityElement = document.createElement("th");
            cityElement.innerHTML = from;
            createTrElement.appendChild(cityElement);
        }
    },
    view: function (myObj) {
        htmlManager.display(myObj)
    }

}

let xhttp = new XMLHttpRequest();
xhttp.open("GET", "package.json", false);
xhttp.send(null);
if (xhttp.status == 200) {
    let myobj = JSON.parse(xhttp.responseText)
    newuser.users = myobj;
    htmlManager.view(newuser.users)
}



function load(value) {
    switch (value) {
        case 'id':
            newuser.users.sort(function (a, b) {
                return a.id > b.id;
            });
            break;
        case 'name':
            newuser.users.sort(function (a, b) {
                return a.name > b.name;
            });
            break;
        case 'age':
            newuser.users.sort(function (a, b) {
                return a.age > b.age;
            });
            break;
        case 'city':
            newuser.users.sort(function (a, b) {
                return a.from > b.from;
            });
            break;
        default:
            alert('test');
    }

    htmlManager.view(newuser.users);
}