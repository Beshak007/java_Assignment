let screen=document.getElementById('screen');
buttons =document.querySelectorAll('button');
let screenvalue='';



for(item of buttons){
    
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is',buttonText);
        


        
        if(buttonText == 'X'){
            buttonText='*';
            screenvalue += buttonText;
            screen.value=screenvalue;



        }
        else if (buttonText =='C'){
            screenvalue = "";
            screen.value= screenvalue;
            document.querySelector('#screen').classList.add('on')

        }
        else if (buttonText =='='){

            screen.value=eval(screenvalue);
            document.querySelector('#screen').classList.add('on')


        }
        else if(buttonText=='ON/OFF'){

            screenvalue = "";
            screen.value= screenvalue;
            document.querySelector('#screen').classList.toggle('on')
            
            


        }
        else{  screenvalue += buttonText;
            screen.value=screenvalue;
            document.querySelector('#screen').classList.add('on')
       
          
        



        }







    })



}