// window.onload = function() {
// 	document.getElementById("start-button").onclick = function() {
// 		document.getElementById("title").style.display = "none";
// 		document.getElementById("game-board").style.display = "block";
// 		startGame();
// 	};

// };

var img = new Image();
img.src = "./images/bg_1200.svg";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var backgroundImage = {
  img: img,
  x: -5,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width - 3, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  }
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;
