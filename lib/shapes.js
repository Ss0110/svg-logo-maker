class Square {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    return `<rect width="200" height="200" style="fill:${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    return `<polygon points="150, 18 244, 182 56, 182" style="fill:${this.color}" />`;
  }
}

class Circle {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    return `<circle cx="100" cy="100" r="90" style="fill:${this.color}" />`;
  }
}

module.exports = { Square, Triangle, Circle };
