import { Text, View } from "react-native";

export function Rating(props){
    const {rating, count} = props;
    return (
        <Text>{rating} {count}</Text>
    )
}