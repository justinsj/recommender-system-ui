import { Text, View, Image } from "react-native";

export function Prime(props){
    return (
        <Image 
            style={styles.img}
            source={require('../assets/prime.png')}
        />
    )
}

const styles = {
    img: {
        width: 53,
        height: 15,
        marginBottom: 4,
    }
}