// src="https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg"

import { Image, View } from "react-native"


export default function Apple(){

    return(
    <View>
        <Image source={require('../assets/apple.png')} style={{height: 30, width: 30, margin: 3}}/>
        <Image source={require('../assets/orange.png')} style={{height: 30, width: 30, margin: 3}}/>
        <Image source={require('../assets/mango.png')} style={{height: 30, width: 30, margin: 3}}/>
    </View>
    );

}