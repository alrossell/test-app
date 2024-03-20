import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DisplayTab from './DisplayTab';
import InputTab from './InputTab';
import UserTab from './UserTab';

type Props = NativeStackScreenProps<RootStackParamList, 'TabsScreen'>;

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
  DisplayTab: undefined;
  InputTab: undefined;
  UserTab: undefined;
};

const TabsScreen = ({ navigation }: Props) => { 
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="DisplayTab" component={DisplayTab} />
            <Tab.Screen name="InputTab" component={InputTab} />
            <Tab.Screen name="UserTab" component={UserTab} />
      </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },
});

export default TabsScreen;

