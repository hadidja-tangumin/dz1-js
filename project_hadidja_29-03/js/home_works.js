//DZ-1/1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9_%+-]+([a-zA-Z]@gmail.com)$/;

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else{
        gmailResult.innerHTML = 'not ok'
        gmailResult.style.color = 'red'
    }
}

//DZ-1/2
let counter = 0
function moveBlock() {
    const child = document.querySelector('.child_block')
    child.style.left = `${counter}px`
    counter++
    if (counter <= 450){
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()
// console.log(`${counter}px`)