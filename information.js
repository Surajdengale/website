// ===============================
// Suraj Digital Identity Portfolio
// Premium JavaScript
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});


    
/*const btn = document.getElementById("theme-=btn");
btn.addEventListener("click", () => {
     document.body.classList.toggle("dark");

     if (document.body.classList.contains("dark")) {
        btn.textContent ="☀️";
     } else{
        btn.textContent ="🌙";
        
     }
});*/

// Scroll Animation
const reveal = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    reveal.forEach(sec=>{

        let top = window.innerHeight;

        let point = sec.getBoundingClientRect().top;

        if(point < top-120){

            sec.classList.add("active");

        }

    });

});

// Typing Effect

const text=[
"Web Developer",
"BCA Student",
"Java Programmer",
"Frontend Designer",
"Creative Thinker"
];

let count=0;
let index=0;
let current="";
let letter="";

(function type(){

if(count===text.length){
count=0;
}

current=text[count];
letter=current.slice(0,++index);

document.querySelector(".left h3").textContent=letter;

if(letter.length===current.length){
count++;
index=0;
setTimeout(type,1500);
}else{
setTimeout(type,120);
}

})();


// Scroll Progress Bar

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let total=document.documentElement.scrollHeight-window.innerHeight;

let current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

// Counter Animation

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const inc=target/150;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

// Scroll To Top

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

// Contact Form Validation

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank You! Your message has been sent.");

form.reset();

});

}

// Current Year in Footer

const year=new Date().getFullYear();

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+year+" Suraj Ganesh Dengale | All Rights Reserved.";

}

console.log("Portfolio Loaded Successfully.");