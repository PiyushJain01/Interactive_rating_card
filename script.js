let submit = document.querySelector('.submit')
let btn = document.querySelectorAll('.btn')
let ratingtext = document.querySelector('.rating')
let flg = 0;
btn.forEach((e) => {
    e.addEventListener('click', (i) => {
        flg = 1
        ratingtext.innerHTML = `You have rated  ${i.target.innerHTML}  out of 5`;
        e.style.background = "hsl(216, 12%, 54%)";
    })
})
let logo = document.querySelector('.logo')
let heading = document.querySelector('.heading')
let details = document.querySelector('.details')
let box = document.querySelectorAll('.hide')
let buttons = document.querySelectorAll('.btns')
submit.addEventListener('click', () => {
    if (flg == 1) {
        box.forEach((e) => {
            e.classList.toggle('hide')
        })
        logo.classList.toggle('hide')
        heading.classList.toggle('hide')
        details.classList.toggle('hide')
        buttons.forEach((e) => {
            e.classList.toggle('hide')
        })
        submit.classList.toggle('hide')
    }
    else {
        alert("Can't submit without rating..!!")
    }
})
