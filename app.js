// declare panel variable-ALL
const panels = document.querySelectorAll('.panel');

// toggle 'open' to activate transition.
function toggleOpen() {
  console.log('wassaaap');
  this.classList.toggle('open');
}

// if the property includes the word "flex", then go ahead and toggle
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
// loops over panels to listen for event. when panel is clicked, activate 'open', which then transitions to increase the size of the panel. in plain english "when there is a click, call the toggleOpen function "
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//loops ober panels, and when the transition has been activated, call the toggleActive function. basically, inclick shrinks the pic back down 
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
