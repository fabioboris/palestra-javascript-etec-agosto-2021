(function () {
  let conf = {
    x: 0,
    y: 0,
    size: 40,
    speed: 10,
    color: "#666666",
    stepY: 0,
    stepX: 0,
  };

  let keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
  };

  let element = document.getElementById("bolinha");

  function constrain(num, min, max) {
    return Math.min(Math.max(num, min), max);
  }

  function updateDirection() {
    conf.stepX = constrain(conf.stepX, -1, 1);
    conf.stepY = constrain(conf.stepY, -1, 1);

    conf.x += conf.stepX * conf.speed;
    conf.y += conf.stepY * conf.speed;

    conf.x = constrain(conf.x, 0, window.innerWidth - conf.size);
    conf.y = constrain(conf.y, 0, window.innerHeight - conf.size);
  }

  function keyDown(ev) {
    if (ev.key == "ArrowLeft") conf.stepX--;
    else if (ev.key == "ArrowRight") conf.stepX++;
    if (ev.key == "ArrowUp") conf.stepY--;
    else if (ev.key == "ArrowDown") conf.stepY++;
  }

  function keyUp(ev) {}

  function click(ev) {
    conf.x = ev.clientX - conf.size / 2;
    conf.y = ev.clientY - conf.size / 2;
  }

  function updateElement() {
    updateDirection();

    element.style.left = conf.x + "px";
    element.style.top = conf.y + "px";
    element.style.width = conf.size + "px";
    element.style.height = conf.size + "px";
    element.style.borderRadius = conf.size / 2 + "px";
    element.style.backgroundColor = conf.color;
  }

  function updateSpeed() {
    conf.speed = parseInt(document.getElementById("speedSlider").value);
  }

  function updateSize() {
    conf.size = parseInt(document.getElementById("sizeSlider").value);
  }

  function updateColor() {
    conf.color =
      "#" + parseInt(document.getElementById("colorSlider").value).toString(16);
  }

  function init() {
    conf.x = (window.innerWidth - conf.size) / 2;
    conf.y = (window.innerHeight - conf.size) / 2;

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    document.addEventListener("click", click);

    document.getElementById("toolbar").addEventListener("click", function (ev) {
      ev.stopPropagation();
    });

    document
      .getElementById("speedSlider")
      .addEventListener("input", updateSpeed);

    document.getElementById("sizeSlider").addEventListener("input", updateSize);

    document
      .getElementById("colorSlider")
      .addEventListener("input", updateColor);

    window.setInterval(updateElement, 60);
  }

  window.addEventListener("load", init);
})();
