// Selectors


document.querySelector("form").addEventListener("submit", handleEventForm);


// Event Handlers

function handleEventForm(event){
  event.preventDefault();
  let input = document.querySelector('input');
    if(input.value != "");
      addToDo(input.value);
      input.value = "";
}


function addToDo(todo){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');


  li.innerHTML = `

  <span class="todo_item">${todo}</span>
  <button name="checkButton"><i class="far fa-check-square"></i></button>
  <button name="deleteButton"><i class="far fa-trash-alt"></i></button>
  `;

  li.classList.add('todo_list_item');
  ul.appendChild(li);
}