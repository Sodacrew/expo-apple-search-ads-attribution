import { NativeModules } from 'react-native';
const {
  ExpoAppleSearchAdsAttribution
} = NativeModules;

class AppleAdsAttribution {
  getAttributionData() {
    return ExpoAppleSearchAdsAttribution.getAttributionData();
  }

}

const AppleAdsAttributionInstance = new AppleAdsAttribution();
export default AppleAdsAttributionInstance;
//# sourceMappingURL=index.js.map