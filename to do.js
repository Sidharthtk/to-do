

const container = document.getElementById("container")
const button = document.getElementById('btn')
const input = document.getElementById('input');

button.addEventListener("click", () => {
    const text = input.value;
    const li = document.createElement('li');
    li.textContent = text;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    const update = document.createElement("button");
    update.textContent = "update";
    // button.remove();
    // input.remove();


    removeButton.addEventListener('click', () => {
        button.textContent = "add";
        // container.append(input,button)



        li.remove();
        removeButton.remove();

        update.remove();
    });
    update.addEventListener("click", () => {
        button.textContent = "add";
        container.append(button, input);
        removeButton.remove();
        update.remove();
        li.remove();


    })



    li.textContent = text;
    container.append(li, removeButton, update);
    input.value = "";

});    