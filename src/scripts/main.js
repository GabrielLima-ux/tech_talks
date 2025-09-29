AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaOTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaAteOevento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOevento / diaEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOevento % diaEmMs) / horaEmMs)
    const minutosAteOEvento = Math.floor(distanciaAteOevento % horaEmMs) / minutoEmMs
    const segundosAteOEvento = Math.floor((distanciaAteOevento % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOevento < 0) {
        clearInterval(contaOTempo)
        document.getElementById('contador').innerHTML = `Evento expirado`
    }
}, 1000)