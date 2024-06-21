import {
  iPhoneMobileName,
  iPhoneMobilePrice,
  iPhoneHighlights,
  iPhoneOsProcessorFeatures,
  iPhoneNetworkType,
  iPhoneDescription,
} from "./Iphone.js";
import {
  samsungMobileName,
  samsungMobilePrice,
  samsungHighlights,
  samsungOsProcessorFeatures,
  samsungNetworkType,
  samsungDescription,
} from "./Samsung.js";

console.log(iPhoneMobileName);
console.log(iPhoneMobilePrice, iPhoneHighlights);
console.log(iPhoneOsProcessorFeatures, iPhoneNetworkType);
iPhoneDescription();
console.log("---------->");

console.log(samsungMobileName);
console.log(samsungMobilePrice, samsungHighlights);
console.log(samsungOsProcessorFeatures, samsungNetworkType);
samsungDescription();
