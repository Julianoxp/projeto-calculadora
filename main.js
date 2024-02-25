window.addEventListener("DOMContentLoaded",(event)=>
{
  calcadd = false;
  valor1 = ""
  valor2 = ""
  operador = ""
  result = null
  //resetAll()
})

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
          
        }
      }
      else{
        calcadd = true
        switch(valor)
        {
          case "+":
          
          if(operador != '')
          {
            
            if(operador != valor || valor2 !='')
            {
              calcular(valor1,valor2,operador)
              operador = valor
              document.querySelector('.calc').textContent +=" "
              document.querySelector('.calc').textContent +=" " + valor;
              document.querySelector('.calc').textContent +=" "
            }
            valor1 = result;
            valor2 = ''     
          }
          else{
            if(document.querySelector('.calc').textContent == ""){
              operador = valor
              valor1 = "0";
              document.querySelector('.calc').textContent += valor1 +" " + valor;
              document.querySelector('.calc').textContent +=" ";
            }
            else{
              operador = valor
              valor1 = document.querySelector('.calc').textContent;
              document.querySelector('.calc').textContent +=" " + valor;
              document.querySelector('.calc').textContent +=" ";
            }
          }
          break;
          case "-":
            if(operador != '')
            {
              
              if(operador != valor || valor2 !='')
              {
                calcular(valor1,valor2,operador)
                operador = valor
                document.querySelector('.calc').textContent +=" "
                document.querySelector('.calc').textContent +=" " + valor;
                document.querySelector('.calc').textContent +=" "
              }
              valor1 = result;
              valor2 = ''
            
            }
            else{
              if(document.querySelector('.calc').textContent == ""){
                operador = valor
                valor1 = "0";
                document.querySelector('.calc').textContent += valor1 +" " + valor;
                document.querySelector('.calc').textContent +=" ";
              }
              else{
                operador = valor
                valor1 = document.querySelector('.calc').textContent;
                document.querySelector('.calc').textContent +=" " + valor;
                document.querySelector('.calc').textContent +=" ";
              }
          }
          case"*":
          if(operador != '')
          {
            
            if(operador != valor || valor2 !='')
            {
              calcular(valor1,valor2,operador)
              operador = valor
              valor1 = result
              valor2 = ''
              document.querySelector('.calc').textContent +=" "
              document.querySelector('.calc').textContent +=" " + valor;
              document.querySelector('.calc').textContent +=" "
            }
            
          }
          else{
            if(document.querySelector('.calc').textContent == ""){
              resetAll()
            }
            else{
              operador = valor
              valor1 = document.querySelector('.calc').textContent;
              document.querySelector('.calc').textContent +=" " + valor;
              document.querySelector('.calc').textContent +=" ";
            }
          }
          break;
          case "/":
          if(operador != '')
          {
            
            if(operador != valor || valor2 !='')
            {
              calcular(valor1,valor2,operador)
              operador = valor
              valor1 = result
              valor2 = ''
              document.querySelector('.calc').textContent +=" "
              document.querySelector('.calc').textContent +=" " + valor;
              document.querySelector('.calc').textContent +=" "
            }
                      
          }
          else{
            if(document.querySelector('.calc').textContent == ""){
         
              resetAll()
            }
            else{
              operador = valor
              valor1 = document.querySelector('.calc').textContent;
              document.querySelector('.calc').textContent +=" " + valor;
              document.querySelector('.calc').textContent +=" ";
            }
          }
          break;
        }
      }
    }
    else{ 
      //document.querySelector('.calc').textContent = "";
      if(valor1 != "")
      {
        calcular(valor1,valor2,operador)
        mostrarResult()
      }
    }
  } 


function calcular(valor1,valor2,operador)
{
  var valorr1 = Number(valor1)
  var valorr2 = Number(valor2)
  switch(operador)
  {
    
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
  result = null
}
function resetAll()
{
  document.querySelector('.calc').textContent = ""
  calcadd = false;
  valor1 = ""
  valor2 = ""
  operador = ""
  result = null
}
function mostrarResult()
{
  
  document.querySelector('.calc').textContent = ""
  document.querySelector('.calc').textContent = result
  
}