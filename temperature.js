
function temperature(arg){
num1=parseInt(document.querySelector("#celcuis").value)
num2=parseInt(document.querySelector("#fehrenheit").value)

if (arg==celcuis){

  ans=  (num1*9/5)+32;
  fehrenheit.value=ans;


}
else if(arg==fehrenheit){
    ans=  (num2-32)*5/9;
    celcuis.value=ans;


}


}
