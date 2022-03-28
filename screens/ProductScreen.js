import { Text, View, FlatList } from "react-native";
import { data } from "../components/data/data";
import { Entry } from "../components/home/Entry";
import { Results } from '../components/Results';
import { Rating } from './../components/Rating';
import { TemporarilyOutOfStock } from './../components/TemporarilyOutOfStock';
import { Details } from './../components/product/Details';

//https://www.sitepoint.com/amazon-product-api-exploration-lets-build-a-product-search/
//https://rapidapi.com/ZombieBest/api/amazon-products1/
export function ProductScreen(props) {
  console.log("props",props)
  const {
    storeText, title, rating,
    price,
    temporarilyOutOfStock,
    imageSrc, details,
  } = props;
  return (
    
    <View style={styles.ctr}>
      <View style={styles.row}>
        <VisitStore>{storeText}</VisitStore>
        <Rating rating={rating}/>
      </View>
      <ProductTitle>{title}</ProductTitle>
      <Image 
        style={styles.img}
        resizeMode={'contain'}
        source={imageSrc}
      />
      {/* <ProductOptions options={options}/> */}
      <ProductInformation 
        price={price}
        temporarilyOutOfStock={temporarilyOutOfStock}
      />
      <QuantitySelect/>
      <PurchaseOptions/>
      <Details>{details}</Details>
      {/* <Recommendations/> */}
      {/* <ProductImageGallery/> */}
      {/* <FromTheManufacturer/> */}
      {/* <FeaturesAndDetails/> */}
      {/* <CustomerQuestions/> */}
    </View>
  );
}

const styles = {
  row: {
    flexDirection: 'row',
  },
  ctr: {
    paddingVertical: 4,
    background: '#fff',
    flex: 1,
  },
  
}
