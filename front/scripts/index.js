
    const movieContainer = document.getElementById("movie-container");
  
    
    function Cards(data) {
      return data.map((movie) => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="estiloimg">
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p>Duration: ${movie.duration}</p>
        <p>Genre: ${movie.genre.join(", ")}</p>
        <p>Rate: ${movie.rate}</p>`;
  
        return card;
      });
      
    }
    
      $.get('https://students-api.2.us-1.fl0.io/movies', function(data){
          const movieCards = Cards(data);
          movieCards.forEach((card) => movieContainer.appendChild(card)) 
      });


