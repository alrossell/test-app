import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { RootTabParamList } from './TabsScreen';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import client from "../api/apiClient"

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'TabOne'>;

type Book = {
    id: string
    title: string
    author: string
    year: string 
}

const TabOne: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {

    const [books, setBooks] = useState<Array<Book>>([]);

    const handleGetUsers = () => {
        const fectchData = async () => {
            try {
                const fetchedBooks = await client.getBooks();
                setBooks(fetchedBooks as unknown as Book[]);
            } catch(error) {
                console.log(error);
            }
        }
        fectchData();
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
            <Text>Hello from TabOne</Text>
            <ScrollView>
                {books.map((item, index) => (
                    createReviewCard(item)
                ))}
            </ScrollView>

            <Button title="GetUser" onPress={handleGetUsers} />
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

export default TabOne;

