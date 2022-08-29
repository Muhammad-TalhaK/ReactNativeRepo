import { View,Text, Pressable,StyleSheet } from "react-native";
import Colors from "../constant/colors";

const PrimaryButton = (props)=>{
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({pressed})=>pressed ? [styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer}
            onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.children}</Text>
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
        textAlign:'center'
    },
    pressed:{
        backgroundColor:Colors.primaryPlum500,
    },
});