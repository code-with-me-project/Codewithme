// funciones para  arrastrar y soltar

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);
    
    // contenedor en el que se soltó
    const dropContainer = event.target.closest('.box');
  
    // Mover el elemento al nuevo contenedor
    if (dropContainer) {
        dropContainer.appendChild(draggedElement);
    }
  }
  
  