import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from './_layout';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { SearchBar } from 'react-native-elements';

import client from "../../api/apiClient";
import { Song } from '../../api/apiClient';

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

    const [filteredData, setFilteredData] = useState<Array<string>>([]);

    const handleNewBook = () => {
        console.log("handleNewBook");
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

        sendData();
    };

    const updateAuthor = (text: string) => {
        setAuthor(text);
        
        client.GetSearchResults(text)
            .then((data) => { setFilteredData(data); })
            .catch(error => { console.log(error); })
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello from InputTab</Text>
 
            <TextInput
                style={styles.input}
                placeholder="Author"
                value={author}
                onChangeText={updateAuthor}
             />

            <FlatList
                data={filteredData}
                keyExtractor={item => item}
                renderItem={({ item }) => <Text>{item}</Text>}
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

