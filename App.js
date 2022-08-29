import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { StyleSheet, ImageBackground, SafeAreaView, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constant/colors';
import GameOver from './screens/GameOver';

export default function App() {
  const [pickedNumber,setPickedNumber] = useState();
  const [isGameOver,setIsGameOver] = useState(true);

  const handlePickedNumber = (number)=>{
    setPickedNumber(number);
    setIsGameOver(false);
  }

  const handleGameOver=()=>{
    setIsGameOver(true);
  }
  let screen = <StartGameScreen onPress={handlePickedNumber}/>

  if(pickedNumber){
    screen=<GameScreen myNumber={pickedNumber} onGameOver={handleGameOver}/>
  }

  if(pickedNumber && isGameOver){
    screen=<GameOver/>
  }
  
  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[Colors.primaryPlum400,Colors.borderColor]} style={styles.appContainer}>
      <ImageBackground source={require('./assets/images/background.png')}
      resizeMode='cover'
      style={styles.appContainer}
      imageStyle={styles.backgroundImage}
      >
       <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>   
       
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1,
  marginTop:StatusBar.currentHeight
 },
 backgroundImage:{
  opacity:0.2
 }
});
