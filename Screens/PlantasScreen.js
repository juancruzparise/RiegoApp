
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { withTheme } from 'react-native-elements';
  
 

export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
            <View style={styles.container}>
              
                 
            </View>
            
        );
        
    }
    render() {
      
        return (
          
          <View style={styles.container} >
            <View style={styles.cards} >
              <View>
                <Image
                  source={require("../assets/planta1.jpg")}

                  style={{
                    height: 255,
                    width: 255
                  }}
                />
               
                
              </View>
              <View style={{ padding: 10, width: 230 }}>
                <Text style={styles.h1Text}>Planta 1</Text>
                <Text style={{ color: "#777", paddingTop: 5 }}>
                  Descripcion que va a tener la planta
                </Text>
                <Button style={styles.buttonStyle}
                    title="Riego auto"
                />
              </View>
            </View>
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
