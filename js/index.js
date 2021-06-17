var nav = function () {
  function showNavMenu(e) {
    var event = e || window.Event;
    var parent = event.target.parentElement;
    var ulMenu = parent.querySelector('ul');

    if (ulMenu.classList.contains('active')) {
      ulMenu.classList.remove('active');
    } else {
      ulMenu.classList.add('active');
    }
  }

  return {
    showNavMenu: showNavMenu
  };
}(window);

window.onload = function () {};

window.onresize = function () {};