import { Text, View, Image } from "react-native";
import { Title } from './Title';
import { Rating } from './Rating';
import { Price } from './Price';
import { Prime } from './Prime';
import { FreeShipping } from './FreeShipping';
import { TemporarilyOutOfStock } from './TemporarilyOutOfStock';
import { Sponsored } from './Sponsored';


export function Entry(props){
    const { entry, style } = props;
    const { sponsored, title, rating, price, 
        prime, freeShipping, temporarilyOutOfStock, 
        imageSrc } = entry;
    return (
        <View style={[styles.row, styles.ctr, style]}>
            <View style={styles.imgCtr}>
                <Image 
                    style={styles.img}
                    resizeMode={'contain'}
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
    ctr: {
        borderRadius: 4,
        backgroundColor: '#fff',
        borderColor: '#f5f5f5',
        borderWidth: 1,
        minHeight: 209,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    imgCtr: {
        flexGrow: 0.7,
        paddingHorizontal: 8,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
    },
    img: {
        flex: 1,
        maxHeight: 170,

    },
    contentCtr: {
        flex: 1,
        padding: 8,

    },
}