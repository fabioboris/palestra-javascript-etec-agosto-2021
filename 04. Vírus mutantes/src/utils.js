const utils = {
  randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  constrain(num, min, max) {
    return Math.min(Math.max(num, min), max);
  },

  randColor() {
    return "#" + this.randInt(0, 0xffffff).toString(16);
  },
};

export { utils };
