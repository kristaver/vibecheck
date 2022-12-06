import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Chart from './components/Chart/Chart'

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'welcome to the app bestie' }}
        />
        <Stack.Screen
          name = 'Statistics'
          component={Chart}
          options={{ title: 'statistics for u :>'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
