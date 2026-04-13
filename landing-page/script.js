document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.target).style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});