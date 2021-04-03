import Firebase from './Firebase'

class Helpers{

    static getRiego(){
        Firebase.database().ref('/planta/riego').once('value').then(riego => {
            console.log('Riego: ', riego.val());
            /*let riegoPlanta = ''
            if(riego.val()){
                riegoPlanta = riego.val()
            }
            callback(riegoPlanta)*/
            return (riego.val());
          });
    }
}

module.exports = Helpers;