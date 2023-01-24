
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
//var hora = data.getHours()
var hora = 16

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    imagem.src = 'dia.png'
    document.body.style.background = 'rgb(231, 198, 150)'
}else if (hora >= 12 && hora < 18) {
    imagem.src = 'tarde.png'
    document.body.style.background = '#df722e'
}else{
    imagem.src = 'noite.png'
    document.body.style.background = '#2854c4'
}
}