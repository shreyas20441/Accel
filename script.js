

const ProdCode = document.querySelector('#prodId')
const DateId = document.querySelector('#DateID')


const OutPutCode = document.querySelector('.Code');
const OutPutDate = document.querySelector('.date');


const btn = document.querySelector('.btn')

// 5 t0 10
const min = 5;
const max = 10;

const randomDate = Math.floor(Math.random() * (10 -5  + 1)) + 5;

const date = new Date(`2024, ${randomDate}`);
//now i have taken all the outputs

btn.addEventListener('click', DisplayOut);




function DisplayOut(){

     OutPutCode.innerHTML = ProdCode.value;
     DateId.value = date;
    console.log("Working date")
    

  
}

console.log(date);

