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
    return res != null ? JSON.parse(res) : null
  } catch (error) {
    console.log('error reading db:', error)
  }
}