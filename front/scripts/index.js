
  const rendercards = require("./renderCards")
    
      $.get('https://students-api.2.us-1.fl0.io/movies', function(data){
          const movieCards = Cards(data);
          movieCards.forEach((card) => movieContainer.appendChild(card)) 
      });


