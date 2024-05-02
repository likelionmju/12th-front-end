const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', function() {
    hoverBox.style.backgroundColor = 'skyblue';
});

hoverBox.addEventListener('mouseout', function() {
    hoverBox.style.backgroundColor = 'coral';
});
