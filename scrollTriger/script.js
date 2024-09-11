gsap.from("#page1 #box",{
    scale:0,
    rotate:360,
    duration:2,
    delay:1
})

gsap.to("#page2 h1",{
  transform:"translateX(-100%)",
  duration:2,
  delay:0.5,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -50%",
    scrub:2,
    pin:true

  }
})

gsa
// gsap.from("#page3 #box",{
//     scale:0,
//     rotate:360,
//     duration:2,
//     delay:1,
//     scrollTrigger:"#page3 #box"
// })