import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { StyleSheet, ImageBackground, SafeAreaView, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constant/colors';
import GameOver from './screens/GameOver';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [pickedNumber,setPickedNumber] = useState();
  const [isGameOver,setIsGameOver] = useState(true);
  const [rounds,setRounds] = useState(0);

  const [fontLoaded]=useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!fontLoaded){
    return <AppLoading/>;
  }
  const handlePickedNumber = (number)=>{
    setPickedNumber(number);
    setIsGameOver(false);
  }

  const handleGameOver=()=>{
    setIsGameOver(true);
  }

  const newGameHandler = ()=>{
    setPickedNumber(null);
    setRounds(0);
  }

  const setGuessedRounds=(number)=>{
    setRounds(number);
  }

  let screen = <StartGameScreen onPress={handlePickedNumber}/>

  if(pickedNumber){
    screen=<GameScreen myNumber={pickedNumber} onGameOver={handleGameOver} setGuessedRounds={setGuessedRounds}/>
  }

  if(pickedNumber && isGameOver){
    screen=<GameOver rounds={rounds} userNumber={pickedNumber} startNewGameHandler={newGameHandler}/>
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
