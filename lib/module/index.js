import { NativeModules } from 'react-native';
const {
  ExpoAppleSearchAdsAttribution
} = NativeModules;

class AppleAdsAttribution {
  getAttributionData() {
    return ExpoAppleSearchAdsAttribution.getAttributionData();
  }

  getiAdAttributionData() {
    return ExpoAppleSearchAdsAttribution.getiAdAttributionData();
  }

  getAdServicesAttributionToken() {
    return ExpoAppleSearchAdsAttribution.getAdServicesAttributionToken();
  }

  getAdServicesAttributionData() {
    return ExpoAppleSearchAdsAttribution.getAdServicesAttributionData();
  }

}

const AppleAdsAttributionInstance = new AppleAdsAttribution();
export default AppleAdsAttributionInstance;
//# sourceMappingURL=index.js.map