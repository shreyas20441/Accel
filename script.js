

const ProdCode = document.querySelector('#prodId')
const DateId = document.querySelector('#DateID')


const OutPutCode = document.querySelector('.Code');
const OutPutDate = document.querySelector('.date');


const btn = document.querySelector('.btn')

//now i have taken all the outputs

btn.addEventListener('click', DisplayOut);

function DisplayOut(){

     OutPutCode.innerHTML = ProdCode.value;
    OutPutDate.innerHTML = DateId.value;
    console.log("Working date")
}

