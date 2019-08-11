let spans = document.querySelectorAll(".ltr")
let projectTagline = document.getElementById('projects-tagline').innerText;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval( () => {
  spans.forEach(span => span.style.color = getRandomColor(), 100000);
})

// setTimeout(function () {spans.forEach(span => setInterval( () => {
//   span.style.color = getRandomColor()
// ,20000}))}, 5000);

// CSS Animation of the project 
//inserts spans and class of either up or down on each letter for
let projectTaglineStr = document.getElementById('projects-tagline').innerText
let projectTaglineArr = projectTaglineStr.split('')
let output = projectTaglineArr.map( (el, i) => {
  if(i % 2 == 0) {
    el = `<span class="up">${el}</span>`
  }
  else {
    el = `<span class="down">${el}</span>`
  }
  return el;
})
document.getElementById('projects-tagline').innerHTML = output.join('')