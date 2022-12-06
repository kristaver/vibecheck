import React from 'react'
import { View, ImageBackground} from 'react-native'
import StatButton from '../components/StatButton/StatButton'
import styles from '../styles/App.component.style'
import Chart from '../components/Chart/Chart'

function ChartScreen({ navigation }) {
  const backgroundImage = require('../assets/bg.png')
  
  return (
    <View style={styles.container}>
      <Chart/>
    </View>
  )
}

export default ChartScreen