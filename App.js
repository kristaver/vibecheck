import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'
import { createContext, useContext } from 'react';
import HomeScreen from './screens/HomeScreen';
import ChartScreen from './screens/ChartScreen'


export const StateContext = createContext([])

export default function App() {

  let customFonts = {
    'Babydoll': require('./assets/fonts/babydoll/Babydoll.otf'),
  };
  
  const [fontsLoaded] = useFonts(customFonts)
  if (!fontsLoaded) {
    return null;
  }
  
  const Stack = createNativeStackNavigator();

  return (
    <StateContext.Provider value={[0, 1, 2]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'welcome to the app bestie' }}
          />
          <Stack.Screen
            name = 'Statistics'
            component={ChartScreen}
            options={{ title: 'statistics for u :>'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateContext.Provider>
  );
}
