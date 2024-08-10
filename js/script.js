let acnive = document.querySelectorAll('.tabheader__item')
let content = document.querySelectorAll('.tabcontent')
acnive.forEach((item, i) => {
    item.onclick = () => {
        acnive.forEach(item2 => item2.classList.remove('tabheader__item_active'))
        item.classList.add('tabheader__item_active')
        showContent(i)
    }
})
function showContent(idx = 0) {
    content.forEach((cont) => cont.classList.add('hide'))
    content[idx].classList.remove('hide')
    content[idx].classList.add('show', 'fade')

}
showContent()


let img = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')
let imageIndex = 0

function slide(index) {
    if (index > img.length - 1) {
        imageIndex = 0;
    }
    if (index < 0) {
        imageIndex = img.length - 1
    }
    img.forEach(elem => {
        elem.classList.add("fade", "hide")
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
btn.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', "fade")
        modal.classList.remove('hide')
    }
})
close.onclick = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
}
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

let deadline = "2024-8-20";
function getTime(endtime) {
    let now = new Date();
    const total = Date.parse(endtime) - Date.parse(now);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { days, hours, minutes, seconds };
}
getTime(deadline)
let interval = setInterval(() => {
    seconds.textContent = getTime(deadline).seconds
    minutes.textContent = getTime(deadline).minutes
    hours.textContent = getTime(deadline).hours
    days.textContent = getTime(deadline).days
}, 1000)






