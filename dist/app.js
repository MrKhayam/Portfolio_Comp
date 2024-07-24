const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const cursor = document.querySelector('.custom-cursor');
const tl = gsap.timeline();
const tl2 = gsap.timeline();


document.body.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:.4
    })
})








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
    duration:.4,
    delay:.2,
});

if(window.innerWidth > 700){
    tl.from(".navLis", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    });
}

tl.from(".lower",{
    opacity:0,
    x:"-30",
    duration:.5,
})

tl.from(".image",{
    opacity:0,
    y:"-30",
    duration:.5,
});


console.log(window)












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


