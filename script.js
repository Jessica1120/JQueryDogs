

function readyNow() {
    $('#dog').on('click', addDog)
    $('#noDog').on('click', removeDog)
}

function addDog() {
    $('ul').append('<li>Dog</li>');
}

function removeDog() {
    $('li').last().remove();
}

$(document).ready(readyNow)