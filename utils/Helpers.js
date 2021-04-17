import Firebase from './Firebase'

class Helpers{

    static getRiego(callback){
        Firebase.database().ref('/planta/riego').once('value').then(riego => {
            let riegoPlanta = ''
            if(riego.val()){
                riegoPlanta = riego.val()
            }
            callback(riegoPlanta)
          });
    }
    static getHumedadTierra(callback){
        Firebase.database().ref('/planta/humedadTierra').once('value').then(humedad => {
            let humedadPlanta = ''
            if(humedad.val()){
                humedadPlanta = humedad.val()
            }
            callback(humedadPlanta)
          });
    }
    static getHumedadAmbiente(callback){
        Firebase.database().ref('/planta/humedadAmbiente').once('value').then(humedad => {
            let humedadAmbiente = ''
            if(humedad.val()){
                humedadAmbiente = humedad.val()
            }
            callback(humedadAmbiente)
          });
    }
    static getTempAmbiente(callback){
        Firebase.database().ref('/planta/temperaturaAmbiente').once('value').then(temp => {
            let tempPlanta = ''
            if(temp.val()){
                tempPlanta = temp.val()
            }
            callback(tempPlanta)
          });
    }
    static setRiego(riego){
        Firebase.database().ref('/planta/riego').set(riego)
        console.log('Riego: ' + riego);
        
    }
}

module.exports = Helpers;

//export default Helpers;
