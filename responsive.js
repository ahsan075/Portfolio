//=== FRONT PAGE RESPONSIVE DESIGN ===//


let bg1=document.querySelector('.bg1')
// let bg2=document.querySelector('.bg2')
let fontImage=document.querySelector('.frontimage')
let section1inner=document.querySelector('.section1inner')
let anchr2=document.querySelector('.anchr2')


let windowWidth=window.innerWidth
console.log(windowWidth)

bg1.style.top=`${(1920 / windowWidth)*5}%`
bg1.style.fontSize=`${(windowWidth / 1920)*16}rem`
bg1.style.lineHeight=`${(windowWidth / 1920)*15}rem`

// bg2.style.fontSize=(windowWidth / 1920)*5 + 'rem'
// bg2.style.top=`${(1920 / windowWidth)*12}%`
// bg2.style.wordSpacing=(windowWidth / 1920)*2 + '%'

section1inner.style.left=(windowWidth / 1920)*10+'%'


let query=window.matchMedia('(max-width:968px)')
let query2=window.matchMedia('(max-width:1228px)')
let query3=window.matchMedia('(min-width:969px)')
let query4=window.matchMedia('(min-width:768px)')
let query5=window.matchMedia('(max-width:768px)')
let query6=window.matchMedia('(min-width:576px)')

if(query.matches && query4.matches){
    fontImage.style.left=(windowWidth / 1228)*68+'%'
}else if(query2.matches && query3.matches){
    fontImage.style.left=(windowWidth / 1228)*60+'%'
    console.log('working')
}else if(query5.matches && query6.matches){
    fontImage.style.left=(windowWidth/768)*68+'%'
    console.log('working 2')
}
else{
    fontImage.style.left='60%'
}

window.addEventListener('resize',function (){
    windowWidth=window.innerWidth

    bg1.style.fontSize=`${(windowWidth / 1920)*16}rem`
    bg1.style.lineHeight=`${(windowWidth / 1920)*15}rem`
    bg1.style.top=`${(1920 / windowWidth)*5}%`

    // bg2.style.fontSize=(windowWidth / 1920)*5 + 'rem'
    // bg2.style.top=`${(1920 / windowWidth)*12}%`
    // bg2.style.wordSpacing=(windowWidth / 1920)*2 + 'rem'

    section1inner.style.left=(windowWidth / 1920)*10+'%'

    if(query.matches  && query4.matches){
        fontImage.style.left=(windowWidth / 1228)*68+'%'
    }else if(query2.matches && query3.matches){
        fontImage.style.left=(windowWidth / 1228)*60+'%'
        console.log('working')
    }else if(query5.matches && query6.matches){
        fontImage.style.left=(windowWidth/768)*68+'%'
        console.log('working 2')
    }
    else{
        fontImage.style.left='60%'
    }
})










//=== ABOUT PAGE RESPONSIVE DESIGN ===//



let aboutparaMain=document.querySelector('.aboutparaMain')








window.addEventListener('resize',function (){

    windowWidth=window.innerWidth


})







//=== SKILL PAGE RESPONSIVE DESIGN ===//



let cards=document.querySelector('.cards')








window.addEventListener('resize',function (){

    windowWidth=window.innerWidth

 
})