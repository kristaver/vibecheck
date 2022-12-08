import React, { useEffect } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import StatButton from '../components/StatButton/StatButton'
import Rating from '../components/Rating'
import styles from '../styles/HomeScreen.component.styles'

function HomeScreen({ navigation }) {
  const backgroundImage = require('../assets/bg.png')

  useEffect(() => {
    return navigation.navigate('RatingModal')
  }, [])
  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        resizeMode="cover"
        >
        <Text style={styles.heading}>vibecheck</Text>

        <View style={styles.menuContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('RatingModal')}>
          <Text style={styles.menuLink}>meld vibe</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
          <Text style={styles.menuLink}>gi meg stats</Text>
        </TouchableOpacity>
        </View>
        <Text style={{
          marginBottom: 100,
          marginHorizontal: 30,
          fontFamily: 'Courier New',
        }}>
          grafikk:{'\n'}august 'bestie' hagen
        </Text>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen