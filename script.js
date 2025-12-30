const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

document.querySelectorAll('ul li').forEach(li => {
    const span = document.createElement("span");
    span.className = "close"
    span.textContent = '×';
    li.appendChild(span);

    span.addEventListener('click', (e) => {
        li.remove();
        e.stopPropagation();
    });

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    });
});

function addItem() {
    let text = input.value;
    if (text.trim() === "") return;

    const li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);

    const span = document.createElement("span");
    span.className = "close"
    span.textContent = '×';
    li.appendChild(span);

    span.addEventListener('click', () => {
        li.remove();
    });

    span.addEventListener('click', (e) => {
        li.remove();
        e.stopPropagation();
    });

    li.addEventListener('click', () => {
        li.classList.toggle('checked');
    });

    input.value = '';
}

button.addEventListener('click', addItem);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});