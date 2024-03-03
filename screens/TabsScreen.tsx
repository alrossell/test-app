import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabOne from './TabOne';
import TabTwo from './TabTwo';

type Props = NativeStackScreenProps<RootStackParamList, 'TabsScreen'>;

const Tab = createBottomTabNavigator();

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

const TabsScreen = ({ navigation }: Props) => { 
    return (
      <Tab.Navigator>
        <Tab.Screen name="TabOne" component={TabOne} />
        <Tab.Screen name="TabTwo" component={TabTwo} />
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

