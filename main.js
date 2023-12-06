const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const listContainer = document.getElementById('list-container');
const btn = document.querySelector('button');

inputEl.focus();

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputEl.value === '') {
    alert('You must write something.');
  } else {
    const li = document.createElement('li');
    li.textContent = inputEl.value;
    listContainer.prepend(li);
    formEl.reset();
    inputEl.focus();

    const span = document.createElement('span');
    span.textContent = '\u00d7';
    li.append(span);
  }
});

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
  }
}, false);