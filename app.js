document.addEventListener('DOMContentLoaded', ()=>{
     
    const cardArray = [
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'hamburguer',
            img: 'images/hamburguer.png'
        },
        {
            name: 'hamburguer',
            img: 'images/hamburguer.png'
        },        
        {
            name: 'soda',
            img: 'images/soda.png'
        },
        {
            name: 'soda',
            img: 'images/soda.png'
        },
        {
            name: 'coffee',
            img: 'images/coffee.png'
        },
        {
            name: 'coffee',
            img: 'images/coffee.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'donut',
            img: 'images/donut.png'
        },
        {
            name: 'taco',
            img: 'images/taco.png'
        },
        {
            name: 'taco',
            img: 'images/taco.png'
        },
    ]

    cardArray.sort(()=> 0.5 - Math.random())
    
    const wrap = document.querySelector('.wrap')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon =[] 

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)    
            wrap.appendChild(card)
        }
    }
    

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('You have clicked the same image!')

        }else if (cardsChosen[0]===cardsChosen[1]){
            alert('You Found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'

        }

    }

    function flipCard(){

        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)

        }  

    }

    createBoard()


})

