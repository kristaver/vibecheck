import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import SubmitRating from '../SubmitRating/SubmitRating'
import styles from './rating.component.style'

function RatingModal({ navigation }) {
  const [rating, setRating] = useState('');
  const options = ['☀️','🌤️','🌦️', '🌧️', '⛈️']

  return (
    <View style={styles.container}>
    <View style={styles.modalContent}>

      <Text style={styles.prompt}>vibe rn: </Text>

        <View style={styles.scale}>
          <TouchableOpacity onPress={() => setRating('☀️')}>
            <Text style={styles.icons}>☀️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('🌤️')}>
            <Text style={styles.icons}>🌤️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('🌦️')}>
            <Text style={styles.icons}>🌦️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('🌧️')}>
            <Text style={styles.icons}>🌧️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('⛈️')}>
            <Text style={styles.icons}>⛈️</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.submitContainer}>
        <SubmitRating rating={rating} setRating={setRating} navigation={navigation} />
        <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
            <Text style={styles.buttonText}>nej, vil ikkje</Text> 
          </TouchableOpacity>
      </View>

    </View>
    </View>
  )
}

export default RatingModal