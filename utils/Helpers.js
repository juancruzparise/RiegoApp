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
    static getHumedad(callback){
        Firebase.database().ref('/planta/humedad').once('value').then(humedad => {
            let humedadPlanta = ''
            if(humedad.val()){
                humedadPlanta = humedad.val()
            }
            callback(humedadPlanta)
          });
    }
    static getTemp(callback){
        Firebase.database().ref('/planta/temp').once('value').then(temp => {
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
