/** @type {import('tailwindcss').Config} */
const {log} = require("node:util");
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

let lista = {
  obj1: {
    'title': 'titulo del producto1',
    'description': 'descripcion del producto 1',
    'price': 'precio p1',
    'id': 'id prod1'
  },
  obj2: {
    'title': 'titulo del producto1',
    'description': 'descripcion del producto 1',
    'price': 'precio p1',
    'id': 'id prod1'
  },
  obj3: {
    'title': 'titulo del producto1',
    'description': 'descripcion del producto 1',
    'price': 'precio p1',
    'id': 'id prod1'
  },
  user: {
    'nombre': 'nombre',
    'password':'password',
    'birthday': 'birthday'
  }
}

async function getProducts() {
  let data = await fetch(`${window.location}/get-productos`)
    .then(data => {
      return JSON.parse(data);
    })
}

for (const product in lista) {
  log()
}

