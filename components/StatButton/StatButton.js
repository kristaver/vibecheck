import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import styles from './statButton.component.style'

function StatButton({navigation}) {
  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={styles.clickable}
      onPress={() => navigation.navigate('Statistics')}
    >
      <Image
        source={require('../../assets/stat-icon.png')} 
        style={styles.icon}
      />
    </TouchableOpacity>
  </View>
  )
}

export default StatButton