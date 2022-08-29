const images = document.querySelectorAll('.slide-in')
const imageObserverOptions = {
  rootMargin: '-25% 0px -25%'
}

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
  // imageObserver is optional
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
    } else {
      entry.target.classList.remove('active')
    }
  })
}, imageObserverOptions)

images.forEach(image => {
  imageObserver.observe(image)
})