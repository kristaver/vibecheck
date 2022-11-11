import { View, Text, Pressable} from 'react-native'
import styles from './SubmitRating.component.style.js'

function SubmitRating({rating, setRating, database, setDatabase, setVisible}) {

  const values = {
    '⛈️':1,
    '🌧️':2,
    '🌦️':3,
    '🌤️':4,
    '☀️':5, 
  }

  const handleSubmit = () => {
    console.log('db', database)
    const date = new Date()
    const entry = {
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      value: values[rating]
    }
    const updatedDb = database;
    updatedDb.push(entry);
    setDatabase(updatedDb);
    setRating('');
  }

  if(rating) {
    return (
      <View style={{grid: 1, alignItems: 'center', width:'100%'}}>
      <Text style={styles.text}>det er ein <Text style={styles.selectedIcon}>{rating}</Text> type dag?</Text>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>yas</Text> 
          </Pressable>
        </View>
      </View>
    )
  }
  return (
    null
  );
}

export default SubmitRating