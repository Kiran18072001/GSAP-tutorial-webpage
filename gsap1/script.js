var tl = gsap.timeline()

tl.from(".nav img, .nav-part1 h3, .nav-part2>h3, .nav-part2 button", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
})

tl.from(".main h1", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.5
})

tl.from(".main>img", {
    scale: 0,
    opacity: 0,
})

tl.from(".main #h3", {
    y: -50,
    duration: 1,
    repeat: -1,
    opacity: 0,
    yoyo: true,
})
