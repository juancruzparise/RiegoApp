import React, {Component} from 'react';
import {Icon} from "react-native-elements";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
import LogoutScreen from "./Screens/LogoutScreen";
import PlantasScreen from "./Screens/PlantasScreen";
import RegarScreen from "./Screens/RegarScreen";
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();

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

    /*HomeTabs(){
        if(this.state.isLoggedIn){
            return(
                <NavigationContainer independent={true}>
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
                            name="Cerrar Sesión"
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

    render(){
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={this.HomeTabs(this.state.isLoggedIn)} />
                <Stack.Screen name="Regar" component={RegarScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          );
    }
    */
    regar(){
        return (
            <NavigationContainer>
              <Drawer.Navigator>
                <Drawer.Screen name="Regar" component={RegarScreen} />
              </Drawer.Navigator>
            </NavigationContainer>
          );
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
                            name="Cerrar Sesión"
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

