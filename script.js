

const ProdCode = document.querySelector('#prodId')
const DateId = document.querySelector('#DateID')


const OutPutCode = document.querySelector('.Code');
const OutPutDate = document.querySelector('.Date');


const btn = document.querySelector('.btn')





let RanDate;

let date;

//now i have taken all the outputs

btn.addEventListener('click', ()=>{

   

    if(ProdCode.value != ""){
        RanDate = Math.floor(Math.random() * (10 -5  + 1)) + 5;
        date = new Date(`2024, ${RanDate}`);
    }

  

    ProdCode.value = "";
  
    OutPutCode.innerHTML = ProdCode.value;
    DateId.value = date;
   
});



console.log(date);

