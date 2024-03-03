import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../App';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'TabOne'>;


const TabOne: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Hello from TabOne</Text>
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
});

export default TabOne;

