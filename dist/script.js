const Icon = document.querySelector('#profile');
const svg = document.querySelector('#profile-svg');
const text = document.querySelector('#about-me');

console.log(Icon);
var tl = gsap.timeline({repeat:2, repeatDelay:1});
tl.to(svg,{opacity:0,duration:1});
tl.to(text,{opacity:0,duration:1});
tl.to(Icon, {x: -20, duration: 1, ease:"power1"});
tl.to(svg,{opacity:1,duration:1});
tl.to(text,{opacity:1,duration:1});
tl.to(Icon, {x: 0, duration: 1});

