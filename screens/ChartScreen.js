import React, { useContext } from 'react'
import { StateContext } from '../App'
import { View, Button} from 'react-native'
import styles from '../styles/App.component.style'
import Chart from '../components/Chart/Chart'
import { scheduleNotificationAsync } from 'expo-notifications'
import NotifTest from '../components/NotifTest'

function ChartScreen({ navigation, children }) {
  const sendNotif = () => {
    console.log('jad')
    scheduleNotificationAsync()
  }

  
  return (
      <View style={styles.container}>
        <Chart/>
        <NotifTest />
        
      </View>
  )
}

export default ChartScreen