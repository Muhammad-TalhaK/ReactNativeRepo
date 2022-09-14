import { Text,StyleSheet } from "react-native";
import Colors from "../constant/colors";
const Title = ({children})=>{
    return(
        <Text style={styles.title}>{children}</Text>
    )
}
export default Title;
const styles = StyleSheet.create({
    title:{
        color:'#fff',
        fontSize:24,
        fontFamily:'open-sans-bold',
        borderColor:'#fff',
        borderWidth:0,
        padding:12,
        textAlign:"center",
        margin:12
    }
})