import { useState } from "react";
import { TextInput,View,StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = (props)=>{
    const [enteredNumber,setEnteredNumber] = useState('');

    const handleInput=(enteredNumber)=>{
        setEnteredNumber(enteredNumber)
    }
    const resetInput=()=>{
        setEnteredNumber('')
    }
    const confirmInput=()=>{
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber<=0){
            Alert.alert('Invalid Number!','Please Enter a Value between 1 and 99',
            [{text:'Okay',style:'destructive',onPress:resetInput}]);

            return;
        }
        props.onPress(chosenNumber);
        
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad'
            value={enteredNumber}
            onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.btn}>
                <PrimaryButton children={'Reset'} onPress={resetInput}/>
            </View>
            <View style={styles.btn}>
                <PrimaryButton children={'Confirm'} onPress={confirmInput}/>
            </View>
        </View>
    </View>)
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4e0329',
        padding:16,
        marginTop:100,
        marginHorizontal:18,
        borderRadius:12,
        elevation:12,
        shadowColor:'black',
        shadowOffset:{width:1,height:3},
        shadowOpacity:0.25,
        shadowRadius:6,
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        textAlign:'center'
    },
    buttonContainer:{
        flexDirection:"row"   
    },
    btn:{flex:1}
});