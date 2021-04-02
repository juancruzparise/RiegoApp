import React, {Component} from 'react';
import {Icon} from "react-native-elements";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from "./Screens/LoginScreen";
import LogoutScreen from "./Screens/LogoutScreen";
import PlantasScreen from "./Screens/PlantasScreen";
import RegarScreen from "./Screens/RegarScreen";
 

const Stack = createStackNavigator();


function PlantasNavigator(){
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
                </Stack.Navigator>
            </NavigationContainer>
  )
} 

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
                            component={PlantasNavigator}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Icon type="foundation" name="trees" color={color} size={size} />
                                    ),
                            }}
                        />
                        <Tab.Screen
                            name="Cerrar Sesión"
                            children={()=><LogoutScreen onLogout={() => this.setLogout()}/>}
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

