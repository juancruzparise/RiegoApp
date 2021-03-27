import React, {Component} from 'react';
import {Icon} from "react-native-elements";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./Screens/LoginScreen";
import LogoutScreen from "./Screens/LogoutScreen";
import PlantasScreen from "./Screens/PlantasScreen";

const Tab = createBottomTabNavigator();

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {isLoggedIn:false}
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
                <NavigationContainer>
                    <Tab.Navigator initialRouteName="Plantas">
                    <Tab.Screen
                            name="Plantas"
                            component={PlantasScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Icon type="foundation" name="trees" color={color} size={size} />
                                    ),
                            }}
                        />
                        <Tab.Screen
                            name="Logout"
                            component={LogoutScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Icon type="antdesign" name="logout" color={color} size={size} />
                                    ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        } else {
            return <LoginScreen onLogin={() => this.setLogin()}/>
        }
    }

}