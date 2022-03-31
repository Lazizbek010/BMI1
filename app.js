let nameEl = document.querySelector('.name')
let weightEl = document.querySelector('.weight')
let heightEl = document.querySelector('.height')
let btn = document.querySelector('.btn')
let parentModal = document.querySelector('.parent-modal')
let modalHeader = document.querySelector('.modal-header')
let closeBtn = document.querySelector('.close-btn')
let image = document.querySelector(".image")

btn.addEventListener('click', ()=>{
    let nameValue = nameEl.value.trim()
    let weight = weightEl.value
    let height = heightEl.value
    let bmi = (weight/ (height * height)).toFixed(1)
    let result = bmi
    parentModal.style.display = 'block'
    modalHeader.style.color = 'red'
    if( nameEl.value == "" && weightEl.value == "" && heightEl.value ==""){
        modalHeader.textContent = `??? Your BMI is ???`
    }else{
        if(result < 18.5){
            modalHeader.textContent = `${nameValue} Your BMI is Underweight(${result})`
            image.src = 'images/Underweight.jpg'
        }else if( 18.5 <= result && result <= 24.9){
            modalHeader.textContent = `${nameValue} Your BMI is Normalweight(${result})`
            image.src = 'images/Normalweight.jpg'
        }else if(25 <= result && result <= 29.9){
            modalHeader.textContent = `${nameValue} Your BMI is Overweight(${result})`
            image.src = 'images/Overweight.jpg'
        }else{
            modalHeader.textContent = `${nameValue} Your BMI is Obesity(${result})`
            image.src = 'images/Obesity.jpg'
        }
    }
})

closeBtn.addEventListener("click", ()=>{
    parentModal.style.display = 'none'

})


















