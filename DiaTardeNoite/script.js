function carregar() {
    const agora = new Date();

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    // hora = 8;

    const horaFormatada = `${horas}:${minutos < 10 ? '0' + minutos : minutos}`;

    document.getElementById("horas").innerText = `Agora são ${horaFormatada} horas`;

    const saudacao = document.getElementById("mensagem");

    if (horas >= 6 && horas < 12) {
        saudacao.innerText = "Bom dia, como você está?";
        document.getElementById("imagem").src = "manha.jpg";
    } else if (horas >= 12 && horas < 18) {
        saudacao.innerText = "Boa tarde, espero que seu dia esteja indo bem!";
        document.getElementById("imagem").src = "tarde.jpg";
    } else {
        saudacao.innerText = "Boa noite, é hora de relaxar!";
        document.getElementById("imagem").src = "noite.jpg";
    }
}