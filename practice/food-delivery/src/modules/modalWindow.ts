function closeModal() {
  const modalWindow: HTMLElement = document.querySelector('.modal')

  modalWindow.classList.add('hide')
  modalWindow.classList.remove('show')
  document.body.style.overflow = ''
}

function openModal() {
  const modalWindow: HTMLElement = document.querySelector('.modal')

  modalWindow.classList.add('show')
  modalWindow.classList.remove('hide')
  document.body.style.overflow = 'hidden'
}
function userModalWindow(triggerSelector: string, modalSelector: string) {
  const modalTrigger: NodeListOf<Element> = document.querySelectorAll(triggerSelector)
  const modalWindow: HTMLElement = document.querySelector(modalSelector)

  modalTrigger.forEach(button => {
    button.addEventListener('click', openModal)
  })
  modalWindow.addEventListener('click', event => {
    if (
      event.target === modalWindow ||
      (event.target as HTMLElement).getAttribute('data-close') === ''
    ) {
      closeModal()
    }
  })
}
export { userModalWindow }
export { openModal }
export { closeModal }
