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

function toggleCityCart() {
    var buttonSpb = document.getElementById('button-spb');
    var buttonAnotherCity = document.getElementById('button-anothercity');
    var deletable = document.getElementById('deletable');
    if (onclick) {

    }
}

