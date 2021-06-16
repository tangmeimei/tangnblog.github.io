function showNavMenu(e) {
    const event = e || window.Event
    console.log(event)
    const parent = event.target.parentElement;
    const ulMenu = parent.querySelector('ul');
    if (ulMenu.classList.contains('active')) {
        ulMenu.classList.remove('active');
    } else {
        ulMenu.classList.add('active');
    }
}