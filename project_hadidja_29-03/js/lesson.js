// phone validator

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

// phoneButton.addEventListener('click', () => {
//     return console.log('New click')
// })

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    } else{
        phoneResult.innerHTML = 'not ok'
        phoneResult.style.color = 'red'
    }
}

// recursion