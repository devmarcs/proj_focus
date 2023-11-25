const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');

focoBt.addEventListener('click', () =>{
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);

    botoes.forEach((contexto) => {
        contexto.classList.remove('active');
    })

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = ` Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;

        case 'descanso-curto':
            titulo.innerHTML = ` Que tal dar uma respirada?<br> 
            <strong class= "app__title-strong">Faça uma pausa curta!</strong>`;
           
            break;
        
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar a superfície.<br> 
            <strong class= "app__title-strong">Faça uma pausa longa!</strong>`;
            
    }
}






/*const botoes = document.querySelectorAll('.app__card-button');
console.log(botoes);

botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        console.log(botao.getAtribute('data-contexto'));
        botao.currentTarget.getAtribute('data-contexto')
    });
})

function click () {
    
    
    console.log('saiu aqui');
}

const botaoSelect = () => {
    
}


for (let i = 0; i < botoes.length; i += 1) {

    botoes[i].addEventListener('click', () => {
        html.setAttribute('data-contexto', 'foco')
   })

}*/

