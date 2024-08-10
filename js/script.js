let acnive = document.querySelectorAll('.tabheader__item')
let content = document.querySelectorAll('.tabcontent')
acnive.forEach((item, i) =>{
    item.onclick = () =>{
        acnive.forEach(item2 => item2.classList.remove('tabheader__item_active'))
        item.classList.add('tabheader__item_active')
       showContent(i) 
    }
})
function showContent(idx = 0) {
    content.forEach((cont) => cont.classList.add('hide'))
    content[idx].classList.remove('hide')
    content[idx].classList.add('show','fade')

}
showContent()


let img = document.querySelectorAll('.offer__slide' )
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')
let imageIndex = 0

function slide(index){
    if(index > img.length - 1){
        imageIndex = 0;
    }
    if(index < 0){
        imageIndex = img.length - 1
    }
    img.forEach(elem => {
    elem.classList.add("fade","hide")
})
    img[imageIndex].classList.remove('hide')
    current.textContent = imageIndex >= 10 ? imageIndex : `0${imageIndex + 1}`;
}
    slide()

prev.onclick = () => {
    imageIndex--;
    slide(imageIndex)
}
next.onclick = () => {
    imageIndex++;
    slide(imageIndex)
}



let btn = document.querySelectorAll('#btn')
let close = document.querySelector('#close')
let modal = document.querySelector('.modal')
btn.forEach(btn =>{
    btn.onclick = () =>{
        modal.classList.add('show',"fade")
        modal.classList.remove('hide')
    }
})
close.onclick = () =>{
    modal.classList.add('hide')
    modal.classList.remove('show')
}