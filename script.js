

function readyNow() {
    $('#dog').on('click', addDog)
    $('#noDog').on('click', removeDog)
}

function addDog() {
    $('ul').append('<li>Dog</li>');
}



$(document).ready(readyNow)