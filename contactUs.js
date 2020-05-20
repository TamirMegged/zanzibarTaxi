var input = [];
input[0] = document.getElementById("firstName");
input[1] = document.getElementById("surname");
input[2] = document.getElementById("email");
input[3] = document.getElementById("phone");
input[4] = document.getElementById("subject");
input[5] = document.getElementById("phone2");
input[6] = document.getElementById("description");

var must = [];
must[0] = document.getElementById("noName");
must[1] = document.getElementById("noName");
must[2] = document.getElementById("noEmail");
must[3] = document.getElementById("noPhone");
must[4] = document.getElementById("noSubject");

var btnSend = document.getElementById("send");
btnSend.addEventListener("click", approveSending);

var btnClear = document.getElementById("clear2");
btnClear.addEventListener('click', clearInputs);

var btnClose = document.getElementById("closePopup2");
btnClose.addEventListener('click', closePopup);


function clearInputs() {
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";
    }
    for (var i = 0; i < must.length; i++) {
        must[i].classList.remove("show");
    }
}


function approveSending() {
    var popup = document.getElementById("approveSend");
    var counter = 0;
    for (var i = 0; i < 5; i++) {
        if (input[i].value === "") {
            must[i].classList.add("show");
        } else {
            must[i].classList.remove("show");
            counter++;
        }
    }
    if (counter === 5) {
        popup.classList.add("show");
    }
}


function closePopup() {
    var popup = document.getElementById("approveSend");
    popup.classList.remove("show");
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";
    }
}