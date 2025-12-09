document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('themeToggleBtn');
  const body = document.body;

  btn.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      btn.textContent = 'Switch to Light Mode';
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      btn.textContent = 'Switch to Dark Mode';
    }
  });
});
