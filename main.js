const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')
let ticketPrice = +movieSelect.value;

populateUI()

// container click for not selected seats and not screen and not empty space
container.addEventListener('click', (event1) => {
    if(event1.target.classList.contains('seat') && !(event1.target.classList.contains('occupied'))){
        event1.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

// update summary ticket count and total price
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = ticketPrice * selectedSeatsCount
    
    const seatsIndex = [...selectedSeats].map((seat) => {
        return[...seats].indexOf(seat)
    })

    // since this is an array, we need to use JSON.stringify
    // we need to return the index of the seat selected
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
    
}

// movie select dropdown
movieSelect.addEventListener('change', (event2) => {
    ticketPrice = event2.target.value
    setMovieData(event2.target.selectedIndex, event2.target.value)
    updateSelectedCount()
})

// set movie index and price in local storage
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// get data from local storage
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats !== null && selectedSeats.length>0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }

// get movie index/name
const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex
    }
}

updateSelectedCount()
