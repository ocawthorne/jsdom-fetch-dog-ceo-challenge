console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
   return fetch(imgUrl)
      .then(func => func.json())
      .then(json => renderImages(json))
}

function renderImages(json) {
   const image = document.querySelector('#dog-image-container')
   json.forEach(image => {
      debugger
   })
}
document.addEventListener('DOMContentLoaded', fetchImages())
