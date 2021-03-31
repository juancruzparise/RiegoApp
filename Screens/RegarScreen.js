import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { withTheme } from 'react-native-elements';
  
 

export default class RegarScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.innerText}>Configuracion de la planta seleccionada</Text>
            <Button style={styles.buttonStyle}
                onPress={() => this.handlerLogout()}
                title="Temperatura "
            />
        </View>
        );
    }
}
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7CA1B4',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FAFAFA', 
    },
    innerText:{
        color: '#FAFAFA',
        margin: 50
    },
    buttonStyle:{
  
    },
   cards:{
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    overflow: "hidden",
    color: '#1d1d1d'
     
   },

});