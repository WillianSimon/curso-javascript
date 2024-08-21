function carregar (){
var divHoras = document.querySelector('div.divHoras')
var img = document.querySelector('img.imagem')
var data = new Date()
var hora = data.getHours()

divHoras.innerHTML = `Agora são ${hora} horas.`
if (hora >=6 && hora <16){
    // Bom dia!
    img.src = 'Manhã.png'
    document.body.style.backgroundColor = '#d8ac3e'
}
else if (hora >=16 && hora <19){
    // Boa tarde!
    img.src = 'Tarde.png'
    document.body.style.backgroundColor = '#fd7e5d'
}
else {
    // Boa noite!
    img.src = 'Noite.png'
    document.body.style.backgroundColor = '#131d1e'
}
}
