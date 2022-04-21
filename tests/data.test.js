import { data } from './../data/data';
function assertDataValid(data){
  /*
  This function throws an error if any of the entries in data are invalid.
  The function returns undefined otherwise.
  Valid entries have the following keys as not null:
  - sponsored
  - title
  // - rating
  //   - rating
  //   - count
  - price
  - prime
  - freeShipping
  - imageSrc (using require statement)
  - link
  - storeText
  - details
  - productId
  - imageSrcUrl
  
  */
  for (const [key,value] of Object.entries(data)){
    console.assert(isNotNullOrUndefined(value.sponsored))
    console.assert(isNotNullOrUndefined(value.title))
    // console.assert(isNotNullOrUndefined(value.rating))
    console.assert(isNotNullOrUndefined(value.price))
    console.assert(isNotNullOrUndefined(value.prime))
    console.assert(isNotNullOrUndefined(value.freeShipping))
    console.assert(isNotNullOrUndefined(value.imageSrc))
    console.assert(isNotNullOrUndefined(value.link))
    console.assert(isNotNullOrUndefined(value.storeText))
    console.assert(isNotNullOrUndefined(value.details))
    console.assert(isNotNullOrUndefined(value.productId))
    console.assert(isNotNullOrUndefined(value.imageSrcUrl))
  }
}

function isNotNullOrUndefined(value){
  return value !== undefined && value !== null
}

function assertUniqueProductIds(data){
  /*
  This function throws an error if any of the entry productIds in data are duplicated.
  The function returns undefined otherwise.

  */
  const seenProductIds = new Set();
  for (const [key,value] of Object.entries(data)){
    console.assert(isNotNullOrUndefined(value.productId))
    const {productId} = value;
    console.assert(!seenProductIds.has(productId), 'Duplicate productId: ' + productId)
    seenProductIds.add(productId)
  }
}

assertDataValid(data);
assertUniqueProductIds(data);