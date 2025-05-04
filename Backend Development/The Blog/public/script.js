const openDialogBtn = document.getElementById('create-icon')
const modal = document.querySelector('.getInTouchContainer')
const closeBtn = document.querySelector('.close-button')
openDialogBtn.addEventListener('click',() => {
    modal.showModal()
})
closeBtn.addEventListener('click',() => {
    modal.close()
})