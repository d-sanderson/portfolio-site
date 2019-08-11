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


