const modalOverlay = document.querySelector('#modalOverlay')
const modalOverlayAdd = document.querySelector('#modalOverlayAdd')

const openModalBtn = document.querySelectorAll('#btn-mais')
const closeModal = document.querySelector('#close')
const closeAddModal = document.querySelector('#salvar-sair')
const addNewGame = document.querySelector('#adicionar')

const addModalForm = document.querySelector('#addModalForm')
const saveBtn = document.querySelector('#save')

const modalForm = document.querySelector('#modalFormSubmit')

const grid = document.querySelector('.colecao-de-jogos-grid')

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
    const nomeJogo = editForm.get('nomeJogo');
    const nota = editForm.get('nota');
    const review = editForm.get('review');

    console.log(`nome do jogo: ${nomeJogo}, nota: ${nota}, review: ${review}`);

    criarCard(nomeJogo, nota, review);

    // Feche o modal após salvar
    modalOverlayAdd.classList.remove('active');
    document.querySelector('.modal-add').classList.remove('active');

    addModalForm.reset();
});

function criarCard(nomeJogo, nota, review){
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

    h1Text.textContent = nomeJogo

    const nameGameLower = nomeJogo.toLowerCase().replace(/\s+/g, '')
    console.log(nameGameLower)
    img.alt = `${nomeJogo}`
    
    img.src = `src/${nameGameLower}.jpg`
 
    
    if(nota == 1){
        pText.innerHTML = '<p>w</p>'
    }
    else if(nota == 2){
        pText.innerHTML = '<p>ww</p>'
    }
    else if(nota == 3){
        pText.innerHTML = '<p>www</p>'
    }

    grid.appendChild(card)


}