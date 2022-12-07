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
  const state = useContext(StateContext)
  console.log(state)
  
  return (
    <StateContext.Provider value={state}>
      <View style={styles.container}>
        <Chart/>
        {/* <Button title="notsdfif" onPress={sendNotif}/> */}
        <NotifTest />
        
        <Button>
          {console.log(state, chilren)}
          busttt
        </Button>
      </View>
    </StateContext.Provider>
  )
}

export default ChartScreen