import { StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import TabsScreen from './screens/Tabs/_layout';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    LoginScreen: undefined;
    TabsScreen: undefined;
    SettingsScreen: undefined;
    Details: { itemId: number; otherParam: string }; 
};

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{ 
                headerLeft: () => null, 
                headerShown: false 
            }}>
            <Stack.Screen name="LoginScreen" component= { LoginScreen } />
            <Stack.Screen name = "TabsScreen" component = { TabsScreen } /> 
            <Stack.Screen name="SettingsScreen" component= { SettingsScreen } />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
