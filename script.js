function createCircle(initialLoad = false) {
    const circle = document.createElement('div');
    circle.classList.add('circle');

    if (initialLoad) {
        circle.style.left = Math.random() * 100 + 'vw';
        circle.style.top = Math.random() * 100 + 'vh';
    } else {
        circle.style.left = Math.random() * 100 + 'vw';
        circle.style.top = Math.random() * -10 + 'vh';
    }

    circle.style.width = Math.random() * 80 + 20 + 'px';
    circle.style.height = circle.style.width;
    circle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`;

    document.querySelector('.circle-background').appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 10000);
}

for (let i = 0; i < 200; i++) {
    createCircle(true);
}

setInterval(() => createCircle(false), 50);

document.getElementById('toLesly').addEventListener('click', function() {
    window.location.href = 'lesly.html';
});
