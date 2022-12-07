import { View, Text, TouchableOpacity} from 'react-native'
import styles from './SubmitRating.component.style.js'
import { saveToLocal} from '../../utils/localStorageHandler.js'
import { clearAll } from '../../utils/localStorageHandler'

function SubmitRating({rating, setRating, database, setDatabase}) {

  const values = {
    '⛈️':1,
    '🌧️':2,
    '🌦️':3,
    '🌤️':4,
    '☀️':5, 
  }

  const handleSubmit = () => {
    console.log('fix submit here')
  }

  if(rating) {
    return (
      <View style={{grid: 1, alignItems: 'center', width:'100%'}}>
      <Text style={styles.text}>det er ein <Text style={styles.selectedIcon}>{rating}</Text> type dag?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>yas</Text> 
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    null
  );
}

export default SubmitRating