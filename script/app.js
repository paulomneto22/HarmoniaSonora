const botoes = document.querySelectorAll(".som");
const audio = document.getElementById("audio");
const nomeSom = document.getElementById("nomeSom");
const imagemSom = document.getElementById("imagemSom");


botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        audio.pause();

        audio.currentTime = 0;

        audio.src = "assets/sons/" + botao.dataset.audio;

        audio.play();

        nomeSom.textContent = botao.textContent;

        const imagem = document.getElementById(botao.dataset.imagem);

        imagemSom.src = imagem.src;

    });

});