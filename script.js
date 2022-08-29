function getRandomColor() {
  function getRandomInt1(max) {
      return Math.floor(Math.random() * max);
    }

  function getRandomInt2(max) {
  return Math.floor(Math.random() * max);
  }

  function getRandomInt3(max) {
  return Math.floor(Math.random() * max);
  }

  let x = getRandomInt1(225);
  let y = getRandomInt2(225);
  let z = getRandomInt3(225);


  document.getElementById('body').style.backgroundColor = `rgb(${x} , ${y} , ${z})`;
  document.getElementById('color-p').innerHTML = `rgb(${x},${y},${z})`;

  if (x<120 || y<120 || z<120) {
    document.getElementById('color-p').style.color = 'white'
    document.getElementById('h1').style.color = 'white'
    document.getElementById('h11').style.color = 'white'
  }
}

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
      getRandomColor();
  }
}