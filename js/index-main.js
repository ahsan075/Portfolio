// ===VARIABLES===//

let bar = document.querySelector('.toggle-bar')
let toggle = document.querySelector('.navbar')
let menuName = document.querySelector('.menu1')
let first = document.querySelector('.openfirst')
let svg = document.querySelector('svg')
let span1 = document.querySelector('.span1')
let list = document.querySelectorAll('.list-item')
let menu = document.querySelector('.container')
let listDiv = document.querySelector('.list')
let welcome = document.querySelector('.welcome')
let container = document.querySelector('.container')
let blink = document.querySelector('.blink')
let welcome1 = document.querySelector('.welcome1')
let welcome2 = document.querySelector('.welcome2')
let sectionAbout = document.querySelector('.sectionAbout')
let image = document.querySelector('.frontimage')
let section1 = document.querySelector('.section1')
let section2 = document.querySelector('.section2')
let card = document.querySelectorAll('.card')
let skillHeading = document.querySelector('.skillHeading')
let skillh1 = document.querySelector('#skill-h1')
let circle1 = document.querySelector('.card:nth-child(1) .percent svg circle:nth-child(2)')
let circle2 = document.querySelector('.card:nth-child(2) .percent svg circle:nth-child(2)')
let circle3 = document.querySelector('.card:nth-child(3) .percent svg circle:nth-child(2)')
let circle4 = document.querySelector('.card:nth-child(4) .percent svg circle:nth-child(2)')
let circle5 = document.querySelector('.card:nth-child(5) .percent svg circle:nth-child(2)')
let circle6 = document.querySelector('.card:nth-child(6) .percent svg circle:nth-child(2)')
let result = false;
let aboutbox = document.querySelector('.aboutBox')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let about=document.querySelector('#about')
let aboutBox=document.querySelector('.aboutBox')
let aboutpara=document.querySelector('.aboutpara')
let aboutMainPara=document.querySelector('.aboutparaMain')





// === TOGGOLE BAR CLICKING EVENTS ===//


bar.addEventListener('click', function () {

    toggle.classList.remove('closeup')
    if (!result) {
        section1.classList.remove('scrollon')
        menu.classList.remove('menuActive')
        bar.classList.add('open')
        bar.classList.remove('close')
        menuName.innerText = 'CLOSE'
        toggle.classList.add('openup')
        svg.classList.add('svgup')
        span1.classList.add('span1up')
        list.forEach(e => {
            e.addEventListener('click', function () {
                list.forEach(li => li.classList.remove('active'))
                this.classList.add('active')
            })
        })
        result = true
    } else {
        if (window.scrollY > 0) {
            menu.classList.add('menuActive')
        }
        section1.classList.add('scrollon')
        toggle.classList.remove('openup')
        bar.classList.remove('open')
        bar.classList.add('close')
        menuName.innerText = 'MENU'
        svg.classList.remove('svgup')
        span1.classList.remove('span1up')
        result = false

    }
})



// === WELCOME ANIMATION ===//

setTimeout(() => {
    welcome.style.width = '0%'
    container.classList.remove('yes')
    blink.style.display = 'none'
    welcome1.style.display = 'none'
    welcome2.style.display = 'none'
    sectionAbout.classList.remove('before')
    section2.classList.remove('before')
}, 2000)

setTimeout(() => {
    welcome.style.display = 'none'
}, 3000)







//=== Scroll Opacity ===//

let query7=window.matchMedia('(min-width:769px)')


window.addEventListener('scroll', function () {
    let screenPosition = window.innerHeight / 1.7;
    let screenPosition3 = window.innerHeight / 1;
    let contentPosition = sectionAbout.getBoundingClientRect().top;
    let contentPosition2 = skillHeading.getBoundingClientRect().top;
    let contentPosition3 = section2.getBoundingClientRect().top;

    // menu.classList.toggle('menuActive', window.scrollY > 0)

    if (section1.classList.contains('scrollon')) {
        section1.style.opacity = 1 - +window.pageYOffset / 500 + ''
        section1.style.top = +window.pageYOffset + 'px'
        section1.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px'
    }
    if (section2.classList.contains('scrollon2')) {
        section2.style.opacity = 3 - +window.pageYOffset / 500 + ''
    }
    for (let show of card) {
        show.classList.toggle('zoomIn', contentPosition < screenPosition)
    }

    if(query7.matches){
        skillh1.classList.toggle('leftTOright', contentPosition < screenPosition)
        skillh1.classList.toggle('leftRight', contentPosition < screenPosition)
        about.classList.toggle('leftRight',contentPosition3 < screenPosition)
        aboutBox.classList.toggle('aboutBoxafter',contentPosition3 < screenPosition)
        aboutpara.classList.toggle('aboutparaafter',contentPosition3 < screenPosition)
    }else{
        skillh1.classList.remove('leftTOright', contentPosition < screenPosition)
        skillh1.classList.remove('leftRight', contentPosition < screenPosition)
        about.classList.remove('leftRight',contentPosition3 < screenPosition)
        aboutBox.classList.remove('aboutBoxafter',contentPosition3 < screenPosition)
        aboutpara.classList.remove('aboutparaafter',contentPosition3 < screenPosition)
    }

    circle1.classList.toggle('circle1', contentPosition < screenPosition)
    circle2.classList.toggle('circle2', contentPosition < screenPosition)
    circle3.classList.toggle('circle3', contentPosition < screenPosition)
    circle4.classList.toggle('circle4', contentPosition < screenPosition)
    circle5.classList.toggle('circle5', contentPosition < screenPosition)
    circle6.classList.toggle('circle6', contentPosition < screenPosition)

    skillHeading.classList.toggle('zoomIn', contentPosition2 < screenPosition3)
})






//===Box-Changer===//

aboutbox.addEventListener('click',function(){
    if(query7.matches){
        box1.classList.toggle('boxchange1');
        box2.classList.toggle('boxchange2');
        aboutMainPara.classList.toggle('itsOk')
    }else{
        box1.classList.remove('boxchange1');
        box2.classList.remove('boxchange2');
        aboutMainPara.classList.remove('itsOk')
    }
})