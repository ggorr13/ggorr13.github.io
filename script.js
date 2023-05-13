// Wrap every letter in a span

anime.timeline({loop: true})
    .add({
        targets: '.ml12',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 10000,
        delay: (el, i) => 500 + 30 * i
    }).add({
    targets: '.ml12',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 30000,
    delay: (el, i) => 100 + 30 * i
});