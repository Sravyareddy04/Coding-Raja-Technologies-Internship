// Add New Work Experience Field
function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

// Add New Academic Qualification Field
function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "eqField", "mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generate CV
function generateCV() {
    let nameField = document.getElementById("namefield").value;
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
    document.getElementById("LinkedT").innerHTML = document.getElementById("linkedfield").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("ObjectiveField").value;

    // Work Experience
    let wes = document.getElementsByClassName("weField");
    let weStr = "";
    for (let e of wes) {
        weStr += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = weStr;

    // Academic Qualification
    let aqs = document.getElementsByClassName("eqField");
    let aqStr = "";
    for (let e of aqs) {
        aqStr += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = aqStr;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

// Print CV
function printCV() {
    window.print();
}
