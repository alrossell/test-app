import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { RootTabParamList } from './TabsScreen';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import client from "../api/apiClient"

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'TabThree'>;

type Book = {
    id: string
    title: string
    author: string
    year: string 
}

const TabThree: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hello from TabThree</Text>
        </View>
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
    listItem: {
        marginBottom: 10,
    },
});

export default TabThree;

