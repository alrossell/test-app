import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from './_layout';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import client from "../../api/apiClient";

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'InputTab'>;

interface Book {
    id: string;
    title: string;
    author: string;
    year: string;
}

const InputTab: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {

    const [author, setAuthor] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const handleNewBook = () => {
        console.log("handleNewBook");
        console.log();
        const sendData = async () => {
            try {
                const test: Book = {
                    id: title + author + year,
                    title: title,
                    author: author,
                    year: year 
                }

                console.log(test);
                await client.createBook(test);
            } catch(error) {
                console.log(error);
            }
        }

        sendData();
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello from InputTab</Text>
            <TextInput
                style={styles.input}
                placeholder="Author"
                value={author}
                onChangeText={setAuthor}
            />
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Year"
                value={year}
                onChangeText={setYear}
            />
            <Button title="Create Book" onPress={handleNewBook} />
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

export default InputTab

