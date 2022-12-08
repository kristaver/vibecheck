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

        <View style={styles.menu}>
        <TouchableOpacity>
          <Text>meld vibe</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>gi meg stats</Text>
        </TouchableOpacity>
        </View>


        <View style={styles.footer}>
          <StatButton navigation={navigation}/>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen