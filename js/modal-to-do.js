// MODAL TO-DO 

const modalToDo= document.querySelector('.modal-to-do');
const btnToDo= document.querySelector('.btn-to-do');
const overlay= document.querySelector('.overlay');
const closeBtn= document.querySelector('.btn-close')

btnToDo.onclick = function() {
    modalToDo.style.display = "block";
    overlay.style.display = "block";
  };

  closeBtn.onclick= closeModal;

  function closeModal() {
    modalToDo.style.display= 'none';
    overlay.style.display= 'none';
  };

  window.onclick = function(event) {
    if (event.target == overlay) {
      closeModal();
    }
  };