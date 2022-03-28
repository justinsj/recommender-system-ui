import { Text } from 'react-native';


export function ProductTitle(props){
    const {children} = props
    return (
        <Text style={styles.text}>{children}</Text>
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