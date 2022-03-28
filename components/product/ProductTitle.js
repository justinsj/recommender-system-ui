import { Text } from 'react-native';


export function ProductTitle(props){
    const {children, style} = props
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = {
    text: {
        color: '#565959',
        fontFamily: '"Amazon Ember", Arial, sans-serif',
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 18.2,
    }
}