document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("newsModal");
  const para = document.querySelector('.main-article p');
  const button = document.getElementById('readMoreBtn');
  const span = document.querySelector(".modal .close");

  if (window.innerWidth <= 768) {
      para.classList.add('collapsed');
      button.textContent = 'Read more';
  }

  button.addEventListener('click', function () {
      para.classList.toggle('collapsed');
      const isCollapsed = para.classList.contains('collapsed');

      button.textContent = isCollapsed ? 'Read more' : 'Show less';
      modal.style.display = isCollapsed ? 'none' : 'block';
  });

  span.onclick = function () {
      modal.style.display = "none";
      para.classList.add('collapsed');
      button.textContent = 'Read more';
  };

  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
          para.classList.add('collapsed');
          button.textContent = 'Read more';
      }
  };
});
