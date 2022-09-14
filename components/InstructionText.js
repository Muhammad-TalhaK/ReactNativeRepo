import { Text,StyleSheet} from "react-native";
import Colors from "../constant/colors";
const InstructionText=({children})=>{
    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText;

const styles= StyleSheet.create({
    instructionText:{
        color:Colors.borderColor,
        fontSize:20,
        fontFamily:'open-sans'
    }
})