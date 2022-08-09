export default class Field {
  constructor(container) {
    this.container = container;
  }

  drawField() {
    for (let i = 0; i < 16; i += 1) {
      const cell = '<div class="cell"></div>';
      this.container.innerHTML += cell;
    }
  }
}
