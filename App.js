const addButton = document.querySelector('.addButton');
let inputValue = document.querySelector('.input')
const container = document.querySelector('.container');

class Item {
    constructor(itemName) {
        this.itemName = itemName;
        this.id = Date.now();
        this.completed = false;
    }

    createItem() {
        const itemBox = document.createElement('div');
        itemBox.classList.add('item');
        itemBox.setAttribute('data-key', this.id);

        const input = document.createElement('input');
        input.value = this.itemName;
        input.disabled = true;
        input.classList.add('item_input');

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.classList.add('editButton');

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox');
        checkbox.checked = this.completed;
        checkbox.addEventListener('change', () => this.toggleState(checkbox));

        itemBox.appendChild(checkbox);

        const removeButton = document.createElement('button');
        removeButton.textContent = "Delete"
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', () => this.remove(itemBox));

        itemBox.appendChild(removeButton);

        container.appendChild(itemBox);

        editButton.addEventListener('click', () => this.edit(input));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(itemBox) {
        container.removeChild(itemBox)
    }

    toggleState(checkbox) {
        this.completed = checkbox.checked;
    }
}

addButton.addEventListener('click', () => {
    if (inputValue.value != "") {
        new Item(inputValue.value).createItem();
        inputValue.value = "";
    }
});