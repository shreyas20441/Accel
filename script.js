

const ProdCode = document.querySelector('#prodId')
const DateId = document.querySelector('#DateID')


const OutPutCode = document.querySelector('.Code');
const OutPutDate = document.querySelector('.Date');


const btn = document.querySelector('.btn')





var RanDay;

var customeDate;

//now i have taken all the outputs

btn.addEventListener('click', ()=>{

   

    if(ProdCode.value != ""){
        RanDay = Math.floor(Math.random() * (30 - 11  + 1)) + 11;
    
        customeDate = new Date(2024, 3 , RanDay);

        var year = customeDate.getFullYear();
        var month = customeDate.getMonth();

        month+=1;

        console.log(month, year, RanDay);
        DateId.value = ` ${RanDay} / 0${month} / ${year}`;
       
     
    }

  

    ProdCode.value = "";
  
    OutPutCode.innerHTML = ProdCode.value;
   

    console.log(customeDate)
   
});




