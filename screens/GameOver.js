import { Text,StyleSheet, View,Image,useWindowDimensions} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constant/colors";
const GameOver = (props) => {

    const {height,width} = useWindowDimensions();
    
    let imageSize=300;
    if(width>380){
        imageSize=150;
    }
    if(height<380){
        imageSize=80;
    }
    const image={
        height:imageSize,
        width:imageSize,
        borderRadius:imageSize/2
    }
    
    return (
        <View style={styles.rootContainer}>
          <Title>Game Over</Title>
          <View style={[styles.imageContainer,image]}>
            <Image style={styles.image} source={require('../assets/images/success.png')}/>
          </View>
          <Text style={styles.summary}>
            Your phone took <Text style={styles.highlight}>{props.rounds}</Text> turns to guess Number <Text style={styles.highlight}>{props.userNumber}</Text></Text>
          <PrimaryButton onPress={props.startNewGameHandler}>Start new game</PrimaryButton>
        </View>
    )
}
export default GameOver;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primaryPlum,
        overflow:"hidden",
        margin:36
    },
    image:{
        width:'100%', 
        height:'100%'
    },
    summary:{
        fontFamily:'open-sans',
        fontSize:23,
        margin:14,
        textAlign:'center'
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primaryPlum400
    }
})