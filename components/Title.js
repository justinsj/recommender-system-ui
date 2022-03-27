import { Text, View } from "react-native";

export function Title(props){
    const {children} = props;
    return (
        <Text>{children}</Text>
    )
}