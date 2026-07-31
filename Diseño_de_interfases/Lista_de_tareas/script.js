const entradaTarea = document.getElementById('entradaTarea');
const botonAgregarTarea = document.getElementById('botonAgregarTarea');
const listaTareas = document.getElementById('listaTareas');

function agregarTarea() {
  const texto = entradaTarea.value.trim();

  if (!texto) {
    entradaTarea.focus();
    return;
  }

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = texto;

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';
  botonEliminar.className = 'boton-eliminar';
  botonEliminar.addEventListener('click', () => li.remove());

  li.appendChild(span);
  li.appendChild(botonEliminar);
  listaTareas.appendChild(li);
  entradaTarea.value = '';
  entradaTarea.focus();
}

botonAgregarTarea.addEventListener('click', agregarTarea);

entradaTarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    agregarTarea();
  }
});
