const cuadradito_de_colores = document.getElementById('cuadradito_de_colores');

function cambiarColor(color) {
  const mapaColores = {
    rojo: '#ef4444',
    verde: '#10b981',
    azul: '#3b82f6'
  };
  const valor = mapaColores[color] || color;
  cuadradito_de_colores.style.backgroundColor = valor;
}
