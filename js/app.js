// A base class is defined using the new reserved 'class' keyword




// event Listeners
eventListeners();
function eventListeners() {
  const ui = new UI()
  // preloader
  window.addEventListener('load', function () {
    ui.hidePreloader();
  })
  // nav btn
  document.querySelector('.navBtn').addEventListener('click', function () {
    ui.showNav();
  })
  // control the video
  document.querySelector('.video__switch').addEventListener('click', function () {
    ui.videoControls()
  })
  // submit the form
  
    
  // display modal
  const links = document.querySelectorAll('.work-item__icon');


  links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      ui.showModal(event)
    })
  })
  // hide modal
  document.querySelector('.work-modal__close').addEventListener('click', function () {
    ui.closeModal()
  })


}







//constructor function
function UI() {
}

// hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector('.preloader').style.display = "none";
}
// show Nav
UI.prototype.showNav = function () {
  document.querySelector('.nav').classList.toggle('nav--show')
}
// play/pause the video
UI.prototype.videoControls = function () {
  let btn = document.querySelector('.video__switch-btn');
  if (!btn.classList.contains('btnSlide')) {
    btn.classList.add('btnSlide')
    document.querySelector('.video__item').pause()
  }
  else {
    btn.classList.remove('btnSlide')
    document.querySelector('.video__item').play()
  }
}
// check for empty values

  
// remove alert

// add customer

// show modal







// customer 
