import React from 'react'
import { View, Button} from 'react-native'
import styles from '../styles/App.component.style'
import Chart from '../components/Chart/Chart'
import { scheduleNotificationAsync } from 'expo-notifications'
import NotifTest from '../components/NotifTest'

function ChartScreen({ navigation }) {
  const sendNotif = () => {
    console.log('jad')
    scheduleNotificationAsync()
  }
  
  return (
      <View style={styles.container}>
        <Chart/>
        {/* <Button title="notsdfif" onPress={sendNotif}/> */}
        <NotifTest />
      </View>
  )
}

export default ChartScreen