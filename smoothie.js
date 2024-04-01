const smoothieForm = document.getElementById('form');
const smoothieOutput = document.getElementById('output');
const orderBtn = document.getElementById('order-button');

orderBtn.addEventListener('click', function() {
  const smoothie = new Smoothie(
      smoothieForm.elements.size.value,
      smoothieForm.elements.base.value,
      getSelectedFruits(),
      getSelectedAddins()
  );
  smoothieOutput.textContent = smoothie.getDescription();
});

function getSelectedFruits() {
  const fruits = [];
  const fruitCheckboxes = document.querySelectorAll('input[name="fruits[]"]:checked');
  for (const checkbox of fruitCheckboxes) {
    fruits.push(checkbox.value);
  }
  return fruits;
}

function getSelectedAddins() {
  const addins = [];
  const addinCheckboxes = document.querySelectorAll('input[name="addins[]"]:checked');
  for (const checkbox of addinCheckboxes) {
    addins.push(checkbox.value);
  }
  return addins;
}

class Smoothie {
  constructor(size, base, fruits, addins) {
    this.size = size;
    this.base = base;
    this.fruits = fruits;
    this.addins = addins;
  }

  getDescription() {
    const ingredients = [this.base];
    ingredients.push(...this.fruits);
    ingredients.push(...this.addins);

    const description = `Your ${this.size} smoothie with ${ingredients.join(', ')} is ready!`;
    return description;
  }
}