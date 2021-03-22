function sumar() {
          var num1 = parseInt(document.getElementById('valor1').value);
          var num2 = parseInt(document.getElementById('valor2').value);
          document.getElementById('resultado').innerHTML = (num1+num2);
        }

function restar() {
          var num1 = parseInt(document.getElementById('valor1').value);
          var num2 = parseInt(document.getElementById('valor2').value);
         document.getElementById('resultado').innerHTML = (num1-num2);
        }

function multiplicar() {
          var num1 = parseInt(document.getElementById('valor1').value);
          var num2 = parseInt(document.getElementById('valor2').value);
         document.getElementById('resultado').innerHTML = (num1*num2);
        }
function dividir() {
          var num1 = parseInt(document.getElementById('valor1').value);
          var num2 = parseInt(document.getElementById('valor2').value);
         document.getElementById('resultado').innerHTML = (num1/num2);
        }
function potencia() {
          var num1 = parseInt(document.getElementById('valor1').value);
          var num2 = parseInt(document.getElementById('valor2').value);
         document.getElementById('resultado').innerHTML = (num1**num2);
        }

function soloNumeros( evt ) 
{
    if ( window.event ) { // IE
        keyNum = evt.keyCode;
    } else {
        keyNum = evt.which;
    }

    if ( keyNum >= 48 && keyNum <= 57 ) {
        return true;
    } else {
        return false;
    }
}

function validacion(){
    if (document.getElementById('valor1').value == 0){
    alert ("Debe ingresar un número en la casilla 1");
        document.getElementById('valor1').focus();
    return 0;
    }
    if (document.getElementById('valor2').value == 0){
    alert ("Debe ingresar un número en la casilla 2");
        document.getElementById('valor2').focus();
    return 0;
    }
}
