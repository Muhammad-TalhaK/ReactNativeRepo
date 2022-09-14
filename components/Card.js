import { View, StyleSheet } from "react-native";
import Colors from "../constant/colors";

const Card = ({ children }) => {
    return (<View style={styles.inputContainer}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryPlum400,
        padding: 16,
        marginTop: 15,
        marginHorizontal: 18,
        borderRadius: 12,
        elevation: 12,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
});