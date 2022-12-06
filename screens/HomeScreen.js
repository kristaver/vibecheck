import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { useFonts } from 'expo-font';
import StatButton from '../components/StatButton/StatButton'
import Rating from '../components/Rating'
import styles from '../styles/App.component.style'

function HomeScreen({ navigation }) {
  const backgroundImage = require('../assets/bg.png')

  let customFonts = {
    'Babydoll': require('../assets/fonts/babydoll/Babydoll.otf'),
  };

  const [fontsLoaded] = useFonts(customFonts)
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        resizeMode="cover"
        >
        <Text style={styles.heading}>vibecheck</Text>
        <Rating />
        <View style={styles.footer}>
          <StatButton navigation={navigation}/>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen