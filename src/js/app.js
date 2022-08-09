import Field from './Field';

const container = document.querySelector('.field-container');
const field = new Field(container);
field.drawField();
field.moveGnome();
