import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Food from "../component/food";
// import Apple from './apple';

export default function App(){
    
    return(
        <View>
            <Text>Welcome User!</Text>
            <Button title="Press me" onPress={() => alert("Hello!")} />
            <Food/>
        </View>
    );

}