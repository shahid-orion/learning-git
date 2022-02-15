const button = document.querySelector('button')
button.addEventListener('click', () => {
  return setTimeout(() => {
    document.body.style.backgroundColor = '#34eb58'
  }, 3000)
})
