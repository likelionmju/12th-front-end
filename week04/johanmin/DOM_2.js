const button = document.getElementById('colorChangeBtn');
button.addEventListener('click', function () {
  let currentColor = button.style.backgroundColor;
  if (currentColor === 'red') {
    button.style.backgroundColor = '';
  } else {
    button.style.backgroundColor = 'red';
  }
});
