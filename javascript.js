function atualizarTempo() {
  var displayHora = document.getElementById('display')

  var agora = new Date()
  var horas = agora.getHours()
  var minutos = agora.getMinutes()
  var segundos = agora.getSeconds()

  var horario = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos)

  displayHora.innerHTML = horario
}

function doisDigitos(numero) {
  if (numero<10) {
    numero = '0'+numero
  }
  return numero
}

atualizarTempo() //chamar antes do atualizar tempo para não inicializar com 00:00:00
setInterval(atualizarTempo, 1000)