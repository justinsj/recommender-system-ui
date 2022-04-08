import {Image, ScrollView, View} from "react-native";
import {Rating} from './../components/common/Rating';
import {Details} from './../components/product/Details';
import {useRoute} from "@react-navigation/native";
import {VisitStore} from './../components/product/VisitStore';
import {ProductTitle} from './../components/product/ProductTitle';
import {ProductInformation} from './../components/product/ProductInformation';
import {QuantitySelect} from './../components/product/QuantitySelect';
import {PurchaseOptions} from './../components/product/PurchaseOptions';
import {data} from '../data/data';
import {LogAPI} from "../wrappers/LogAPI";
import {AppContext} from './../context/AppContext';
import {Actions} from './../constants/Actions';
import {useContext} from 'react';

//https://www.sitepoint.com/amazon-product-api-exploration-lets-build-a-product-search/
//https://rapidapi.com/ZombieBest/api/amazon-products1/
export function ProductScreen(props) {
  const {userId, taskId, interfaceId, sessionId} = useContext(AppContext);
  const route = useRoute();
  const {entry} = route && route.params ? route.params : {entry: data.refrigerator};
  const {
    storeText, title, rating,
    price, temporarilyOutOfStock,
    imageSrc, details, productId,
  } = entry;

  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.row}>
          <VisitStore>{storeText}</VisitStore>
          <Rating {...rating}/>
        </View>
        <ProductTitle
          style={styles.title}
        >{title}</ProductTitle>
        <View style={styles.imgCtr}>
          <Image
            style={styles.img}
            resizeMode={'contain'}
            source={imageSrc}
          />
        </View>
      </View>


      {/* <ProductOptions options={options}/> */}
      <View style={styles.card}>
        <ProductInformation
          style={styles.ProductInformation}
          price={price}
          temporarilyOutOfStock={temporarilyOutOfStock}
        />

        <View style={[styles.QuantitySelect, styles.row]}>
          <QuantitySelect/>
          <View style={{flex: 1}}/>
        </View>
        <PurchaseOptions
          onAddToCart={() => {
            LogAPI.put({
              logs: [{
                userId,
                ts: new Date().toISOString(),
                taskId,
                interfaceId,
                sessionId,
                productId,
                action: Actions.addToCart,
              }],
            })
          }}
          onBuyNow={() => {
            LogAPI.put({
              logs: [{
                userId,
                ts: new Date().toISOString(),
                taskId,
                interfaceId,
                sessionId,
                productId,
                action: Actions.buyNow,
              }],
            })
          }}
          style={styles.PurchaseOptions}

        />
      </View>
      {
        Object.keys(details).length > 0 ?
          <View style={styles.card}>
            <Details details={details}></Details>
          </View> :
          null
      }


      {/* <Recommendations/> */}
      {/* <ProductImageGallery/> */}
      {/* <FromTheManufacturer/> */}
      {/* <FeaturesAndDetails/> */}
      {/* <CustomerQuestions/> */}
    </ScrollView>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    marginBottom: 4,
    padding: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginBottom: 4,
  },
  ctr: {
    // padding: 14,
    background: '#e3e6e6',
    // flex: 1,
    flexGrow: 1,
  },
  imgCtr: {
    flexGrow: 1,
    // paddingHorizontal: 8,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    height: 300,
    maxHeight: 300,
  },
  img: {
    flex: 1,
    // maxHeight: 170,

  },
  ProductInformation: {
    marginBottom: 10,
  },
  QuantitySelect: {
    // paddingHorizontal: 14,
    marginBottom: 14,
  },
  PurchaseOptions: {
    // paddingHorizontal: 14,
  },

}
