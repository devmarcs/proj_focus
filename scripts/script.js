const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

/*focoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'foco');
    console.log(focoBt);
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
})*/






const botoes = document.querySelectorAll('.app__card-button');
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

}

