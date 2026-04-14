// Sahifaga kirganda statuslarni chiqarish
window.onload = function () {
    loadStatus();
};

// Status qo‘shish funksiyasi
function addStatus() {
    let input = document.getElementById("statusInput");
    let text = input.value;

    if (text === "") {
        alert("Status yoz!");
        return;
    }

    let statuses = JSON.parse(localStorage.getItem("statuses")) || [];

    statuses.unshift(text); // eng yuqoriga qo‘shadi

    localStorage.setItem("statuses", JSON.stringify(statuses));

    input.value = "";

    loadStatus();
}

// Statuslarni ekranga chiqarish
function loadStatus() {
    let list = document.getElementById("statusList");
    let statuses = JSON.parse(localStorage.getItem("statuses")) || [];

    list.innerHTML = "";

    statuses.forEach(function (item) {
        list.innerHTML += `
            <div class="status">
                ${item}
            </div>
        `;
    });
}
