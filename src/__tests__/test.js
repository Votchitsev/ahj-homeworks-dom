/**
 * @jest-environment jsdom
 * @jest-environment-options {"html": "<div class='field-container'></div>"}
 */

import Field from '../js/Field';

const container = document.querySelector('.field-container');
const field = new Field(container);

test('Draw field', () => {
  field.drawField();
  expect(container.childNodes.length).toBe(16);
});
