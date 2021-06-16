
let nav = (function () {

    function showNavMenu(e) {
        const event = e || window.Event
        const parent = event.target.parentElement;
        const ulMenu = parent.querySelector('ul');
        if (ulMenu.classList.contains('active')) {
            ulMenu.classList.remove('active');
        } else {
            ulMenu.classList.add('active');
        }
    }

    return {
        showNavMenu
    }

}(window));


window.onload = function () {


}

window.onresize = function () {

}