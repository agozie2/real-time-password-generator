const randomBtn = document.querySelector('.random');
const randomInput = document.querySelector('.randomInput');
const range = document.querySelector('.range')

range.onchange = function(event){
         document.querySelector('span').innerHTML = event.target.value;    
}


let words = "ABCDabcd1234@";
let password = '';
randomBtn.onclick = function(){
      password = '';
    for(let i=0;i<range.value;i++){
       let random =  Math.floor(Math.random() * words.length)
       password += words[random]
    }

    randomInput.value = password    
}




