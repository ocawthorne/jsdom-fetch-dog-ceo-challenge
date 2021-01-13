console.log('%c HI', 'color: firebrick')


const breedUrl = "https://dog.ceo/api/breeds/list/all"

function fetchImages() {
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
   fetch(imgUrl)
      .then(func => func.json())
      .then(results => {
         results.message.forEach(image => addImage(image))
      })
}

function addImage(url) {
   let container = document.querySelector('#dog-image-container')
   let newEl = document.createElement('img')
   newEl.src = url
   container.appendChild(newEl)
}

function fetchBreeds() {
   const breedUrl = "https://dog.ceo/api/breeds/list/all"
   fetch(breedUrl)
      .then(func => func.json())
      .then(results => {
         Object.keys(results.message).forEach(res => addBreed(res))
      })
}

function addBreed(breed) {
   let urlUL = document.querySelector('ul')
   let newLI = document.createElement('li')
   newLI.innerText = breed
   urlUL.appendChild(newLI)
}

document.addEventListener('DOMContentLoaded', function() {
   fetchImages()
   fetchBreeds()
})
