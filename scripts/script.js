const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const btMusica = document.querySelector('#alternar-musica');
const iconeTroca = document.querySelector('.app__card-primary-butto-icon');
const temporizador = document.querySelector('#timer');
const musica = new Audio('/sons/musicRelax.mp3');
const pausamusic = new Audio('/sons/pause.mp3');
const playmusic = new Audio('/sons/play.wav');
const beepFim = new Audio('/sons/beep.mp3');
const startPauseBt = document.querySelector('#start-pause span');
let tempoDecorridoemSegundos = 1500;
let intervaloId = null;

musica.loop = true;


btMusica.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
        musica.volume = 0.4;
    }else{
        musica.pause();
    }
})

focoBt.addEventListener('click', () =>{
    tempoDecorridoemSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoemSegundos = 300;
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoDecorridoemSegundos = 900;
    alterarContexto('descanso-longo')
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    mostrarTempo();
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    })

    switch (contexto) {
        case 'foco':
            
            titulo.innerHTML = ` Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            startPauseBt.innerHTML = `Começar`;
            break;

        case 'descanso-curto':
            titulo.innerHTML = ` Que tal dar uma respirada?<br> 
            <strong class= "app__title-strong">Faça uma pausa curta!</strong>`;
            startPauseBt.innerHTML = `Começar`;
            break;
        
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar a superfície.<br> 
            <strong class= "app__title-strong">Faça uma pausa longa!</strong>`;
            startPauseBt.innerHTML = `Começar`; 
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoemSegundos <= 0) {
        beepFim.play();
        beepFim.currentTime = 2.5;
        beepFim.volume = 0.5;
        alert('Tempo Finalizado!');
        const  focoAtivo = html.getAttribute('data-contexto') === 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        zerarIntervalo();
        return 
    }
    tempoDecorridoemSegundos -= 1;
    mostrarTempo();
}


startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        pausamusic.play();
        zerarIntervalo();
        return
    }
    playmusic.play();
    startPauseBt.textContent = `Pausar`;
    iconeTroca.setAttribute('src', '/imagens/pause.png');
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerarIntervalo() {
    clearInterval(intervaloId);
    startPauseBt.textContent = `Retornar`;
    iconeTroca.setAttribute('src', '/imagens/play_arrow.png');
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoemSegundos * 1000);
    const tempoFormatado = tempo.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'});
    temporizador.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();


