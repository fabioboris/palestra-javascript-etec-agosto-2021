import { utils } from "./utils";
import { config } from "./config";
import { model } from "./model";

const items = [];

function updateStyles() {
  items.forEach(function (item) {
    let el = document.getElementById(item.id);
    el.style.left = item.left + "px";
    el.style.top = item.top + "px";
    el.style.transform = "rotate(" + item.rotate + "deg)";
    el.style.width = item.size + "px";
    el.style.height = item.size + "px";
    el.style.fill = item.color;
  });
}

function updateItems() {
  items.forEach(function (item) {
    item.size = utils.constrain(
      item.size + utils.randInt(-item.speed, item.speed),
      config.size.min,
      config.size.max
    );
    item.rotate = utils.constrain(
      item.rotate + utils.randInt(-item.speed, item.speed),
      0,
      360
    );
    item.left = utils.constrain(
      item.left + utils.randInt(-item.speed, item.speed),
      0,
      config.window.width - item.size
    );
    item.top = utils.constrain(
      item.top + utils.randInt(-item.speed, item.speed),
      0,
      config.window.height - item.size
    );
  });
  updateStyles();
}

function updateSpeed() {
  items.forEach(function (item) {
    item.speed = utils.constrain(
      item.speed + utils.randInt(-item.speed, item.speed),
      config.speed.min,
      config.speed.max
    );
  });
}

function updateColors() {
  items.forEach(function (item) {
    item.color = utils.randColor();
  });
}

function updateWindowSize() {
  config.window.width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  config.window.height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
}

function init() {
  updateWindowSize();

  let models = [];
  document.querySelectorAll("#models svg").forEach(function (svg) {
    models.push(svg);
  });

  for (let i = 0; i < config.total; i++) {
    let element = models[utils.randInt(0, models.length - 1)].cloneNode(true);
    element.id = "svg" + i;
    document.querySelector("main").appendChild(element);
  }

  document.querySelectorAll("main svg").forEach(function (svg) {
    let item = { ...model };
    item.id = svg.id;
    item.size = utils.randInt(config.size.min, config.size.max);
    item.left = utils.randInt(0, config.window.width - item.size);
    item.top = utils.randInt(0, config.window.height - item.size);
    item.rotate = utils.randInt(0, 360);
    item.color = utils.randColor();
    item.speed = utils.randInt(config.speed.min, config.speed.max);
    items.push(item);
  });

  window.addEventListener("resize", updateWindowSize);

  window.setInterval(updateItems, 60);
  window.setInterval(updateColors, 3000);
  window.setInterval(updateSpeed, 6000);
}

const viruses = {
  init: init,
};

export { viruses };
