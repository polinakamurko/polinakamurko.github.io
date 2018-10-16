function toggleHamburger() {
    var leftwrapper = document.getElementById('leftwrapper');
    var rightMenu = document.getElementById('right-menu');
    var navbar = document.getElementById('navbar');
    var hamburger = document.getElementById('hamburger');
    if (leftwrapper.className == 'closedmenu') {
        leftwrapper.className = 'openedmenu';
        rightMenu.className = 'openedmenu';
        navbar.style.height = '320px';
        hamburger.className = 'openedhamburger';
        } else {
        leftwrapper.className = 'closedmenu';
        rightMenu.className = 'closedmenu';
        navbar.style.height = '90px';
        hamburger.className = ' ';
    }
}

var modal = document.getElementById('simpleModal')
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    console.log("Open")
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

function toggleCityCart(button) {
    var buttonSpb = document.getElementById('button-spb');
    var buttonAnotherCity = document.getElementById('button-anothercity');
    var deletable = document.getElementsByClassName('deletable');

    if (button.innerHTML=='Санкт-Петербург') {
        for (let index = 0; index < deletable.length; index++) {
            const element = deletable[index];
            element.style.display = "none";
        }   
    } else {
        for (let index = 0; index < deletable.length; index++) {
            const element = deletable[index];
            element.style.display = "block";
        }
    }
}