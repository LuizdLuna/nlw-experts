const perguntas = [
    {
        pergunta: "Qual será o curso da falculdade do Dedê?",
        respostas: [
            "Engenharia de Software",
            "Cyber Segurança",
            "Analise e Desenvolvimento de Sistemas",
        ],
        correta: 2
    },

    {
        pergunta: "O que o seu amor mais gostou de praticar na vida?",
        respostas: [
            "Andar de Skate",
            "Jogar Basquete",
            "Tocar Guitarra",
        ],
        correta: 1
    },

    {
        pergunta: "Do que o Luninha mais sente falta todos os dias?",
        respostas: [
            "Sair em rolê com os amigos",
            "Podzin dos cria",
            "Você (Sara Sakura Shimokawa)",
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o jogo favorito do seu neném atualmente?",
        respostas: [
            "Palworld",
            "Tekken",
            "Fortnite",
        ],
        correta: 1
    },

    {
        pergunta: "Qual foi o jogo que sua balinha citrus mais jogou na vida?",
        respostas: [
            "Fortinite",
            "Counte-Strike Global Offensive",
            "Apex Legends",
        ],
        correta: 1
    },
    
    {
        pergunta: "Qual é a parte do corpo da nena que o chickolittle mais gosta?",
        respostas: [
            "Sorriso",
            "Bunda",
            "Seios",
        ],
        correta: 0
    },

    {
        pergunta: "O que faz seu amorzinho se emocionar assistindo Interestelar?",
        respostas: [
            "Se apegar a dor de perder as pessoas",
            "Ver que o tempo pode ser traiçoeiro",
            "Compreender o sentimento de ser pai",
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o anime que seu xuxuzinho mais gosta?",
        respostas: [
            "Jujutsu Kaisen",
            "Bleach",
            "Dragon Ball",
        ],
        correta: 1
    },

    {
        pergunta: "Qual é a banda que estava tocando no primeiro dia de vuco vuco nosso? (Duvido acertar essa)",
        respostas: [
            "Sleep Token",
            "Slipknot",
            "Loathe",
        ],
        correta: 2
    },

    {
        pergunta: "Qual é o trio de cores favorito do seu mozão?",
        respostas: [
            "Preto, vermelho e roxo",
            "Preto, azul e vermelho",
            "Preto, branco e roxo",
        ],
        correta: 0
    },
]

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