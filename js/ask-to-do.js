const inputToDo= document.getElementById('input-to-do');
const addButton= document.getElementById('btn-add');
const inpTittle= document.getElementById('inp-tittle');
const contToDo= document.getElementById('to-do');
let taskCount= 0;

addButton.addEventListener('click', ()=> {
    if (inputToDo.value.trim() !== ''){ //Esta condición es para ver si el input no está vacío
        if(taskCount < 5) { 

            let taskInput= inputToDo.value;
            let newDivWork= document.createElement('div');
            let textAsk= document.createElement('p');
            let tittleTask= document.createElement('h3');

            tittleTask.textContent= inpTittle.value.toUpperCase();

            textAsk.textContent= taskInput;

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.classList.add('delete-button');

            contToDo.appendChild(newDivWork);
            newDivWork.appendChild(textAsk);
            newDivWork.appendChild(tittleTask);
            newDivWork.appendChild(deleteButton);

            newDivWork.id = 'askDiv' + taskCount;  
            newDivWork.classList.add('askDiv');
            
            newDivWork.draggable = true;
            newDivWork.addEventListener('dragstart', dragStart);
        
            taskCount++;


            inputToDo.value= '';
            inpTittle.value= '';

            if (taskCount === 5) {
                addButton.disabled= true; 
            }

            deleteButton.addEventListener('click', () => {
                contToDo.removeChild(newDivWork);
                taskCount--;
                addButton.disabled = false;
              });
            } else {
              alert('Ya has creado el máximo de tareas, borra algunas');
            }
          } else {
            alert('Por favor ingrese una tarea válida');
          }
});

