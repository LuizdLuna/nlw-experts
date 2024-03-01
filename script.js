const perguntas = [
    {
        pergunta: "Qual é a origem da corrida do queijo?",
        respostas: [
            "Inglaterra",
            "França",
            "Itália",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o objetivo principal da corrida do queijo?",
        respostas: [
            "Correr o mais rápido possível",
            "Capturar o queijo",
            "Chegar ao final da pista primeiro",
        ],
        correta: 1
    },
    {
        pergunta: "Em que tipo de terreno geralmente ocorre a corrida do queijo?",
        respostas: [
            "Plano",
            "Montanhoso",
            "Desértico",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o prêmio para o vencedor da corrida do queijo?",
        respostas: [
            "Dinheiro",
            "Um queijo gigante",
            "Troféu de ouro",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o perigo mais comum enfrentado pelos participantes da corrida do queijo?",
        respostas: [
            "Queimaduras solares",
            "Lesões musculares",
            "Quedas e contusões",
        ],
        correta: 2
    },
    {
        pergunta: "Quantos competidores geralmente participam da corrida do queijo?",
        respostas: [
            "Dez",
            "Vinte",
            "Cinquenta",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a data mais comum para a realização da corrida do queijo?",
        respostas: [
            "1 de janeiro",
            "25 de dezembro",
            "30 de maio",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a duração média da corrida do queijo?",
        respostas: [
            "1 hora",
            "30 minutos",
            "Menos de 2 minutos",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome da famosa corrida de queijo realizada na Inglaterra?",
        respostas: [
            "Queijo azul",
            "Queijo vermelho",
            "Queijo duplo Gloucester",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o principal motivo pelo qual as autoridades locais muitas vezes desaprovam a corrida do queijo?",
        respostas: [
            "Risco de danos ao meio ambiente",
            "Preocupações com a segurança dos participantes",
            "Preocupações com a saúde dos espectadores",
        ],
        correta: 1
    }
];

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }   
    
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}