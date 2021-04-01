import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Switch} from 'react-native';
import { withTheme } from 'react-native-elements';
import {Icon} from "react-native-elements";
import { Input, CheckBox } from 'react-native-elements';

export default class RegarScreen extends Component{
    state = {  
        switchValue: false  
    };  

    render(){
        return (
            <View style={styles.container}>
                
            <View style={styles.texttodojunto}>
            <Image source={require('../assets/temperatura.png')} style={styles.icon} />
            <Text style={styles.innerTextt}>Temperatura : </Text>
            <Text style={styles.innerTextt}>35 ° C</Text>
            </View>

            <View style={styles.texttodojunto}>
            <Image source={require('../assets/humedad.png')} style={styles.icon} />
            <Text style={styles.innerTextt}>Humedad : </Text>   
            <Text style={styles.innerTextt}>60 % </Text> 
            </View>            
            {/* <Button style={styles.buttonStyle}
                onPress={() => this.handlerLogout()}
                title="Temperatura "
            /> */}
            <View style={styles.switchCointainer}>  
                <Text style={styles.textStyle}>Iniciar riego de planta</Text>  
                <Switch style={styles.switchStyle}
                    value={this.state.switchValue}  
                    onValueChange ={(switchValue)=>this.setState({switchValue})}/> 
                <Text style={styles.textStyle2}>{this.state.switchValue ? 'Encendido' :'Apagado'}</Text>   
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
    innerTextt:{
        textAlign: 'center',
        // fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
        
    },
    buttonStyle:{
  
    },
   cards:{
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    overflow: "hidden",
    color: '#1d1d1d'
     
   },
   icon: {
    transform: [{ rotate: '180deg'}],
    width: 35,
    height: 35
  },
  texttodojunto:{
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle:{  
    fontWeight: 'bold',  
    textAlign: 'center',  
    color: '#1d1d1d'
} ,
textStyle2:{
    textAlign: 'center',  
    // fontWeight: 'bold',   
    color: '#1d1d1d'
},
  switchCointainer:{
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    width: 250,
    height: 100,
    marginTop: 25,
    
},
switchStyle:{
   marginLeft:100,
   marginTop:15, 
},

});