var dbParam, xmlhttp, myObj, x, txt = "";
dbParam = JSON.stringify();
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        for (x in myObj) {
            txt += "<tr><td>" + myObj[x].id  + "</td>";
            txt += "<td>" + myObj[x].name  + "</td>";
            txt += "<td>" + myObj[x].age  + "</td>";
            txt += "<td>" + myObj[x].city  + "</td></tr>";
        }
        document.getElementById("addTable").innerHTML = txt;
    }
};
xmlhttp.open("GET", "package.json", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);

function load() {
   
  }