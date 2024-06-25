let h = document.querySelector('.hora')
 let m = document.querySelector('.minuto')
 let s = document.querySelector('.segundo')

let u = document.querySelector('.uno')
 let dos = document.querySelector('.dos')
 let t = document.querySelector('.tres')
  
 
 
setInterval(function () {
const d = new Date();
let hh = d.getHours()*30;
let mm = d.getMinutes()*6; 
let ss = d.getSeconds()*6;
//console.log(ss) 
 h.style.transform = `rotate(${hh}deg) `
 m.style.transform = `rotate(${mm}deg)`
 s.style.transform = `rotate(${ss}deg)`
 
const d2 = new Date();
let hh2 = d2.getHours();
let mm2 = d2.getMinutes(); 
let ss2 = d2.getSeconds(); 
 
u.innerHTML = hh2;
dos.innerHTML = mm2;
t.innerHTML = ss2;
//console.log(mm2)
},1000)
  