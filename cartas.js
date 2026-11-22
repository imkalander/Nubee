/* ===== ESPACIO SECRETO: cartas =====
   Para agregar una carta, copia un bloque entre llaves { ... } dentro de "cartas",
   cambia el id (un número distinto en cada carta), el título, la fecha y el texto.
   Cada texto entre comillas es un párrafo. Estas cartas no aparecen en la portada,
   ni en las listas, ni en el buscador: solo se ven al tocar el nombre «Nubee». */
const SECRETO={
  titulo:"Roma",
  intro:"",
  cartas:[
    {id:1, titulo:"Carta de ejemplo", fecha:"2026-11-22",
     texto:["Esta es una carta de ejemplo. Aquí aparecerá el texto de tus cartas, con sus párrafos.","Cuando me pases las tuyas, reemplazo esta por ellas."],
     firma:""}
  ]
};
