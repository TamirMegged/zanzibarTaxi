var btnOrder = document.getElementById("order");
btnOrder.addEventListener("click", approveOrder);

var btnClear = document.getElementById("clear");
btnClear.addEventListener('click', clearInputs);

var btnClose = document.getElementById("closePopup");
btnClose.addEventListener('click', closePopup);

function clearInputs() {
    document.getElementById("toInput").value = "";
    document.getElementById("fromInput").value = "";
    document.getElementById("returnCheck").checked = false;
}

function approveOrder() {
    var popup = document.getElementById("orderApprove");
    var notGood = document.getElementById("notApproved");
    var input1 = document.getElementById("toInput").value;
    var input2 = document.getElementById("fromInput").value;
    if (input1 !== "" && input2 !== "") {
        popup.classList.add("show");
        notGood.classList.remove("show");
    } else {
        notGood.classList.add("show");
    }
}

function closePopup() {
    var popup = document.getElementById("orderApprove");
    popup.classList.remove("show");
    document.getElementById("toInput").value = "";
    document.getElementById("fromInput").value = "";
    document.getElementById("returnCheck").checked = false;
}