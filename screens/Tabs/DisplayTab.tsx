import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import { RootTabParamList } from './_layout';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import client from "../../api/apiClient"
import { Song } from '../../api/apiClient'

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'DisplayTab'>;

const DisplayTab: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {

    const [songs, setSongs] = useState<Array<Song>>([]);

    const handleGetUsers = () => {
        const fectchData = async () => {
            try {
                console.log("Fetching books");
                const fetchedSongs = await client.getSongs();
                if(fetchedSongs != null)
                    setSongs(fetchedSongs as unknown as Song[]);
            } catch(error) {
                console.log(error);
            }
        }
        fectchData();
    }

    const handleDeleteSongs = () => {
        const deleteData = async () => {
            try {
                await client.deleteAllSongs();
                setSongs([]);
            } catch(error) {
                console.log(error);
            }
        }
        deleteData();
    }

    const createReviewCard = (index: number, newSong: Song) => {
        return (
            <View key={newSong.Id} style={styles.listItem}>
                <Text>Author: {newSong.Artist}</Text>
                <Text>Title: {newSong.Title}</Text>
                <Text>Year: {newSong.ReleaseYear}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Hello from DisplayTab</Text>
            <ScrollView>
                {songs.map((item, index) => (
                    createReviewCard(index, item)
                ))}
            </ScrollView>

            <Button title="Get Songs" onPress={handleGetUsers} />
            <Button title="Clear Users" onPress={handleDeleteSongs} />
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

