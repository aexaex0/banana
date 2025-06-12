document.getElementById('playBtn').addEventListener('click', function () {
    const audio = new Audio('hangod.mp3');
    audio.volume = 1.0; // max hangerő amit enged a böngésző
    audio.play().catch(err => {
        console.error('Hiba a lejátszásnál:', err);
    });
});
