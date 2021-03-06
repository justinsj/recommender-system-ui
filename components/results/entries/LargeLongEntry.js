import {Image, View} from "react-native";
import {Sponsored} from '../Sponsored';
import {Title} from '../Title';
import {Rating} from '../../common/Rating';
import {Price} from '../Price';
import {Prime} from '../Prime';
import {FreeShipping} from '../FreeShipping';
import {TemporarilyOutOfStock} from '../TemporarilyOutOfStock';
import {CARD} from "../../../constants/card";
import {MODIFIER} from "../../../constants/modifiers";


export function LargeLongEntry(props) {
  const {entry, style} = props;
  const {imageSrc, sponsored, title, rating, price, prime, freeShipping, temporarilyOutOfStock} = entry;

  return <View
    style={[styles.row, styles.ctr, style]}
  >
    <View style={styles.imgCtr}>
      <Image
        style={styles.img}
        resizeMode={'contain'}
        source={imageSrc}/>
    </View>
    <View style={styles.contentCtr}>
      {sponsored ? <Sponsored/> : null}
      <Title numberOfLines={MODIFIER.LENGTH.LONG}>{title}</Title>
      {/* {rating ? <Rating {...rating} /> : null} */}
      {price ? <Price style={styles.priceCtr} price={price}/> : null}
      {prime ? <Prime/> : null}
      {freeShipping ? <FreeShipping/> : null}
      {temporarilyOutOfStock ? <TemporarilyOutOfStock/> : null}
    </View>
  </View>;
}

const styles = {
  ctr: {
    borderRadius: 4,
    backgroundColor: '#fff',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    minHeight: CARD.HEIGHT,
    height: CARD.HEIGHT,
    maxHeight: CARD.HEIGHT,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  imgCtr: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: MODIFIER.WIDTH.LARGE,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  img: {
    width: MODIFIER.SIZE.LARGE,
    height: undefined,
    aspectRatio: 1,
  },
  contentCtr: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
  },
  priceCtr: {
    paddingTop: 8,
  },
}