
function atualizarRelogio(){

    var agora = new Date()
    
    var hora = window.document.getElementsByClassName('hora')
    var minuto = window.document.getElementsByClassName('minutos')
    var segundo = window.document.getElementsByClassName('segundos')
    
    var hora1 = String(agora.getHours()).padStart(2, "0")
    var minuto1 = String(agora.getMinutes()).padStart(2, "0")
    var segundo1 = String(agora.getSeconds()).padStart(2, "0");
    
    hora[0].innerText = hora1+':'
    minuto[0].innerText = minuto1+':'
    segundo[0].innerText = segundo1
}

atualizarRelogio()

setInterval(atualizarRelogio, 1000)
    


