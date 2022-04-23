# Recommender System UI
This project is a prototype for evaluating the effects different interfaces in recommender systems for mobile devices. 

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

<div style="flex: 1; flex-direction: row; align-items: flex-start;">
  <img src="assets/screens/home.jpg" alt="Home screen" width="200"/>
  <img src="assets/screens/recs-control.jpg" alt="Recommendations screen" width="200"/>
  <img src="assets/screens/product.jpg" alt="Product screen" width="200"/>
  <img src="assets/screens/complete.jpg" alt="Complete screen" width="200"/>
  <img src="assets/screens/setup.jpg" alt="Setup screen" width="200"/>
</div>
## Related repositories

- [recommender-system-analysis](https://github.com/justinsj/recommender-system-analysis): Scripts to perform metric computations 
- [recommender-system-scraper](https://github.com/justinsj/recommender-system-scraper): Scripts to obtain data from Amazon

## 🚀 How to use

- Install with `yarn` or `npm install`.
- Run `expo start` to try it out.
- Install `expo go` on your phone and then use the QR code to load the app. You may need to use Connection: Tunnel.

## 📝 Notes

This app logs interactions to an AWS DynamoDB.
Press the title in the header `6 times in 2 seconds` to enter the `Setup Screen`.

