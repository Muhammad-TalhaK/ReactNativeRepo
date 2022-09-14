import { View, Text, StyleSheet, Alert, FlatList,useWindowDimensions } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/guessLogItem";

const randomNumGenerator = (min, max, exclude) => {
    let num = Math.floor(Math.random() * (max - min)) + min;

    if (num === exclude) {
        randomNumGenerator(min, max, exclude);
    }
    return num;
}
let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = (props) => {
    const initial = randomNumGenerator(1, 100, props.myNumber);
    const [guessedNumber, setGuessedNumber] = useState(initial);
    const [roundsNum,setRoundsNum]=useState([initial]);
    const {width,height} = useWindowDimensions();

    
    const nextGuessHandler = (direction) => {

        if ((direction === 'lower' && guessedNumber < props.myNumber) || (direction === 'higher' && guessedNumber > props.myNumber)) {
            Alert.alert(`Don't lie!`, 'You know it is wrong', [{ text: 'Sorry', style: 'cancel', }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = guessedNumber;
        } else {
            minBoundary = guessedNumber + 1;
        }
        const newNum = randomNumGenerator(minBoundary, maxBoundary, guessedNumber);
        setGuessedNumber(newNum);
        setRoundsNum(prevState=> [newNum,...prevState]);
        return;
    }

    useEffect(() => {
        if (guessedNumber == props.myNumber) {
            props.onGameOver(true);
            props.setGuessedRounds(roundsNum.length);
        }
    }, [guessedNumber, props.myNumber, props.onGameOver,props.setGuessedRounds,roundsNum]);

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[])

    const guessedRoundLength = roundsNum.length;
    const marginTop = height < 480 ? 20:100;

    let content = (
        <>
         <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                          <Ionicons name="md-add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.btn}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if(width>500){
        content=(
            <>
            <View style={styles.buttonsContainerWide}>
             <View style={styles.btn}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                          <Ionicons name="md-add" size={24} color="white"/>
                        </PrimaryButton>
            </View>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <View style={styles.btn}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                        </PrimaryButton>
            </View>
            </View>
            </>
        );
    }
    
    return (
      
        <View style={[styles.screen,{marginTop:marginTop}]}>
            <Title>Opponent's guess</Title>
           {content}
            <View style={styles.listContainer}>
                <FlatList data={roundsNum}
                renderItem={(itemData)=> (
                <GuessLogItem 
                round={guessedRoundLength- itemData.index} 
                guessedNumber={itemData.item}/>
                )}
                keyExtractor={item=>item} />
            </View>
        </View>
       
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        marginTop: 100,
    },
    buttonContainer: {
        flexDirection: "row"
    },
    btn:{flex:1},
    listContainer:{
        flex:1
    },
    buttonsContainerWide:{
        flexDirection:'row',
        alignItems:'center'
    }
})