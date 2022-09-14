import { View,Text,StyleSheet } from "react-native";
import Colors from "../constant/colors";

const NumberContainer = ({children}) =>{
    return(
        <View style={styles.view}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const styles = StyleSheet.create({
    view:{
        borderColor:Colors.borderColor,
        borderWidth:4,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        padding:24,
        margin:24
    },
    numberText:{
        fontSize:36,
        color:Colors.borderColor,
        fontFamily:'open-sans-bold'
    }
});