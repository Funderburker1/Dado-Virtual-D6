let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado');
let btnSortear = document.querySelector('#btnSortear');
let sorteado = document.querySelector('#sorteado');
let dadoRolando = document.querySelector('#dadoRolando');

btnSortear.addEventListener('click', function () {
    //add a animação
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');

    //tocar o efito sonoro
    dadoRolando.play();

    //ocultar o botão sortear
    btnSortear.style.display = 'none';

    // usar setTimeout para executar as ações apos 1.75 segundos
    setTimeout(function () {
        //ARMAZENAR NUMERO SORTEADO NA VARIAVEL
        numeroSorteado = getRandomInt(1, 6);

        console.log(numeroSorteado)

        //definir atributo src com base no numero seguido
        imgDado.setAttribute('src', `images/dado/${numeroSorteado}.png`);
        //escrever no paragrafo numero sorteado
        sorteado.textContent = numeroSorteado;

        //exibir o botão sortear
        btnSortear.style.display = 'inline-block';

        //retirar a  animação
        imgDado.classList.remove('animar');
        sorteado.classList.remove('aparecer');
    }, 1750)
})

// FUNÇÃO que gera numero randomico inteiro
// incluindo o minimo e o maximo
function getRandomInt(min, max) {
    min = Math.ceil(min) // arredonda para cima ceil = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

