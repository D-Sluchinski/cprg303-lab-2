//remove image
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Apple from '../app/apple';
import React from 'react';


export default function Food(){
    let fruit = ["apple", "orange", "mango"];

    
return  (
    <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0, flexDirection: 'column'}}>
            <Text style={{margin: 7}}>{fruit[0]}</Text>
            <Text style={{margin: 7}}>{fruit[1]}</Text> 
            <Text style={{margin: 7}}>{fruit[2]}</Text>
        </View>
    <View style={{flex: 20, flexDirection: 'column'}}>
        <Apple/>
    </View>

    </View>
);

}