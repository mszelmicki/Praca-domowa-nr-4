const $inputTask = document.getElementById('inputTask');
const $addTaskButton = document.getElementById('addTaskButton');
const $taskList = document.getElementById('taskList');

$addTaskButton.addEventListener('click', createList);

function createList(event) {  
  if($inputTask.value == ''){
    alert('Nie wprowadzono danych');
  }else {
    const $li = document.createElement('li');
    const $editButton = document.createElement('button');
    const $deleteButton = document.createElement('button');
    $li.setAttribute('class', 'taskElement');
    $editButton.setAttribute('class', 'editButton');
    $editButton.textContent = 'Edytuj';
    $editButton.addEventListener('click', editElement);
    $deleteButton.setAttribute('class', 'deleteButton');
    $deleteButton.textContent = "Usuń";
    $deleteButton.addEventListener('click', deleteElement);
    $li.textContent = $inputTask.value;
    $li.appendChild($editButton);
    $li.appendChild($deleteButton);
    $taskList.appendChild($li);
    $inputTask.value = '';
  }
}

function deleteElement(event){
  event.preventDefault();
  this.parentNode.remove();
}

function editElement(event){
  event.preventDefault();
  const $thisButton = this;
  const $parent = this.parentNode;
  if($thisButton.textContent === 'Edytuj'){
    const $newInput = document.createElement('input');
    $newInput.type = 'text';
    $parent.firstChild.textContent = "";
    $parent.prepend($newInput);
    this.textContent = 'Zatwierdź zmiany';
  }else {
    const $newInput = $parent.firstChild;
    console.log($newInput.value);
    if($newInput.value === ''){
      alert('Nie wprowadzono nazwy zadania')
    }else{
      $parent.prepend($newInput.value);
      $newInput.remove();
      $thisButton.textContent = "Edytuj";
    }
  }
}