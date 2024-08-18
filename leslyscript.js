function createConfettiPiece(initialLoad = false) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    if (initialLoad) {
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.top = Math.random() * 100 + 'vh';
    } else {
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.top = Math.random() * -10 + 'vh';
    }

    piece.style.animationDuration = Math.random() * 3 + 5 + 's';
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.width = Math.random() * 15 + 5 + 'px';
    piece.style.height = piece.style.width;

    document.querySelector('.confetti-background').appendChild(piece);

    setTimeout(() => {
        piece.remove();
    }, 10000);
}

for (let i = 0; i < 200; i++) {
    createConfettiPiece(true);
}

setInterval(() => createConfettiPiece(false), 50);
