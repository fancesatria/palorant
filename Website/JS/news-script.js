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

document.addEventListener('DOMContentLoaded', function () {
    const para = document.querySelector('.main-article p');
    const button = document.getElementById('readMoreBtn');

    if (window.innerWidth <= 768) {
      para.classList.add('collapsed');
    }

    button.addEventListener('click', function () {
      para.classList.toggle('collapsed');
      button.textContent = para.classList.contains('collapsed') ? 'Read more' : 'Show less';
    });
  });