
    const movieContainer = document.getElementById("movie-container");
  
    
    function mapDataToCards(data) {
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
    function obtenerData(){
      $.get('https://students-api.2.us-1.fl0.io/movies', function(data){
        if(data && data.length >0){
          const movieCards = mapDataToCards(data);
          movieContainer.innerHTML= '';

          movieCards.forEach((card) => movieContainer.appendChild(card));
          
        }else{
          console.error('error al obtenr los datos')
        }
      })
    }
  obtenerData();
;


