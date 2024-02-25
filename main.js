window.addEventListener("DOMContentLoaded",(event)=>
{
 reset()
})
calcadd = false;
valor1 = ""
valor2 = ""
operador = ""
result = null
function parar()
{
  document.getElementById("calcmain").style.animation = "none";
}
function addvalor(valor)
{

 if(valor!="=")
 {
  if(valor !="+" && valor!= "-" && valor!= "*" && valor!= "/")
  {
    if(!calcadd)
    {
      document.querySelector('.calc').textContent += valor;
    }
    else
    {
     
      document.querySelector('.calc').textContent += valor;
      valor2 += valor;
      var valorr1 = Number(valor1)
      var valorr2 = Number(valor2)
      calcular(valorr1,valorr2,operador)
    }
  }
  else{
    calcadd = true
    switch(valor)
    {
      case "+":
       operador = valor
       if(result != null)
       {
        document.querySelector('.calc').textContent +=" " + valor;
        document.querySelector('.calc').textContent +=" "
        valor1 = result;
       }
       else{
       valor1 = document.querySelector('.calc').textContent;
       document.querySelector('.calc').textContent +=" " + valor;
       document.querySelector('.calc').textContent +=" ";}
      break;
      case "-":
        operador = valor
       if(result != null)
       {
        document.querySelector('.calc').textContent +=" " + valor;
        document.querySelector('.calc').textContent +=" "
        valor1 = result;
       }
       else{
       valor1 = document.querySelector('.calc').textContent;
       document.querySelector('.calc').textContent +=" " + valor;
       document.querySelector('.calc').textContent +=" ";}
       break;
      case"*":
      operador = valor
       if(result != null)
       {
        document.querySelector('.calc').textContent +=" " + valor;
        document.querySelector('.calc').textContent +=" "
        valor1 = result;
       }
       else{
       valor1 = document.querySelector('.calc').textContent;
       document.querySelector('.calc').textContent +=" " + valor;
       document.querySelector('.calc').textContent +=" ";}
      break;
      case "/":
        operador = valor
        if(result != null)
        {
         document.querySelector('.calc').textContent +=" " + valor;
         document.querySelector('.calc').textContent +=" "
         valor1 = result;
        }
        else{
        valor1 = document.querySelector('.calc').textContent;
        document.querySelector('.calc').textContent +=" " + valor;
        document.querySelector('.calc').textContent +=" "}
      break;
    }
  }
 }
 else{ 
  document.querySelector('.calc').textContent = "";
  var valorr1 = Number(valor1)
  var valorr2 = Number(valor2)
  calcular(valorr1,valorr2,operador)
}
  
}

function calcular(valorr1,valorr2,operador)
{
 
  switch(operador)
  {
    case"=":
     reset()
    break;
    case"+":
    result = valorr1 + valorr2;
    break;

    case"-":
    result = valorr1-valorr2
   
    break;
    case"*":
    result = valorr1*valorr2
   
    break;
    case"/":
    result = valorr1/valorr2
   
    break;
  }
}
function reset()
{
  calcadd = false;
  valor1 = ""
  valor2 = ""
  operador = ""
}
function resetAll()
{
  document.querySelector('.calc').textContent = ""
  calcadd = false;
  valor1 = ""
  valor2 = ""
  operador = ""
}