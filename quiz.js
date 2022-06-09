let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual a principal obra do artísta Vicent Van Gogh?",
    alternativaA : "Comedores de batata",
    alternativaB : "Noite Estrelada",
    alternativaC : "Os girassóis",
    alternativaD : "Auto-Retrato",
    correta      : "Noite Estrelada",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "A arte pré-histórica foi produzida em qual período da humanidade?",
    alternativaA : "Após a invenção da escrita",
    alternativaB : "Após a invenção da roda",
    alternativaC : "Antes da invenção da escrita",
    alternativaD : "Antes da descoberta do fogo",
    correta      : "Antes da invenção da escrita",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "A arte egípcia está inserida em qual momento da história da arte?",
    alternativaA : "Arte na Antiguidade",
    alternativaB : "Arte no Renascimento",
    alternativaC : "Arte no período Pré-Colombiano",
    alternativaD : "Arte na Idade Comteporânia",
    correta      : "Arte na Antiguidade",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "A arte pré-colombiana foi produzidas pelos povos?",
    alternativaA : "Grego, Etrusco e Mesopotâmico",
    alternativaB : "Bizantino, Paeolítico e Neolítico",
    alternativaC : "Inca, Maia e Asteca",
    alternativaD : "Celta, Fenício e Germânico",
    correta      : "Inca, Maia e Asteca",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "A arte medieval teve suas características influenciadas pela?",
    alternativaA : "Religião dos povos bárbaros",
    alternativaB : "Igreja Católica",
    alternativaC : "Instituições estatais",
    alternativaD : "Trajes e tradições populares",
    correta      : "Igreja Católica",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "O romantismo e o neoclassicismo são vertentes artísticas que fizeram parte de qual período?",
    alternativaA : "Arte Moderna",
    alternativaB : "Arte Medieval",
    alternativaC : "Arte Renascentista",
    alternativaD : "Arte na 'Idade Contemporânea'",
    correta      : "Arte na 'Idade Contemporânea'",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "A arte contemporânea é aquela que, dentro do contexto histórico, é produzida mais recentemente. É expressão da arte contemporânea:",
    alternativaA : "Arte conceitual",
    alternativaB : "Arte barroca",
    alternativaC : "Arte etrusca",
    alternativaD : "Arte neoclássica",
    correta      : "Arte conceitual",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O modernismo no Brasil teve como destaque um evento importante, foi ele:",
    alternativaA : "Primeira Bienal de Arte",
    alternativaB : "Primeira exposição de Romero Britto",
    alternativaC : "Semana de 22",
    alternativaD : "Feira SP-Arte",
    correta      : "Semana de 22",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A Dança é uma expressão artística. Qual é o instrumento usado para que a dança seja executada?",
    alternativaA : "A dança usa imagens como instrumento",
    alternativaB : "A dança usa quadros como instrmentos",
    alternativaC : "A dança usa desenhos como instrumento ",
    alternativaD : "A dança usa o corpo como instrumento",
    correta      : "A dança usa o corpo como instrumento",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "A Obra O Grito, é de qual pintor famoso?",
    alternativaA : "Pablo Picasso",
    alternativaB : "Gustav Klimt",
    alternativaC : "Edvard Munch",
    alternativaD : "Sandro Botticelli",
    correta      : "Edvard Munch",
}
const q11 = {
    numQuestao   : 11,
    pergunta     : "A instalação Dengo transformou a sala do MAM-SP em um ambiente singular, explorando como principal característica artística a:",
    alternativaA : "Participação do público na interação lúdica com a obra.",
    alternativaB : "Distribuição de obstáculos no espaço da exposição.",
    alternativaC : "Representação simbólica de objetos oníricos.",
    alternativaD : "interpretação subjetiva da lei da gravidade.",
    correta      : "Participação do público na interação lúdica com a obra.",
}
const q12 = {
    numQuestao   : 12,
    pergunta     : "O grafite do artista paulista Speto, exposto no Museu Afro Brasil, revela elementos da cultura brasileira reconhecidos:",
    alternativaA : "Na influência da expressão abstrata.",
    alternativaB : "Na representação de lendas nacionais.",
    alternativaC : "Na inspiração das composições musicais.",
    alternativaD : "Nos traços marcados pela xilogravura nordestina.",
    correta      : "Nos traços marcados pela xilogravura nordestina.",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 120 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}