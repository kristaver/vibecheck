import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import SubmitRating from '../SubmitRating/SubmitRating'
import styles from './rating.component.style'

function Rating() {
  const [rating, setRating] = useState('');

  return (
    <View style={styles.main}>
      <Text style={styles.prompt}>korleis er dagen så langt?</Text>
        <View  style={styles.scale}>
          <TouchableOpacity onPress={() => setRating('⛈️')}>
            <Text style={styles.icons}>⛈️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('🌧️')}>
            <Text style={styles.icons}>🌧️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('🌦️')}>
            <Text style={styles.icons}>🌦️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('🌤️')}>
            <Text style={styles.icons}>🌤️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating('☀️')}>
            <Text style={styles.icons}>☀️</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.submitContainer}>
            <SubmitRating rating={rating} setRating={setRating} />
      </View>

    </View>
  )
}

export default Rating