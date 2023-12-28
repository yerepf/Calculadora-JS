let num1;
let num2;
let resultado;

function sumar() 
{
    getNumbers();
    resultado = parseFloat(num1) + parseFloat(num2);
    setResult();
}

function restar() 
{
    getNumbers();
    resultado = parseFloat(num1) - parseFloat(num2);
    setResult();
}

function dividir() 
{
    getNumbers();
    resultado = parseFloat(num1) / parseFloat(num2);
    setResult();
}

function multiplicar() 
{
    getNumbers();
    resultado = parseFloat(num1) * parseFloat(num2);
    setResult();
}

function getNumbers()
{
num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;
}

function setResult(){
    document.getElementById("resultado").innerHTML = resultado;
}
