const modalOverlay = document.querySelector('#modalOverlay')
const modalOverlayAdd = document.querySelector('#modalOverlayAdd')

const openModalBtn = document.querySelectorAll('#btn-mais')
const closeModal = document.querySelector('#close')
const closeAddModal = document.querySelector('#salvar-sair')
const addNewGame = document.querySelector('#adicionar')

const addModalForm = document.querySelector('#addModalForm')
const saveBtn = document.querySelector('#save')

const modalForm = document.querySelector('#modalForm')
const grid = document.querySelector('.colecao-de-jogos-grid')

const remove = document.querySelector('#delete')
const save = document.querySelector('#save')



let currentCard = null

const gamesCapes = [
    'castlevania sotn',
    'dark souls',
    'dark souls 2',
    'dark souls 3',
    'dark souls 2 sotfs',
    'final fantasy 7',
    'metal gear solid 2',
    'metal gear solid 3'

]

grid.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-mais') {
        modalOverlay.classList.add('active');
        document.querySelector('.modal').classList.add('active');
        currentCard = event.target.closest('.card')
    }
});

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    document.querySelector('.modal').classList.remove('active')
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active')
        document.querySelector('.modal').classList.remove('active')
    }
});


addNewGame.addEventListener('click', ()=>{
    modalOverlayAdd.classList.add('active')
    document.querySelector('.modal-add').classList.add('active')
})



modalOverlayAdd.addEventListener('click', (e) =>{
    if(e.target === modalOverlayAdd){
        modalOverlayAdd.classList.remove('active')
        document.querySelector('.modal-add').classList.remove('active')
    }
})

const createElement = (tag, className) =>{
    const element = document.createElement(tag)
    element.className = className
    return element
}

const createElementNoClass = (tag) =>{
    const element = document.createElement(tag)
    return element
}


addModalForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    const editForm = new FormData(addModalForm);
    const jogoSelecionado = document.querySelector(`#games option[value="${editForm.get('games')}"]`)
    const nota = document.querySelector(`#stars option[value="${editForm.get('stars')}"]`)

    const nomeJogo = editForm.get('nomeJogo');
    //const nota = editForm.get('nota');
    const review = editForm.get('review');

    console.log(`nome do jogo: ${nomeJogo}, nota: ${nota}, review: ${review}`);

    criarCard(jogoSelecionado, nota, review);

    // Feche o modal após salvar
    modalOverlayAdd.classList.remove('active');
    document.querySelector('.modal-add').classList.remove('active');

    addModalForm.reset();
});

function criarCard(jogoSelecionado, nota, review){
    const card = createElement('div', 'card')
    const img = createElementNoClass('img')
    const text = createElement('div', 'text')
    const h1Text = createElementNoClass('h1')
    const pText = createElementNoClass('p')
    const moreBtn = createElementNoClass('button')

    card.appendChild(img)
    card.appendChild(text)
    text.appendChild(h1Text)
    text.appendChild(pText)
    text.appendChild(moreBtn)
    

    moreBtn.id = 'btn-mais'

    moreBtn.innerHTML = '<i class="fa-solid fa-caret-down"></i>'

    h1Text.textContent = jogoSelecionado.textContent

    const nameGameLower = jogoSelecionado.textContent.toLowerCase().replace(/\s+/g, '')
    console.log(nameGameLower)
    img.alt = `${jogoSelecionado.textContent}`
    
    img.src = `src/${nameGameLower}.jpg`
 
    
    if(nota.textContent == 1){
        pText.textContent = 'w'
    }
    else if(nota.textContent == 2){
        pText.textContent = 'ww'
    }
    else if(nota.textContent == 3){
        pText.textContent = 'www'
    }
    else if(nota.textContent == 4){
        pText.textContent = 'wwww'
    }
    else if(nota.textContent == 5){
        pText.textContent = 'wwwww'
    }

    grid.appendChild(card)


}


remove.addEventListener('click', (event) =>{
    const cardElement = currentCard; // Seleciona o card mais próximo do botão clicado
    if (cardElement) {
        const nomeJogo = cardElement.querySelector('h1').textContent; // Pega o nome do jogo do h1 dentro do card
        removerCardPorNome(nomeJogo);
    
        modalOverlay.classList.remove('active');
        document.querySelector('.modal').classList.remove('active');
    } else {
        console.error("Card não encontrado!");
    }
})

function removerCardPorNome(nomeJogo) {
    const cards = document.querySelectorAll('.card'); // Seleciona todos os cards
    cards.forEach(card => {
        const title = card.querySelector('h1'); // Encontra o título dentro do card
        if (title && title.textContent === nomeJogo) {
            card.remove(); // Remove o card se o título corresponder
        }
    });
}

modalForm.addEventListener('submit', (event) =>{
    event.preventDefault()   
    console.log("Previniu o evento padrão")
    const card = currentCard
    if(card){
        const form = new FormData(modalForm)
        editar(card, form)
    }
    else {
        console.error("Nenhum card selecionado.");
    }
    modalForm.reset()
    modalOverlay.classList.remove('active');
    document.querySelector('.modal').classList.remove('active');

})

function editar(card, form){
    // Obtendo os novos valores do formulário
    const nomeJogoAtual = form.get('nomeJogo');
    const notaAtual = form.get('nota');
    const jogoSelecionado = document.querySelector(`#games option[value="${form.get('games')}"]`)
    const estrelas = document.querySelector(`#stars option[value="${form.get('stars')}"]`)

    console.log(`${jogoSelecionado.textContent}, ${notaAtual}`)
    
    const elements = card.querySelector('.text')

    // Atualizando o conteúdo do card
    const h1Element = elements.querySelector('h1');
    const notaElement = elements.querySelector('p');

    console.log(`${h1Element}, ${notaElement}`)

    if (h1Element && notaElement) {
        h1Element.textContent = jogoSelecionado.textContent;
        if(estrelas.textContent == 1){
            notaElement.textContent = 'w'
        }
        else if(estrelas.textContent == 2){
            notaElement.textContent = 'ww'
        }
        else if(estrelas.textContent == 3){
            notaElement.textContent = 'www'
        }
        else if(estrelas.textContent == 4){
            notaElement.textContent = 'wwww'
        }
        else if(estrelas.textContent == 5){
            notaElement.textContent = 'wwwww'
        }

        const nameGameLower = jogoSelecionado.textContent.toLowerCase().replace(/\s+/g, '')
        card.querySelector('img').src = `src/${nameGameLower}.jpg`
        card.querySelector('img').alt = `${jogoSelecionado.textContent}`

    } else {
        console.error("Elementos h1 ou p não encontrados no card.");
    }
}