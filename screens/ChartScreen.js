import React, { useContext } from 'react'
import { StateContext } from '../App'
import { View, Button} from 'react-native'
import styles from '../styles/ChartScreen.component.style'
import Chart from '../components/Chart/Chart'
import { scheduleNotificationAsync } from 'expo-notifications'
import Notifications from '../NotificationUtil'

function ChartScreen({ navigation, children }) {
  const sendNotif = () => {
    console.log('jad')
    scheduleNotificationAsync()
  }

  
  return (
      <View style={styles.container}>
        <Chart/>
        <Button
        title="hjelp, dette vart for real"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
        <Notifications />
      </View>
  )
}

export default ChartScreen