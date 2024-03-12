const movieContainer = document.getElementById("movie-container");
const Cards = require("./renderCards")
const axios = require('axios');

const asinCard = async ()=> {
  try {
    const response = await axios.get('https://students-api.up.railway.app/movies');
    const movieCards = Cards(response.data);
    movieCards.forEach((card) => movieContainer.appendChild(card));
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

asinCard();
