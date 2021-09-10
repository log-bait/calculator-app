const reset = document.querySelector('#res');
const form = document.querySelector('form');
reset.addEventListener('click', ()=>{
    form.reset();
input.style.fontSize= "32px";

})
const numbers = document.querySelectorAll('.number');
const input = document.querySelector('.value');



numbers.forEach((number)=>{
    number.addEventListener('click', (e)=>{
values = number.innerText;
input.value += (values);
    })
})
//
const del = document.querySelector('.del');
del.addEventListener('click', ()=>{
    console.log('hihihi')
    input.value = input.value.slice(0, -1)
})


//
const operators = document.querySelectorAll('.operator');
const text = document.querySelector('.upper');
const numb = document.querySelector('.lower');

operators.forEach((operator)=>{
    operator.addEventListener('click', (e)=>{
input.value += operator.innerText;
text.value = input.value;
input.value = " ";

    })
})






//

const equal = document.querySelector('#equal');

equal.addEventListener('click', ()=>{
    if(text.value.includes('+')){
        let res = text.value.slice(0, -1)
        input.value = Number(res) + Number(input.value)
        if(input.value == "NaN"){
            input.value= "Syntax Error"
        }
        
    }
    else if(text.value.includes('-')){
        let res = text.value.slice(0, -1)
        input.value = Number(res) - Number(input.value)
    }
    else if(text.value.includes('*')){
        let res = text.value.slice(0, -1)
        input.value = Number(res) * Number(input.value)
    }
    else{
        let res = text.value.slice(0, -1)
        input.value= Number(res) / Number(input.value)
    }
    if(input.value == "NaN"){
        input.value= "Syntax Error"
    }
    text.value ="";
    input.style.fontSize= "40px";
})


//


const themes = document.querySelectorAll('input[type="radio"]');
const body = document.querySelector('body');
const section = document.querySelector('.section');
const display = document.querySelector('.display');
const pad = document.querySelector('.pad');
const header = document.querySelector('header');
const themenos = document.querySelector('.th-numbers');

themes.forEach((theme)=>{
    theme.addEventListener('click', ()=>{
        if(theme.value == 1){
            header.style.color="hsl(0, 0%, 100%)"
input.style.color= "hsl(0, 0%, 100%)"
text.style.color= "hsl(0, 0%, 100%)"
themenos.style.color = 'hsl(0, 0%, 100%)'
            body.style.backgroundColor="hsl(222, 26%, 31%)";
display.style.backgroundColor = "hsl(223, 31%, 20%)"
pad.style.backgroundColor="hsl(223, 31%, 20%)"
del.style.backgroundColor="hsl(222, 26%, 31%)"
del.style.borderBottom= "thick solid hsl(224, 28%, 35%)"
reset.style.backgroundColor="hsl(222, 26%, 31%)";
reset.style.borderBottom= "thick solid hsl(224, 28%, 35%)"
equal.style.backgroundColor ="hsl(6, 63%, 50%)"
equal.style.borderBottom = "thick solid hsl(6, 70%, 34%)"
numbers.forEach((number)=>{
    number.style.color="hsl(221, 14%, 31%)"
    number.style.backgroundColor ="hsl(30, 25%, 89%)"
    number.style.borderBottom = "thick solid hsl(28, 16%, 65%)"
})
operators.forEach((operator)=>{
    operator.style.color="hsl(221, 14%, 31%)"
    operator.style.backgroundColor ="hsl(30, 25%, 89%)"
    operator.style.borderBottom = "thick solid hsl(28, 16%, 65%)"

})
        }
        
        if(theme.value == 2){
            header.style.color = 'hsl(60, 10%, 19%)'
            body.style.backgroundColor='hsl(0, 0%, 90%)'
            input.style.color ="hsl(60, 10%, 19%)"
            text.style.color="hsl(60, 10%, 19%)"
            themenos.style.color = 'hsl(60, 10%, 19%)'
display.style.backgroundColor = "hsl(0, 0%, 93%)"
pad.style.backgroundColor="hsl(0, 5%, 81%)"
del.style.backgroundColor="hsl(185, 42%, 37%)"
del.style.borderBottom= "thick solid hsl(185, 58%, 25%)"
reset.style.backgroundColor="hsl(185, 42%, 37%)";
reset.style.borderBottom= "thick solid hsl(185, 58%, 25%)"
equal.style.backgroundColor ="hsl(25, 98%, 40%)"
equal.style.borderBottom = "thick solid hsl(25, 99%, 27%)"
numbers.forEach((number)=>{
    number.style.color="hsl(60, 10%, 19%)"
    number.style.backgroundColor ="hsl(45, 7%, 89%)"
    number.style.borderBottom = "thick solid hsl(35, 11%, 61%)"
})
operators.forEach((operator)=>{
    operator.style.color="hsl(60, 10%, 19%)"
    operator.style.backgroundColor ="hsl(45, 7%, 89%)"
    operator.style.borderBottom = "thick solid hsl(35, 11%, 61%)"

})
        }
        if(theme.value == 3){
            header.style.color ='hsl(52, 100%, 62%)'
            body.style.backgroundColor='hsl(268, 75%, 9%)'
            input.style.color ="hsl(52, 100%, 62%)"
            text.style.color="hsl(52, 100%, 62%)"
            themenos.style.color='hsl(52, 100%, 62%)'
            display.style.backgroundColor = "hsl(268, 71%, 12%)"
            pad.style.backgroundColor="hsl(268, 71%, 12%)"
            del.style.backgroundColor="hsl(281, 89%, 26%)"
            del.style.borderBottom= "thick solid hsl(285, 91%, 52%)"
            reset.style.backgroundColor="hsl(281, 89%, 26%)";
            reset.style.borderBottom= "thick solid hsl(285, 91%, 52%)"
            equal.style.backgroundColor ="hsl(176, 100%, 44%)"
            equal.style.borderBottom = "thick solid hsl(177, 92%, 70%)"
            numbers.forEach((number)=>{
                number.style.color="hsl(52, 100%, 62%)"
                number.style.backgroundColor ="hsl(268, 47%, 21%)"
                number.style.borderBottom = "thick solid hsl(285, 91%, 52%)"
            })
            operators.forEach((operator)=>{
                operator.style.color="hsl(52, 100%, 62%)"
                operator.style.backgroundColor ="hsl(268, 47%, 21%)"
                operator.style.borderBottom = "thick solid hsl(285, 91%, 52%)"
            
            })
        }
    })
})