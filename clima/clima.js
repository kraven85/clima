

const axios = require('axios');

const getClima = async( lat, lng) =>{

  let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=5f53d8b99f584f30b2d42fc1ddbaf801&units=metric`);

  if( respuesta.cod !== '200'){
    throw new Error('No hay resultados');
  }

  return respuesta.data.main.temp;
}

module.exports = {
  getClima
}
