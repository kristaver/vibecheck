import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Text, View, ImageBackground } from 'react-native';
import { Overlay } from 'react-native-elements'
import { useState, useEffect } from 'react';
import styles from './styles/App.component.style.js';
import SubmitRating from './components/SubmitRating/SubmitRating.js';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable.js';
import Chart from './components/Chart/Chart.js';
import ShowChart from './components/ShowChart/ShowChart.js';

export default function App() {
  const backgroundImage = require('./assets/bg.png');
  let customFonts = {
    'Babydoll': require('./assets/fonts/babydoll/Babydoll.otf'),
  };

  const [rating, setRating] = useState('');
  const [database, setDatabase] = useState([]);
  const [visible, setVisible] = useState(false);

  const [fontsLoaded] = useFonts(customFonts)
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const today = new Date();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  if (!fontsLoaded) {
    return null;
  }

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{padding:0}}>
          <Chart database={database}></Chart>
        </Overlay>

        <Text style={styles.heading}>nammi eller æsje?</Text>
        <ShowChart toggleOverlay={toggleOverlay}/>
        <View style={styles.main}>
        <Text style={styles.prompt}>korleis er dagen så langt?</Text>
          <View  style={styles.scale}>
            <Pressable onPress={() => setRating('⛈️')} activeOpactity={1}>
              <Text style={styles.icons}>⛈️</Text>
            </Pressable>
            <Pressable onPress={() => setRating('🌧️')} activeOpactity={1}>
              <Text style={styles.icons}>🌧️</Text>
            </Pressable>
            <Pressable onPress={() => setRating('🌦️')} activeOpactity={1}>
              <Text style={styles.icons}>🌦️</Text>
            </Pressable>
            <Pressable onPress={() => setRating('🌤️')} activeOpactity={1}>
              <Text style={styles.icons}>🌤️</Text>
            </Pressable>
            <Pressable onPress={() => setRating('☀️')} activeOpactity={1}>
              <Text style={styles.icons}>☀️</Text>
            </Pressable>
          </View>

          <View style={styles.submitContainer}>
            <SubmitRating rating={rating} setRating={setRating} database={database} setDatabase={setDatabase} setVisible={setVisible} />
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.date}>{today.toLocaleString('no-NN', dateOptions)}</Text>
        </View>

      </ImageBackground>
    </View>
  );
}
