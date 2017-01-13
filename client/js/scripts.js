$(document).ready(() => {

  $('#player_guess').click((event) => {
    event.preventDefault();
    let num = Math.floor((Math.random() * 10) + 1);
    // let num = 5;
    let guess = $('#guess').val();
    console.log('player guess: ', guess, 'rando num: ', num )
    guess === num.toString() ? $('#message').text('YOU WIN') : $('#message').text('Oh well... maybe next time');

    $('#guess').val('')
  });



});