import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { RootTabParamList } from './_layout';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import client from "../../api/apiClient"
import { Song } from '../../api/apiClient'

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'DisplayTab'>;

type Book = {
    id: string
    title: string
    author: string
    year: string 
}

const DisplayTab: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {

    const [books, setBooks] = useState<Array<Book>>([]);

    const handleGetUsers = () => {
        const fectchData = async () => {
            try {
                console.log("Fetching books");
                const fetchedBooks = await client.getSongs();
                if(fetchedBooks != null)
                    setBooks(fetchedBooks as unknown as Book[]);
            } catch(error) {
                console.log(error);
            }
        }
        fectchData();
    }

    const handleDeleteBooks = () => {
        const deleteData = async () => {
            try {
                await client.deleteAllSongs();
                setBooks([]);
            } catch(error) {
                console.log(error);
            }
        }
        deleteData();
    }

    const createReviewCard = (newBook: Book) => {
        return (
            <View key={newBook.id} style={styles.listItem}>
                <Text>Author: {newBook.author}</Text>
                <Text>Title: {newBook.title}</Text>
                <Text>Year: {newBook.year}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Hello from DisplayTab</Text>
            <ScrollView>
                {books.map((item, index) => (
                    createReviewCard(item)
                ))}
            </ScrollView>

            <Button title="Get Books" onPress={handleGetUsers} />
            <Button title="Clear Users" onPress={handleDeleteBooks} />
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

export default DisplayTab;

