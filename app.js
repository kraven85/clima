

const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
                direccion:{
                  alias: 'd',
                  desc: 'direccion de la ciudad',
                  demand : true
                }
              }).argv;



let getInfo = async()=>{

  try{
    let coors = await lugar.getLugar(argv.direccion);
    let temp = await clima.getClima(coors.latitud,coors.longitud);

    return `El clima en ${ coors.direccion } es de ${ temp }`;
  }catch(e){
    return 'No se encontro';
  }


}


getInfo(argv.direccion)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));
