var capturando = ''

function criptografar() {   
    capturando = document.getElementById('input-texto').value.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g,'ufat')

        document.getElementById("output-texto").innerHTML = capturando
        
}

var descapturando = ''

function descriptografar(){

    descapturando = capturando.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output-texto').innerHTML = descapturando
}

var textoCopia = ''

function copiar() {
    textoCopia = document.getElementById('input-texto')
    textoCopia.select()
    document.execCommand('copy')
    alert('Texto Copiado.')
}

  