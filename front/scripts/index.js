
const Cards = require("./renderCards")
const axios = require('axios');

const asinMovie = async () =>{
try {
  const dataCards = await axios.get('https://students-api.2.us-1.fl0.io/movies')
  const movieCards = Cards(dataCards.data)
  movieCards.forEach((card) => movieContainer.appendChild(card));
} catch (error) {
  console.error("Error en los datos de la tarjet", error);
}
}

asinMovie()
