let button = document.getElementById('submitBtn');

button.addEventListener('click', addItem);

let list = document.querySelector('#list');


function addItem() {
  // <li>Take Brush <button id="delete">X</button></li>

  let inputText = document.getElementById('input').value;

  if (inputText !== '') {
    let newLi = document.createElement('li')
    let newBtn = document.createElement('button');
    newBtn.appendChild(document.createTextNode('X'));
    newBtn.className = 'delete';
    let text = document.createTextNode(inputText);
    newLi.appendChild(text);
    newLi.appendChild(newBtn);
    list.appendChild(newLi);
  }

  document.getElementById('input').value = '';
}

list.addEventListener('click', delteItem);

function delteItem(e){
  if (e.target.classList.contains('delete')){
    let delItem =  e.target.parentNode;
    list.removeChild(delItem);
  }
}


let clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click',delitems);

function delitems(){
  list.innerHTML = '';
}