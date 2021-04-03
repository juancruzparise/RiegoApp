import React, {Component} from 'react';
import { StyleSheet, Text, View, Switch} from 'react-native';
import {Icon} from "react-native-elements";

export default class RegarScreen extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          riego: false,
          temp: 35,
          humedad: 60
        };
    }

    render(){
        return (
           <View style={styles.container}>
                
            <View style={styles.texttodojunto}>
                <Icon type="entypo" name="thermometer" size={19}/>
                <Text style={styles.innerTextt}>Temperatura : {this.state.temp}°C</Text>
            </View>

            <View style={styles.texttodojunto}>
                <Icon type="entypo" name="water" size={19}/>
                <Text style={styles.innerTextt}>Humedad : {this.state.humedad}%</Text>   
            </View>            

            <View style={styles.switchCointainer}>  
                <Text style={styles.textStyle}>Iniciar riego de planta</Text>  
                <Switch style={styles.switchStyle}
                    value={this.state.riego}  
                    onValueChange ={(riego)=>this.setState({riego})}/> 
                <Text style={styles.textStyle2}>{this.state.riego ? 'Encendido' :'Apagado'}</Text>   
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
        fontSize: 16
        
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