const movieContainer = document.getElementById("movie-container");
const Cards = require("./renderCards")
const axios = require('axios');

const asinCard = async ()=> {
  try {
    const response = await axios.get('http://localhost:3000/movies');
    const movieCards = Cards(response.data);
    movieCards.forEach((card) => movieContainer.appendChild(card));
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
asinCard();
