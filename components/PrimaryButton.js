import { View,Text, Pressable,StyleSheet } from "react-native";
import Colors from "../constant/colors";

const PrimaryButton = ({children,onPress})=>{
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed})=>pressed ? [styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer}
            onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer:{
        backgroundColor:Colors.primaryPlum,
        borderRadius:28,
        padding:8,
    },
    buttonOuterContainer:{
        margin:5,
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily:'open-sans'
    },
    pressed:{
        backgroundColor:Colors.primaryPlum500,
    },
});