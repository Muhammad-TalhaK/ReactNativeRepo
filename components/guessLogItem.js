import { View,Text,StyleSheet } from "react-native";
import Colors from "../constant/colors";


const GuessLogItem = (props) =>{
    return(
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{props.round}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {props.guessedNumber}</Text>
        </View>
    )
}
export default GuessLogItem;

const styles= StyleSheet.create({
    listItem:{
        backgroundColor : Colors.borderColor,
        borderRadius:6,
        borderColor:Colors.primaryPlum,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10,
        padding:8,
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:8,
        flexDirection:'row'
    },
    itemText:{
        fontFamily:'open-sans'
    }
});