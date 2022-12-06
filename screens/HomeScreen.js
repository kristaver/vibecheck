import React from 'react'
import { View, ImageBackground} from 'react-native'
import StatButton from '../components/StatButton/StatButton'
import styles from '../styles/App.component.style'

function HomeScreen({ navigation }) {
  const backgroundImage = require('../assets/bg.png')
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        >
        <View style={styles.footer}>
          <StatButton navigation={navigation}/>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen