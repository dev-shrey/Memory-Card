// Card data
const cardsArray = [
  {
    name: 'shell',
    img: 'img/blueshell.png',
  },
  {
    name: 'star',
    img: 'img/star.png',
  },
  {
    name: 'bobomb',
    img: 'img/bobomb.png',
  },
  {
    name: 'mario',
    img: 'img/mario.png',
  },
  {
    name: 'luigi',
    img: 'img/luigi.png',
  },
  {
    name: 'peach',
    img: 'img/peach.png',
  },
  {
    name: '1up',
    img: 'img/1up.png',
  },
  {
    name: 'mushroom',
    img: 'img/mushroom.png',
  },
  {
    name: 'thwomp',
    img: 'img/thwomp.png',
  },
  {
    name: 'bulletbill',
    img: 'img/bulletbill.png',
  },
  {
    name: 'coin',
    img: 'img/coin.png',
  },
  {
    name: 'goomba',
    img: 'img/goomba.png',
  },
]

// grab the div of game area
const game = document.getElementById('game')

// Create a section with class name grid

const grid = document.createElement('section')
grid.setAttribute('class','grid')

// Append child in game div
game.appendChild(grid)


// for each loop for cardsArray
/*cardsArray.forEach((item)=>{
  const card = document.createElement('div')

  card.classList.add('card')

  // set the data-name attribute
  card.dataset.name = item.name

  card.style.backgroundImage = `url(${item.img})`

  grid.appendChild(card)
}) */


let gameGrid = cardsArray.concat(cardsArray)

gameGrid.sort(()=>0.5 - Math.random())

gameGrid.forEach((item)=>{
  const card = document.createElement('div')

  card.classList.add('card')

  // set the data-name attribute
  card.dataset.name = item.name

  // card.style.backgroundImage = `url(${item.img})`

  const front = document.createElement('div')
  front.classList.add('front')

  const back = document.createElement('div')
  back.classList.add('back')
  back.style.backgroundImage = `url(${item.img})`


  grid.appendChild(card)
  card.appendChild(front)
  card.appendChild(back)
})

let count = 0
let firstGuess = ''
let secondGuess = ''
let previousTarget = null
let delay = 1500

const match = ()=>{
  var selected = document.querySelectorAll('.selected')

  selected.forEach((card)=>{
    card.classList.add('match')
  })
}

// Reset function
const resetGuess = ()=>{
  firstGuess = ''
  secondGuess = ''
  count = 0

  var selected = document.querySelectorAll('.selected')
  selected.forEach((card)=>{
    card.classList.remove('selected')
  })
}

grid.addEventListener('click', function(event){
  let clicked = event.target

  if(clicked.nodeName==='SECTION' || clicked===previousTarget || clicked.parentNode.classList.contains('selected')){
    return 
  }

  if(count<2){
    count++

    if(count===1){
      firstGuess = clicked.parentNode.dataset.name
      console.log(firstGuess)
      clicked.parentNode.classList.add('selected')
    }else{
      secondGuess = clicked.parentNode.dataset.name
      console.log(secondGuess)
      clicked.parentNode.classList.add('selected')
    }

    if(firstGuess!=='' && secondGuess!==''){
      if(firstGuess===secondGuess){
        // match()
        // resetGuess()
        setTimeout(match,delay)
        setTimeout(resetGuess,delay)
      }
      else{
        // resetGuess()
        setTimeout(resetGuess,delay)
      }
    }
    // set previous target to clicked
    previousTarget = clicked
    console.log(previousTarget)
  }
})
