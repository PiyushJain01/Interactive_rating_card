let submit = document.querySelector('.submit')
let btns = document.querySelectorAll('.btn')
let rate = document.querySelector('.rating')
window.addEventListener('load', () => {
    document.body.classList.remove('hide')
})
btns.forEach((e) => {
    e.addEventListener('click', (i) => {
        rate.innerHTML = `You have rated ${i.target.innerHTML} out of 5`;
        e.style.background = "hsl(216, 12%, 54%)";
        e.style.color = "black"
    })
})
let logo = document.querySelector('.logo')
let h = document.querySelector('.heading')
let details = document.querySelector('.details')
let box = document.querySelectorAll('.hide')
submit.addEventListener('click', () => {
    box.forEach((e) => {
        console.log(e);
        if (e.classList.contains('hide'))
            e.classList.toggle('hide')
        else
            e.classList.add('hide')

    })
    logo.classList.toggle('hide')
    h.classList.toggle('hide')
    details.classList.toggle('hide')
    rate.classList.remove('hide')
    btns.forEach((e) => {
        e.classList.toggle('hide')
    })
    submit.classList.toggle('hide')

})
