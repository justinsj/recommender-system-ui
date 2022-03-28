import { ScrollView, View, Image } from "react-native";
import { Rating } from './../components/home/Rating';
import { Details } from './../components/product/Details';
import { useRoute } from "@react-navigation/native";
import { VisitStore } from './../components/product/VisitStore';
import { ProductTitle } from './../components/product/ProductTitle';
import { ProductInformation } from './../components/product/ProductInformation';
import { QuantitySelect } from './../components/product/QuantitySelect';
import { PurchaseOptions } from './../components/product/PurchaseOptions';
import { data } from './../components/data/data';

//https://www.sitepoint.com/amazon-product-api-exploration-lets-build-a-product-search/
//https://rapidapi.com/ZombieBest/api/amazon-products1/
export function ProductScreen(props) {
  const route = useRoute();
  const {entry} = route && route.params ? route.params : { entry: data.refrigerator};
  const {
    storeText, title, rating,
    price, temporarilyOutOfStock,
    imageSrc, details,
  } = entry;

  return (
    
    <ScrollView style={styles.ctr}>
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
        <PurchaseOptions style={styles.PurchaseOptions}/>
        <Details>{details}</Details>

      </View>
      
      
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
    flex: 1,
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
