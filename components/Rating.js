import { Text, View } from "react-native";
import { Rating as StarRating} from 'react-native-ratings';

export function Rating(props){
    const {rating, count} = props;
    return (
        <View style={styles.ctr}>
            <StarRating
                imageSize={16}
                isDisabled={true}
                startingValue={rating}
                readonly={true}
                style={{ paddingVertical: 2, margin: 0, paddingRight: 4, }}
            />
            <Text styles={styles.count}>{count}</Text>
        </View>
    )
}

const styles = {
    ctr: {
        flex: 1, 
        flexDirection: "row",
        marginTop: 4,
        marginBottom: -4,
    },
    count: {
        color: '#0F1111',
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 300,
        fontFamily: '"Amazon Ember",Arial,sans-serif',
    }
}