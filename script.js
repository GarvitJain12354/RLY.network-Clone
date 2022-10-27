function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier:.3
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()
var cursor = document.querySelector("#cursor")
function c(){
    document.addEventListener("mousemove",function(dets){
        cursor.style.top = `${dets.clientY -5}px` 
       document.querySelector("#cursor").style.left = `${dets.clientX -10}px` 
    })
}
c()

function btn(){
    
    document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button")
    .addEventListener("mouseover",function(){
       
        document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#btex>h3:nth-child(1)").style.transform = `translateY(-100%)`
        document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#btex>h3:nth-child(2)").style.transform = `translateY(-100%)`
      cursor.style.display = "none"
    })
    document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button")
    .addEventListener("mouseleave",function(){
       
        document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#btex>h3:nth-child(1)").style.transform = `translateY(0%)`
        document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#btex>h3:nth-child(2)").style.transform = `translateY(0%)`
      cursor.style.display = "block"

      
    })
    document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button")
    .addEventListener("mouseover",function(dets){
var dim = document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#green").getBoundingClientRect()
        document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#green").style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
    document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button")
    .addEventListener("mouseleave",function(dets){
var dim = document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#green").getBoundingClientRect()
        document.querySelector("#page1>#center1>.cir:nth-child(2)>#bot>button>#green").style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
    document.querySelector("#bot>h4")
    .addEventListener("mousemove",function(){
        document.querySelector("#bot>h4>#line>.line:nth-child(2)").style.transform = `translateX(118%)`
        document.querySelector("#bot>h4>#line>.line:nth-child(1)").style.transform = `translateX(100%)`
        cursor.style.display = "none"

    })
    document.querySelector("#bot>h4")
    .addEventListener("mouseleave",function(){
        document.querySelector("#bot>h4>#line>.line:nth-child(2)").style.transform = `translateX(0%)`
        document.querySelector("#bot>h4>#line>.line:nth-child(1)").style.transform = `translateX(0%)`
        cursor.style.display = "block"

    })
}
btn()


function page2btn(){
    document.querySelector(".t>button")
    .addEventListener("mouseover",function(){
       
        document.querySelector(".t>button>#btex>h3:nth-child(1)").style.transform = `translateY(-100%)`
        document.querySelector(".t>button>#btex>h3:nth-child(2)").style.transform = `translateY(-100%)`
        cursor.style.display = "none"
      
    })
    document.querySelector(".t>button")
    .addEventListener("mouseleave",function(){
       
        document.querySelector(".t>button>#btex>h3:nth-child(1)").style.transform = `translateY(0%)`
        document.querySelector(".t>button>#btex>h3:nth-child(2)").style.transform = `translateY(0%)`
        cursor.style.display = "block"

      
    })
    document.querySelector(".t>button")
    .addEventListener("mouseover",function(dets){
var dim = document.querySelector(".t>button>#green").getBoundingClientRect()
        document.querySelector(".t>button>#green").style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
    document.querySelector(".t>button")
    .addEventListener("mouseleave",function(dets){
var dim = document.querySelector(".t>button>#green").getBoundingClientRect()
        document.querySelector(".t>button>#green").style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
}
page2btn()

function canvas(){
    const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index) {
    var data = `https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/0.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/1.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/2.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/3.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/4.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/5.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/6.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/7.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/8.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/9.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/10.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/11.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/12.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/13.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/14.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/15.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/16.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/17.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/18.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/19.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/20.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/21.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/22.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/23.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/24.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/25.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/26.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/27.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/28.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/29.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/30.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/31.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/32.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/33.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/34.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/35.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/36.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/37.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/38.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/39.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation540.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/41.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/42.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/43.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/44.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/45.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/46.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/47.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/48.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/49.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/50.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/51.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/52.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/53.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/54.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/55.web
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/56.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/57.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/58.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/59.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/60.web
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/61.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/62.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/63.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/64.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/65.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/66.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/67.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/68.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/69.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/70.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/71.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/72.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/73.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/74.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/75.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/76.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/77.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/78.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/79.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/80.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/81.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/82.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/83.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/84.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/85.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/86.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/87.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/88.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/89.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/90.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/91.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/92.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/93.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/94.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/95.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/96.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/97.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/98.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/99.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/100.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/101.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/102.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/103.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/104.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/105.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/106.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/107.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/108.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/109.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/110.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/111.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/112.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/113.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/114.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/115.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/116.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/117.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/118.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/119.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/120.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/121.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/122.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/123.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/124.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/125.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/126.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/127.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/128.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/129.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/130.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/131.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/132.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/133.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/134.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/135.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/136.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/137.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/138.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/139.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/140.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/141.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/142.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/143.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/144.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/145.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/146.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/147.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/148.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/149.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/150.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/151.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/152.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/153.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/154.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/155.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/156.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/157.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/158.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/159.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/160.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/161.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/162.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/163.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/164.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/165.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/166.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/167.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/168.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/169.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/170.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/171.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/172.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/173.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/174.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/175.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/176.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/177.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/178.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/179.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/180.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/181.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/182.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/183.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/184.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/185.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/186.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/187.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/188.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/189.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/190.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/191.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/192.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/193.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/194.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/195.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/196.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/197.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/198.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/199.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/200.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/201.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/202.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/203.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/204.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/205.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/205.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/206.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/207.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/208.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/209.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/210.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/211.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/212.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/213.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/213.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/214.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/215.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/216.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/217.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/218.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/219.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/220.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/221.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/222.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/223.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/224.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/225.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/226.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/227.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/228.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/229.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/230.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/231.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/232.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/232.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/232.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/233.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/234.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/235.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/236.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/237.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/238.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/239.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/240.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/241.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/241.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/242.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/243.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/244.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/245.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/246.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/247.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/248.webp
    https://rly.network/wp-content/themes/rly_network/dist/images/features_animation/249.webp

   `;
    return data.split("\n")[index];
}

const frameCount = 249;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: 0.5,
     trigger:"#canvas",
     
     start:"-5% 70%",
     end:"bottom 40%",
     scroller:"#main"
     
    
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

gsap.to("canvas",{
    top:"69%",
    scrollTrigger:{
        trigger:"#canvas",
        start:"0% 10%",
      
        scrub:.1,
        scroller:"#main"
        
        
       
    }
})
ScrollTrigger.create({
    trigger:"#page2",
    pin:true,
    start:"bottom bottom",
    scroller:"#main"
})
}

canvas()


function pg4(){

    gsap.from(".space:nth-child(2)>.c4:nth-child(2)",{
        y:"100%",
        
       
        scrollTrigger:{
            trigger:"#page4",
            start:"-5% 0%",
            scrub:"6",
            
            end:"50% 50%",
            scroller:"#main"
        },
        
    })
    gsap.from(".space:nth-child(2)>.c4:nth-child(1)",{
        x:"-110%",
        rotate:"-90deg",
        scrollTrigger:{
            trigger:"#page4",
            start:"-5% 0%",
            scrub:"6",
            
            end:"50% 50%",
            scroller:"#main"
        },
        
    })
    gsap.from(".space:nth-child(2)>.c4:nth-child(3)",{
        x:"110%",
        rotate:"90deg",
        scrollTrigger:{
            trigger:"#page4",
            start:"-5% 0%",
            scrub:"6",
            
            end:"50% 50%",
            scroller:"#main"
        },
        
    })
}
pg4()

function pg4c(){

    gsap.from(".space:nth-child(3)>.c4:nth-child(2)",{
   opacity:"0",
       
        scrollTrigger:{
            trigger:"#page4",
            start:"18% 0%",
            scrub:"2",
            
         
            end:"80% 50%",
            scroller:"#main"
           
        },
        
    })
    gsap.from(".space:nth-child(3)>.c4:nth-child(2)",{
        y:"-100%",
        rotate:"180deg",
       
        scrollTrigger:{
            trigger:"#page4",
            start:"45% 20%",
            scrub:"5",
            
            end:"85% 65%",
            scroller:"#main"

           
        },
        
    })
    gsap.from(".space:nth-child(3)>.c4:nth-child(1)",{
        x:"-120%",
        rotate:"-90deg",
        scrollTrigger:{
            trigger:"#page4",
            start:"45% 20%",
            scrub:"5",
            
            end:"85% 50%",
            scroller:"#main"

           
        },
        
    })
    gsap.from(".space:nth-child(3)>.c4:nth-child(3)",{
        x:"120%",
        rotate:"90deg",
        scrollTrigger:{
            trigger:"#page4",
            start:"45% 20%",
            scrub:"5",
            
            end:"85% 50%",
            scroller:"#main"

           
        },
        
    })
}
pg4c()

function drag(){
    document.querySelector("#scroll")
    .addEventListener("click",function(){
        setTimeout(() => {
            
            document.querySelector("#scroll").style.cursor = "grabbing"
        }, 5000);
        document.querySelector("#scroll").style.cursor = "grab"

    })
//     document.querySelectorAll(".card").forEach(function(elem){
// elem.addEventListener("mousemove",function(dets){
//     var dim2 = document.querySelector("#scroll").getBoundingClientRect()
//  document.querySelector("#cur").style.top = `${dets.clientY - dim2.top}px`
//  document.querySelector("#cur").style.left = `${dets.clientX - dim2.left}px`
//  document.querySelector("#cur").style.display = "flex"
//  cursor.style.display = "none"

//     })
//     elem.addEventListener("mouseleave",function(dets){
    
//         document.querySelector("#cur").style.top = `${dets.clientY}px`
//         document.querySelector("#cur").style.left = `${dets.clientX}px`
//         document.querySelector("#cur").style.display = "none"
//         cursor.style.display = "block"

//            })
// })
}
drag()
function pg7(){
    document.querySelector(".t2>h4")
    .addEventListener("mousemove",function(){
        document.querySelector(".t2>h4>#line>.line:nth-child(2)").style.transform = `translateX(132%)`
        document.querySelector(".t2>h4>#line>.line:nth-child(1)").style.transform = `translateX(110%)`
        cursor.style.display = "none"

    })
    document.querySelector(".t2>h4")
    .addEventListener("mouseleave",function(){
        document.querySelector(".t2>h4>#line>.line:nth-child(2)").style.transform = `translateX(0%)`
        document.querySelector(".t2>h4>#line>.line:nth-child(1)").style.transform = `translateX(0%)`
        cursor.style.display = "block"

    })
    document.querySelector(".t2>button")
    .addEventListener("mouseleave",function(){
       
        document.querySelector(".t2>button>#btex>h3:nth-child(1)").style.transform = `translateY(0%)`
        document.querySelector(".t2>button>#btex>h3:nth-child(2)").style.transform = `translateY(0%)`
      
    })
    document.querySelector(".t2>button")
    .addEventListener("mouseover",function(dets){
var dim = document.querySelector(".t2>button>#green").getBoundingClientRect()
        document.querySelector(".t2>button>#green").style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
    document.querySelector(".t2>button")
    .addEventListener("mouseleave",function(dets){
var dim = document.querySelector(".t2>button>#green").getBoundingClientRect()
        document.querySelector(".t2>button>#green").style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
    document.querySelector(".t2>button")
    .addEventListener("mouseover",function(){
       
        document.querySelector(".t2>button>#btex>h3:nth-child(1)").style.transform = `translateY(-100%)`
        document.querySelector(".t2>button>#btex>h3:nth-child(2)").style.transform = `translateY(-100%)`
        cursor.style.display = "none"

      
    })
    document.querySelector(".t2>button")
    .addEventListener("mouseleave",function(){
       
        document.querySelector(".t2>button>#btex>h3:nth-child(1)").style.transform = `translateY(0%)`
        document.querySelector(".t2>button>#btex>h3:nth-child(2)").style.transform = `translateY(0%)`
        cursor.style.display = "block"

      
    })
    
}
pg7()


function inves(){
document.querySelectorAll(".com").forEach(function(elem){
    elem.addEventListener("mouseover",function(dets){
        
        var dim = elem.getBoundingClientRect()
        elem.children[2].style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
        elem.children[2].style.transition = `cubic-bezier(0.19, 1, 0.22, 1) 2.5s`
        elem.children[1].style.display = `flex`
      cursor.style.display = "none"

   
    })
    elem.addEventListener("mouseleave",function(dets){
        
        var dim = elem.getBoundingClientRect()
        elem.children[2].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
        elem.children[2].style.transition = `ease .3s`
        elem.children[1].style.display = `none`
      cursor.style.display = "block"



    })
})
}

inves()

function pg9(){
    document.querySelector(".inp>button")
    .addEventListener("mouseover",function(){
       
        document.querySelector(".inp>button>#btex>h3:nth-child(1)").style.transform = `translateY(-100%)`
        document.querySelector(".inp>button>#btex>h3:nth-child(2)").style.transform = `translateY(-100%)`
        cursor.style.display = "none"

      
    })
    document.querySelector(".inp>button")
    .addEventListener("mouseleave",function(){
       
        document.querySelector(".inp>button>#btex>h3:nth-child(1)").style.transform = `translateY(0%)`
        document.querySelector(".inp>button>#btex>h3:nth-child(2)").style.transform = `translateY(0%)`
        cursor.style.display = "block"

      
    })
    document.querySelector(".inp>button")
    .addEventListener("mouseover",function(dets){
var dim = document.querySelector(".inp>button>#green").getBoundingClientRect()
        document.querySelector(".inp>button>#green").style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
    document.querySelector(".inp>button")
    .addEventListener("mouseleave",function(dets){
var dim = document.querySelector(".inp>button>#green").getBoundingClientRect()
        document.querySelector(".inp>button>#green").style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
    })
}
pg9()
function pg6cur(){
    
    document.querySelector("#second6")
    .addEventListener("mousemove",function(dets){
        var dim = document.querySelector("#page6").getBoundingClientRect()
        document.querySelector("#scur").style.top = `${dets.clientY -dim.top}px`
        document.querySelector("#scur").style.left = `${dets.clientX - dim.left -130}px`
        document.querySelector("#scur").style.display = "flex"
        cursor.style.display = "none"
    })
    document.querySelector("#second6")
    .addEventListener("mouseleave",function(dets){
        var dim = document.querySelector("#page6").getBoundingClientRect()
        document.querySelector("#scur").style.top = `${dets.clientY -dim.top}px`
        document.querySelector("#scur").style.left = `${dets.clientX - dim.left -130}px`
        document.querySelector("#scur").style.display = "none"
        cursor.style.display = "block"


    })
}
pg6cur()


function topli(){
    document.querySelectorAll(".top>h4").forEach(function(h4){
        h4.addEventListener("mouseover",function(){
            cursor.style.display = "none"
        })
    
        h4.addEventListener("mouseleave",function(){
            cursor.style.display = "block"
        })
    })
    
}
topli()




function pg2t(){
    gsap.from("#page2 .te>h1,#page2 .s>h1,#page2 .h1>h1",{
        scrollTrigger:{
            trigger:".te",
            scroller:"#main",
            start:"20% 50%",
            
            end:"bottom 50%"
        },
        top:"100%",
        duration:1,
        ease:Expo.easeInOut
    })

    document.querySelectorAll(".section")
    .forEach(function(elem){
        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                // markers:true,
                start:"-10% 50%",
                end:"bottom 70%",
                scroller:"#main",
                scrub:.1
            },
    color:" #ceff45"
            
        })
    })
    document.querySelectorAll(".section")
    .forEach(function(elem){
        gsap.to(elem,{
            scrollTrigger:{
                trigger:elem,
                
                start:"5% 0%",
                
                scroller:"#main",
                scrub:.1
            },
    color: "#898989"
            
        })
    })
    gsap.from(".vt>h1",{
       top:"100%",
        duration:1.5,
        scrollTrigger:{
            trigger:"#page7",
            scroller:"#main",
            start:"top 40%",
           
        }
    })
}
pg2t()

function loader(){
    var tl = gsap.timeline()
    tl.to("#lcir",{
        borderTop:"1px solid #898989",
        duration:2,
        ease:Expo.easeInOut
    })
   tl.to(".lt>h1:nth-child(1)",{
    transform:`translateY(-100%)`,
    duartion:2
   })
   tl.to(".lt>h1:nth-child(2)",{
    transform:`translateY(-100%)`,
    duartion:2

   })
   
    tl.to("#lcir",{
        borderRight:"1px solid #898989",
        ease:Expo.easeInOut

    })
    tl.to(".lt>h1:nth-child(2)",{
        transform:`translateY(-200%)`
       })
    tl.to(".lt>h1:nth-child(3)",{
        transform:`translateY(-200%)`
       })
     

    tl.to("#lcir",{
        borderBottom:"1px solid #898989",
        ease:Expo.easeInOut

    })
    tl.to(".lt>h1:nth-child(3)",{
        transform:`translateY(-300%)`
       })
    tl.to(".lt>h1:nth-child(4)",{
        transform:`translateY(-300%)`
       })
    tl.to("#lcir",{
        borderLeft:"1px solid #898989",
        ease:Expo.easeInOut

    })
tl.to("#loader",{
    top:"-100%"
})

  tl.from(".t1:nth-child(1)>h3,.t1-1>h1,.t1-2>h1",{
      top:"90%",
      duration:1.5,
  
    }) 
    tl.from(".cir>.top>h1",{
      opacity:0,
      duration:1.5,
      y:50
      
      },"-=1")
      tl.from(".cir>.top>h4",{
          y:50,
          opacity:0,
          duration:1.5
      },"-=1") 
 
}
loader()