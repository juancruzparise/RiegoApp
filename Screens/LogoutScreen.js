
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.innerText}>¿Seguro que quiere salir?</Text>
                <Button style={styles.buttonStyle}
                    onPress={() => this.handlerLogout()}
                    title="Cerrar Sesión"
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
         
    },
    innerText:{
        color: '#FAFAFA',
        margin: 50
    },
    buttonStyle:{

    },
    
});
