$(document).ready(() => {

  $('#player_guess').click((event) => {
    event.preventDefault();
    let num = Math.floor((Math.random() * 10) + 1);
    let guess = $('#guess').val();
    console.log('player guess: ', guess, 'rando num: ', num )
    $('#guess').val('')
  });



});