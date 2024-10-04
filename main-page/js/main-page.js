const modalOverlay = document.querySelector('#modalOverlay')
const modalOverlayAdd = document.querySelector('#modalOverlayAdd')

const openModalBtn = document.querySelectorAll('#btn-mais')
const closeModal = document.querySelector('#close')
const closeAddModal = document.querySelector('#salvar-sair')
const addNewGame = document.querySelector('#adicionar')


openModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        document.querySelector('.modal').classList.add('active')
    });
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

closeAddModal.addEventListener('click', () => {
    modalOverlayAdd.classList.remove('active')
    document.querySelector('.modal-add').classList.remove('active')
});

modalOverlayAdd.addEventListener('click', (e) =>{
    if(e.target === modalOverlayAdd){
        modalOverlayAdd.classList.remove('active')
        document.querySelector('.modal-add').classList.remove('active')
    }
})