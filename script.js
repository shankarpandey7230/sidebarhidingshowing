const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// console.log(toggleBtn, closeBtn, sidebar);

toggleBtn.addEventListener('click', () => {
  //   console.log(sidebar.classList);
  //   if (sidebar.classList.contains('show-sidebar')) {
  //     sidebar.classList.remove('show-sidebar');
  //   } else {
  //     sidebar.classList.add('show-sidebar');
  //   }
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  //   if (sidebar.classList.contains('show-sidebar')) {
  //     sidebar.classList.remove('show-sidebar');
  //   } else {
  //     sidebar.classList.add('show-sidebar');
  //   }
  sidebar.classList.toggle('show-sidebar');
});
