
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Seguro que quiere salir?</Text>
                <Button
                    onPress={() => this.handlerLogout()}
                    title="Logout"
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
