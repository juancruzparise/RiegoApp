import Firebase from './Firebase'

class Helpers{

    static setRiego(riego){


    }
    static getRiego(callback){
        Firebase.database().ref('/planta/riego').once('value').then(riego => {
            console.log('Riego: ', riego.val());
            let riegoPlanta = ''
            let tempPlanta = ''
            let humePlanta = ''
            if(riego.val()){
                riegoPlanta = riego.val()
            }
            if(temp.val()){
                tempPlanta = temp.val()
            }
            if(humedad.val()){
                humePlanta = humedad.val()
            }
            callback(riegoPlanta, tempPlanta, humePlanta)
          });
    }
}
 module.exports = Helpers;