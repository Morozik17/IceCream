(() => {
  const refs = {
     openModalBtn: document.querySelector('[data-modal-open]'),
     closeModalBtn: document.querySelector('[data-modal-close]'),
     modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
     refs.modal.classList.toggle('is-hidden');
  }
  })();
 
  (() => {
    const refs = {
      openFormBtn: document.querySelector('[data-form-open]'),
  
      closeFormBtn: document.querySelector('[data-form-close]'),
  
      form: document.querySelector('[data-form]'),
    };
  
    refs.openFormBtn.addEventListener('click', toggleForm);
  
    refs.closeFormBtn.addEventListener('click', toggleForm);
  
    function toggleForm() {
      refs.form.classList.toggle('is-hiddenForm');
    }
  })();