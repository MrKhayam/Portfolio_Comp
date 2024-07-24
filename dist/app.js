const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const tl = gsap.timeline();
const tl2 = gsap.timeline();


// tl.from(".myName h1",{
//     opacity:0,
//     y:30,
//     duration:1,
//     delay:.2,
//     stagger:.2, 
// });

// tl.to(".loader",{
//     top:"-100%",
//     duration:.9,
//     ease:"power1.in"
// });

tl.from(".logo",{
    opacity:0,
    y:20,
    duration:.5,
    delay:.3,
});

tl.from(".navLis",{
    opacity:0,
    y:20,
    duration:.5,
    stagger: .2,
})

tl2.to(".responsiveNavbar",{
    right:0,
    duration:.7,
    ease: "power1.in",
});

tl2.from(".resLis",{
    x:30,
    opacity:0,
    duration:.3,
    stagger: .2
});

tl2.from(cross,{
    opacity:0,
    duration:.2,
});

tl2.pause();

menu.addEventListener('click',()=>{
    tl2.play();
});
cross.addEventListener('click',()=>{
    tl2.reverse();
});


