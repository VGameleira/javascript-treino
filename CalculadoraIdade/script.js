function verificar() {

    let anos = window.document.getElementById("ano")
    let sexo = window.document.getElementById("sexo")
    let texto = window.document.getElementById("texto")
    let img = window.document.getElementById("imagem")

    let ano = number(anos.value)
    let idade = 2023 - ano
    let genero = ""

    if (sexo[0].checked) {
        genero = 'M'
    } else {
        genero = 'F'
    }

    switch (genero) {
        case 'M':
            if (idade > 124 || idade < 1) {
                texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2023)'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2023)')
                img.style.display = 'none'
            } else if (idade <= 2) {
                texto.innerText = `Você é um bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'bebemenino.png'
            } else if (idade < 14) {
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'criancamenino.webp'
            } else if (idade < 18) {
                texto.innerText = `Você é um adolescente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'adolescentemasc.jpg'
            } else if (idade < 65) {
                texto.innerText = `Você é um homem de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'homem.jpg'
            } else {
                texto.innerText = `Você é um senhor de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'idoso.jpg'
            }
            break
        case 'F':
            if (idade > 124 || idade < 1) {
                texto.innerText = 'ERRO - Digite uma data válida (De 1900 à 2023)'
                window.alert('[ERRO] - Digite uma data válida (De 1900 à 2023)')
                img.style.display = 'none'
            } else if (idade <= 2) {
                texto.innerText = `Você é um bebê de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'bebemenina.png'
            } else if (idade < 14) {
                texto.innerText = `Você é uma criança de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'criancamenina.webp'
            } else if (idade < 18) {
                texto.innerText = `Você é um adolescente de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'adolescentefem.jpg'
            } else if (idade < 65) {
                texto.innerText = `Você é um mulher de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'mulher.jpg'
            } else {
                texto.innerText = `Você é um senhora de ${idade} anos!`
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.paddingBottom = '10px'
                img.src = 'idosa.jpg'
            }
            break

    }

}