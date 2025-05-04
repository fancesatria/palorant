const modal = document.getElementById("newsModal");
const btn = document.getElementById("readMoreBtn");
const span = document.querySelector(".modal .close");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}