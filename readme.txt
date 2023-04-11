movie-seat-booking interface

1. started off with a dropdown menu which shows movies available
dropdown movie options also have prices mentioned with them

2. next comes the important part of the area of selecting seats.
seats are arranged based on the layout in the actual room.
3. since it is a public domain, some seats are booked by other users which are marked in red.
these seats cannot be selected or booked by new users on the page.

4. coming on to booking seats. we can select n number of seats marked in grey which are available to book.
once selected, the seats will be highlighted in green and can be deselected as well.
on deselecting, they go back to grey and again become available to everyone.

5. next and the final thing is the summary line of the seat selection. once a user selects a movie and further selects a seat, the summary line is updated with the number of seats selected along with the price multiplied by the number of seats selected. this line will update on selecting and deselecting seats and also on changing movie title.

please note that on refreshing the page, the selections will be stored in local storage and the user need not worry about their selection resetting

js explanation
we get the elements first
1. seat selection area
2. not occupied seats
3. number of seats count
4. total price
5. movie select dropdown
6. movie price

first we add click on container on seats and not screen nor selected seats
then we get all the seats with selected class. then we get the length of selected seats
update the total seats in summary
and multiple seats with price we got up

then we go onto the dropdown. once there is a change in dropdown value, the price is updated and then we again run updateSelectedCount

on container click, we run updateSelectedCount
-------------------------------------------------------------------------- this ends the static part

now the local storage part

first we take the selected seats and get the index of those seats using map array method which brings out a new array
then we store the selected seats in local storage
since the selected seats are in an array, we need to use json.stringify

lastly, we store the movie index and price in local storage. we call that function in movie change event