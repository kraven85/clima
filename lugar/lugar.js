const axios = require('axios');

const getLugar = async(direccion) =>{

  let encodeUrl = encodeURI(direccion)
  let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

  if( respuesta.data.status === 'ZERO_RESULTS'){
    throw new Error('No hay resultados');
  }

  let latitud = respuesta.data.results[0].geometry.location.lat;
  let lng = respuesta.data.results[0].geometry.location.lng;
  let formatted_address=respuesta.data.results[0].formatted_address;

  return {
    latitud:  latitud,
    longitud: lng,
    direccion:formatted_address
  }
}

module.exports = {
  getLugar
}
