const cardArray = [
  {
    name: 'chipmunk',
    img: 'p9/chipmunk-icon.png',
  },
  {
    name: 'bee',
    img: 'p9/bee-icon.png',
  },
  {
    name: 'ship',
    img: 'p9/ship-icon.png',
  },
  {
    name: 'bird',
    img: 'p9/bird-icon.png',
  },
  {
    name: 'monkey',
    img: 'p9/monkey-icon.png',
  },
  {
    name: 'porkipy',
    img: 'p9/porp-icon.png',
  },
  {
    name: 'elephant',
    img: 'p9/elephant-icon.png',
  },
  {
    name: 'horse',
    img: 'p9/horse-icon.png',
  },
  {
    neme: 'camel',
    img: 'p9/camel-icon.png',
  },

  {
    name: 'chipmunk',
    img: 'p9/chipmunk-icon.png',
  },
  {
    name: 'bee',
    img: 'p9/bee-icon.png',
  },
  {
    name: 'ship',
    img: 'p9/ship-icon.png',
  },
  {
    name: 'bird',
    img: 'p9/bird-icon.png',
  },
  {
    name: 'monkey',
    img: 'p9/monkey-icon.png',
  },
  {
    name: 'porkipy',
    img: 'p9/porp-icon.png',
  },
  {
    name: 'elephant',
    img: 'p9/elephant-icon.png',
  },
  {
    name: 'horse',
    img: 'p9/horse-icon.png',
  },
  {
    neme: 'camel',
    img: 'p9/camel-icon.png',
  },

]

cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'p9/pluto-icon.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'p9/pluto-icon.png')
      cards[optionTwoId].setAttribute('src', 'p9/pluto-icon.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'p9/ok.png')
      cards[optionTwoId].setAttribute('src', 'p9/ok.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'p9/pluto-icon.png')
      cards[optionTwoId].setAttribute('src', 'p9/pluto-icon.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
