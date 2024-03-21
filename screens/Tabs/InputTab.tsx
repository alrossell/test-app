import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from './_layout';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { SearchBar } from 'react-native-elements';

import client from "../../api/apiClient";
import { Song } from '../../api/apiClient';

type SettingsScreenProps = BottomTabNavigationProp<RootTabParamList, 'InputTab'>;

const InputTab: React.FC<{ navigation: SettingsScreenProps }> = ({ navigation }) => {

    const [searchList, setSearchList] = useState<Array<Song>>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleNewSong = () => {
        console.log("handleNewBook");
        /*
        const sendData = async () => {
            try {
                const song: Song = {
                    id: -1,
                    title: "test song", 
                    artist: "test artist",
                    album: "test album",
                    releaseYear: 1,
                    genre: "test genre",
                    durationSeconds: 1
                }

                console.log(song);
                await client.createSong(song);
            } catch(error) {
                console.log(error);
            }
        }
        */

        // sendData();
    };

    const updateSearchTerm = (text: string) => {
        console.log(text);
        setSearchTerm(text);
        client.getSearchResults(text)
            .then((data) => 
        { 
            setSearchList(data as unknown as Song[]);
            console.log(data);
        })
            .catch(error => { console.log(error); })
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello from InputTab</Text>
 
            <TextInput
                style={styles.input}
                placeholder="Author"
                value={searchTerm}
                onChangeText={updateSearchTerm}
             />

            <FlatList
                data={searchList}
                keyExtractor={item => item.Id.toString()}
                renderItem={({ item }) => <Text>{item.Title}</Text>}
            />
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

