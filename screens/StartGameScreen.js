import { useState } from "react";
import { TextInput, View, StyleSheet, Alert,ScrollView,KeyboardAvoidingView } from "react-native";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constant/colors";
const StartGameScreen = (props) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const handleInput = (enteredNumber) => {
        setEnteredNumber(enteredNumber)
    }
    const resetInput = () => {
        setEnteredNumber('')
    }
    const confirmInput = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0) {
            Alert.alert('Invalid Number!', 'Please Enter a Value between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInput }]);

            return;
        }
        props.onPress(chosenNumber);

    }

    return (
        <ScrollView style={{flex:1}}>
        <KeyboardAvoidingView style={{flex:1}} behavior='position'>
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter Your Number</InstructionText>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    value={enteredNumber}
                    onChangeText={handleInput}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <PrimaryButton onPress={resetInput}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.btn}>
                        <PrimaryButton onPress={confirmInput}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>)
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 100,
        flex: 1,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.borderColor,
        borderBottomWidth: 2,
        color: Colors.borderColor,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: "row"
    },
    btn: { flex: 1 }
});