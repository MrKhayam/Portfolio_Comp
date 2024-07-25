const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const tl = gsap.timeline();
const tl2 = gsap.timeline();









tl.from(".myName h1",{
    opacity:0,
    y:30,
    duration:1,
    delay:.2,
    stagger:.2, 
});

tl.to(".loader",{
    top:"-100%",
    duration:.9,
    ease:"power1.in"
});

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

if(window.innerWidth < 700){
  tl.from(".aboutMeDiv",{
    opacity:0,
    x:-50,
    duration:1,
    delay:1,
    filter: "blur(5px)",
    scrollTrigger: {
      scroller: "body",
      trigger: ".btns",
      start: "top 20%",
      end: "top 20%",
      scrub:2
    },
  });

}


if(window.innerWidth < 700){
  tl.from(".skillLine h1",{
    opacity:0,
    x:50,
    duration:25,
    delay:1,
    filter: "blur(5px)",
    stagger: 10,
    scrollTrigger: {
      scroller: "body",
      trigger: ".aboutMeDiv",
      start: "100% 20%",
      end: "top 20%",
      scrub:2
    }
  })
}


if(window.innerWidth > 700) {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".aboutMe",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
    tl3
      .to(".aboutMeTitle", {
        scale: 40,
        duration:1,
        ease:"power3.in",
        fontSize: "300px",
      })
      .fromTo(
        ".aboutMeText",
        {
          display: "none",
          opacity: 0,
          scale: 0,
        },
        {
          display: "flex",
          opacity: 1,
          scale: 1,
        }
      );
}


if(window.innerWidth > 700) {
  const tl4 = gsap.timeline({
    scrollTrigger : {
      scroller: "body",
      trigger: ".mySkills",
      start: "top 5%",
      end: "60% -220%",
      scrub : 2,
      pin: true,
    },
  });

  tl4.from(".skillLine1",{
    x:"-200",
    opacity: 0,
    filter: "blur(10px)",
  })
  .from(".skillLine2",{
    duration:.6,
    x:"200",
    opacity: 0,
    filter: "blur(10px)",
  })
  .from(".skillLine3",{
    duration:.6,
    x:"-200",
    opacity: 0,
    filter: "blur(10px)",
  })
};













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


