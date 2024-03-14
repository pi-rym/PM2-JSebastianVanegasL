const axios = require('axios');

const getMovies = async () => {
  try {
    const {data} = await axios.get('https://students-api.up.railway.app/movies');
   return data
  } catch (error) {
    throw new Error(error);
  }
}
  
  module.exports = { getMovies };