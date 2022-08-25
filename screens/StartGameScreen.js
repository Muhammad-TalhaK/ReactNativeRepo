import { TextInput,View,StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
const StartGameScreen = ()=>{
    return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad'/>
        <PrimaryButton children={'Reset'}/>
        <PrimaryButton children={'Confirm'}/>
    </View>)
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#4e0329',
        padding:16,
        marginTop:100,
        marginHorizontal:18,
        borderRadius:12,
        elevation:12,
        shadowColor:'black',
        shadowOffset:{width:1,height:3},
        shadowOpacity:0.25,
        shadowRadius:6
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        textAlign:'center',
    },
});