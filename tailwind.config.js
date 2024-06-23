/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {


      //**We can add special color and properties for use in our HTML doc, creting a new object with the keyword of what propertie we'll contain:

      colors: {

        'rojo-claro': '#d00000',
        'azul-oscuro': '#0023d0',
        'xlarge-green': '#1ddc2a',
        'large-yelow': '#f1d60d',
        'small-blue': '#0b42c2',
        'xsmall-red': '#fd0202',

        //*Page colors:

        'components-color': '#008DDA',
        'infoBox-color': '#41C9E2',
        'motherbox-color': '#F7EEDD',
        'color-background': '#41C9E2',

        //*Logo span color:
        'span-color': '#0518c1',
        'buttons-color': '#1229f5'

      }
    
    },
  },
  plugins: [],
}

