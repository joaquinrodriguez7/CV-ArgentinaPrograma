const nombre = "Joaquín Rodríguez García"
const email = "joaquinrodriguezgarcia1@gmail.com"
const cel = "(2317) 15-508492"
const ciudad = "La Plata, Buenos Aires, Argentina"
const edad = "16/07/1996"

function extraerParrafo(info){
   return document.getElementById("p-info").innerHTML = info
}

document.getElementById("btn1").addEventListener("click", function()  {extraerParrafo(nombre)})
document.getElementById("btn2").addEventListener("click", function()  {extraerParrafo(email)} )
document.getElementById("btn3").addEventListener("click", function()  {extraerParrafo(cel)})
document.getElementById("btn4").addEventListener("click", function()  {extraerParrafo(ciudad)})
document.getElementById("btn5").addEventListener("click", function()  {extraerParrafo(edad)})

const abrirModal = document.getElementById('btnCertificado');
const modalContainer = document.getElementById('modalContainer');
const cerrarModal = document.getElementById('cerrarModal');

abrirModal.addEventListener('click', () => {
  modalContainer.classList.add('mostrar');  
});

cerrarModal.addEventListener('click', () => {
  modalContainer.classList.remove('mostrar');
});

modalContainer.addEventListener('click', () => {
    modalContainer.classList.remove('mostrar');
  });
