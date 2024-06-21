/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {


      //**We can add special color and properties for use in our HTML doc, creting a new object with the keyword of what propertie we'll contain:

      colors: {

        'rojo-claro': '#d00000',
        'azul-oscuro': '#0023d0'

      }
    
    },
  },
  plugins: [],
}

