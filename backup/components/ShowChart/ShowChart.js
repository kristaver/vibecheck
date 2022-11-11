import React from 'react'
import {Pressable, Image, View} from 'react-native'
import styles from './showChart.component.style'
function ShowChart({toggleOverlay}) {
  return (
    <View style={styles.container}>
      <Pressable onPress={toggleOverlay} style={styles.clickable}>
        <Image
          source={require('../../assets/stat-icon.png')} 
          style={styles.icon}
        />
      </Pressable>
    </View>
  )
}

export default ShowChart