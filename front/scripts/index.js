
const Cards = require("./renderCards")
const axios = require('axios');

const asinCard = async ()=> {
  try {
    const response = await axios.get('https://students-api.2.us-1.fl0.io/movies');
    const movieCards = Cards(response.data);
    const movieContainer = document.getElementById("movie-container");
    movieCards.forEach((card) => movieContainer.appendChild(card));
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

asinCard();
