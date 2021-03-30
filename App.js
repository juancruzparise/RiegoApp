import React, {Component} from 'react';
import {Icon} from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
import LogoutScreen from "./Screens/LogoutScreen";
import PlantasScreen from "./Screens/PlantasScreen";
import RegarScreen from "./Screens/RegarScreen";

const Stack = createStackNavigator();

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {isLoggedIn:true}
    }

    setLogin(){
        this.setState({isLoggedIn:true});
    }

    setLogout(){
        this.setState({isLoggedIn:false});
    }
    
    render(){
        if(this.state.isLoggedIn){
            return(
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Plantas">
                    <Stack.Screen
                            name="Plantas"
                            component={PlantasScreen}
                        />
                        <Stack.Screen
                            name="Regar"
                            component={RegarScreen}
                        />
                        <Stack.Screen
                            name="Logout"
                            component={LogoutScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            );
        } else {
            return <LoginScreen onLogin={() => this.setLogin()}/>
        }
    }
    
}

