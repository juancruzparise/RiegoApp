
import React, {Component} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

// Screens
import PlantasScreen from "../Screens/PlantasScreen";
import RegarScreen from "../Screens/RegarScreen";

const Stack = createStackNavigator();

export class PlantasNavigator extends Component {

    render(){
        return(
            <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName="Plantas">
                    <Stack.Screen
                             name="Plantas"
                             component={PlantasScreen}
                        />
                        <Stack.Screen
                            name="regar"
                            component={RegarScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
      )
    }
    
}