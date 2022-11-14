import { AsyncStorage } from 'react-native';

export const saveToLocal = async(database) => {
  try {
    await AsyncStorage.setItem(
      '@database',
      JSON.stringify(database),
      (()=>console.log('wrote to localStorage'))
    );
  } catch (error) {
    console.log('error setting data:', error)
  }
}

export const readFromLocal = async() => {
  try {
    const res = await AsyncStorage.getItem('@database');
    return res != null ? JSON.parse(res) : []
  } catch (error) {
    console.log('error reading db:', error)
  }
}

export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    console.log('error:', e)
  }

  console.log('Done.')
}