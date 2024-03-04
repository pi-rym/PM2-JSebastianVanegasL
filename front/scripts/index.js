
    const movieContainer = document.getElementById("movie-container");
  
    
    function mapDataToCards(data) {
      return data.map((movie) => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
  
        const title = document.createElement("h2");
        title.textContent = movie.title;
  
        const year = document.createElement("p");
        year.textContent = `Year: ${movie.year}`;
  
        const director = document.createElement("p");
        director.textContent = `Director: ${movie.director}`;
  
        const duration = document.createElement("p");
        duration.textContent = `Duration: ${movie.duration}`;
  
        const genre = document.createElement("p");
        genre.textContent = `Genre: ${movie.genre.join(", ")}`;
  
        const rate = document.createElement("p");
        rate.textContent = `Rate: ${movie.rate}`;
  
        
        const poster = document.createElement("img");
        poster.src = movie.poster;
        poster.alt = movie.title;
  
        
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(director);
        card.appendChild(duration);
        card.appendChild(genre);
        card.appendChild(rate);
        card.appendChild(poster);
  
        return card;
      });
    }
  
    const movieCards = mapDataToCards(tempData);
  
    
    movieCards.forEach((card) => movieContainer.appendChild(card));
;