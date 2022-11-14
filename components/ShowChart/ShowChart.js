import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import styles from './showChart.component.style'

function ShowChart({toggleOverlay, statVisible}) {

  if(!statVisible) {
    return(
      <View style={styles.placeholder} />
    )
  }
  return(
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleOverlay}
        style={styles.clickable}
      >
        <Image
          source={require('../../assets/stat-icon.png')} 
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ShowChart