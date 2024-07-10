var texter1 = document.querySelectorAll('.texter h1');
var btns = document.querySelectorAll('.btns a');
var logo = document.querySelector('.logo');
var imagewrap = document.querySelector('.imagewrap');
var nav = document.querySelector('.nav');
var texty = document.querySelector('.texty'); 
var photobooth = document.querySelector('.photobooth');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var diverr = document.querySelectorAll('.diverr');
var diver2 = document.querySelectorAll('.diver2');
var diver1 = document.querySelectorAll('.diver1');
var subcount = document.querySelectorAll('.subcount');




function textsplitter(){

    diverr.forEach((diverr , index) => {
        gsap.from(diverr , {
          y : 50 ,
          opacity : 0 ,
          stagger : 0.1 , 
          scrollTrigger: {
                trigger: ".mainer",
                start: "top 90%",
                end: "bottom 60%",
                scrub :1 ,
                
          }
        })
    })
    
    texter1.forEach((text) => {
        var spliting = text.textContent
        var splittedText = spliting.split(' ')
        var newText = ''
        splittedText.forEach((word) => {
            newText += `<span>${word}</span> `
        })
        text.innerHTML = newText
    })
    
    var splitttext = texty.textContent.split("")
    var newtext = "" ;
    splitttext.forEach((letter) => {
        newtext += `<span>${letter}</span>` ;
    })
    texty.innerHTML = newtext ;
    
}
function gsapper(){
    var tl = gsap.timeline({
        stagger: 0.1
    })
    var t2 = gsap.timeline({
        stagger: 0.1 ,
        scrollTrigger: {
            trigger: ".photobooth",
            start: "top 60%",
            end: "bottom 96%",
            scrub :2 ,
            
        }
    })

     diverr.forEach((diverr , index) => {
        diverr.addEventListener('mouseenter', () => {
            diver1[index].style.width = "25%" ,
            diver2[index].style.width = "75%" ,
            diver1[index].style.transition = "all 0.5s" ,
            subcount[index].innerHTML = '<i class="ri-arrow-right-line"></i>'
            
        })
        diverr.addEventListener('mouseleave', () => {
            diver1[index].style.width = "0%" ,
            diver2[index].style.width = "100%" ,
            diver1[index].style.transition = "all 0.5s"
            subcount[index].innerHTML = `<h1>0${index+1}</h1>`
        })
    
    })
    


    btns.forEach((btn , index) => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale :0.9 ,
                opcity : 1 ,
                duration: 0.2,
                
            })
                
        })
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale :1 ,
                duration: 0.5,
               
            })
                
        })
    })

    

    gsap.to(".texter h1 span", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)" ,
        color : "#e3e3c4",
        scrollTrigger: {
            trigger: ".texter",
            start: "top 60%",
            end: "bottom 60%",
            scrub :2
        }
    })
    gsap.to(".texty span", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)" ,
        color : "#434B34",
        scrollTrigger: {
            trigger: ".texty",
            start: "top 80%",
            end: "bottom 40%",
            scrub :2 ,
            
        }
    })
    
    
    
    tl.to( logo, {
        y: 200 ,
    })
    gsap.set(imagewrap , {
        width: "30%",
        height: "40%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50% )",
        borderRadius: "50%",
    });
    
    tl.to(imagewrap, {
        duration: 2,
        width: "100%",
        height: "100%",
        ease: "power2.out",
        left: 0 , 
        top: 0,
        transform: "translate(0, 0)" ,
        borderRadius: "0%",
    });
    
    tl.from(nav ,{
        y: -200 ,
        
    })


    t2.from(left , {
        y: 200 ,
        duration: 1,
        opacity: 0,
        ease: "back.out(1.7)" ,
        duration: 1,
        stagger: 0.3
    })
    t2.from(right , {
        y: 200 ,
        duration: 1,
        opacity: 0,
        ease: "back.out(1.7)",
        duration: 1,
        stagger: 0.3
    })

}



textsplitter()
gsapper()







