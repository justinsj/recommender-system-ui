import { Text, View, Image } from "react-native";
import { Title } from './Title';
import { Rating } from './Rating';
import { Price } from './Price';
import { Prime } from './Prime';
import { FreeShipping } from './FreeShipping';
import { TemporarilyOutOfStock } from './TemporarilyOutOfStock';
import { Sponsored } from './Sponsored';

export function Entry(props){
    const { sponsored, title, rating, price, 
        prime, freeShipping, temporarilyOutOfStock, 
        imageSrc } = props;
    return (
        <View style={styles.row}>
            <View style={styles.imgCtr}>
                <Image 
                    style={styles.img}
                    source={imageSrc}
                />
            </View>
            <View style={styles.contentCtr}>
                { sponsored ? <Sponsored/> : null }
                <Title>{title}</Title>
                <Rating {...rating}/>
                <Price price={price}/>
                { prime ? <Prime/> : null }
                { freeShipping ? <FreeShipping/> : null }
                { temporarilyOutOfStock ? <TemporarilyOutOfStock/> : null }
            </View>
        </View>
    )
}

const styles = {
    row: {

    },
    imgCtr: {

    },
    img: {
        width: 50,
        height: 50,
    },
    contentCtr: {

    },
}