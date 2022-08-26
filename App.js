import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [pickedNumber,setPickedNumber] = useState();

  const handlePickedNumber = (number)=>{
    setPickedNumber(number);
  }

  let screen = <StartGameScreen onPress={handlePickedNumber}/>

  if(pickedNumber){
    screen=<GameScreen/>
  }

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.appContainer}>
      <ImageBackground source={require('./assets/images/background.png')}
      resizeMode='cover'
      style={styles.appContainer}
      imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1
 },
 backgroundImage:{
  opacity:0.2
 }
});
