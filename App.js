import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'
import { createContext, useContext } from 'react';
import HomeScreen from './screens/HomeScreen';
import ChartScreen from './screens/ChartScreen'
import RatingModal from './components/RatingModal';


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
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              />
            <Stack.Screen
              name = 'Statistics'
              component={ChartScreen}
              />
            </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name='RatingModal'
            component={RatingModal}
            options={{presentation: 'transparentModal'}}
            />
        </Stack.Group>

        </Stack.Navigator>
      </NavigationContainer>
    </StateContext.Provider>
  );
}
