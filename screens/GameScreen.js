import { View,Text,StyleSheet, Alert} from "react-native";
import Title from "../components/Title";
import Colors from "../constant/colors";
import NumberContainer from "../components/NumberContainer";
import { useState,useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";

const randomNumGenerator=(min,max,exclude)=>{
    let num = Math.floor(Math.random()*(max-min)) + min;

    if(num===exclude){
        randomNumGenerator(min,max,exclude);
    }
    return num;
}
let minBoundary=1;
let maxBoundary=100;


const GameScreen=(props)=>{
    const initial = randomNumGenerator(1,100,props.myNumber);
    const [guessedNumber,setGuessedNumber]=useState(initial);

    
const nextGuessHandler=(direction)=>{

    if((direction==='lower' && guessedNumber<props.myNumber)||(direction==='higher' && guessedNumber>props.myNumber)){
        Alert.alert(`Don't lie!`,'You know it is wrong',[{text:'Sorry',style:'cancel',}]);
        return;
    } 

    if (direction==='lower') {
        maxBoundary=guessedNumber;
    } else {
        minBoundary=guessedNumber+1;
    }
    const newNum=randomNumGenerator(minBoundary,maxBoundary,guessedNumber);
    setGuessedNumber(newNum);
    return;
    }

 useEffect(()=>{
    if(guessedNumber == props.myNumber){
        props.onGameOver(true);
    }
 },[guessedNumber,props.myNumber,props.onGameOver]);

    return(
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <View>
                <PrimaryButton children='+' onPress={nextGuessHandler.bind(this,'higher')}/>
                <PrimaryButton children='-' onPress={nextGuessHandler.bind(this, 'lower')}/>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:12,
        marginTop:100,
    }
})