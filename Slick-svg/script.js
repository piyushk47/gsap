var Path = `M 100 100 Q 500 100 990 100`
var finalPath = `M 100 100 Q 500 100 990 100`

var string=document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
Path = `M 100 100 Q ${dets.x} ${dets.y} 990 100`
// stroke="red"
gsap.to("svg  path",{
    attr:{d:Path},
    duration:0.2,
    ease:"power3.out"
})
})
string.addEventListener("mouseleave",function(){

gsap.to("svg  path",{
    attr:{d:finalPath},
    duration:1.3,
    ease: "elastic.out(1,0.1)",
})
})

// string.addEventListener("mouseleave",function(){
// console.log(")
// })
