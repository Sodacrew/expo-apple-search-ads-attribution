declare class AppleAdsAttribution {
    getAttributionData(): Promise<import("../types/extendNativeModules").RNAppleSearchAdAttributionData | null>;
}
declare const AppleAdsAttributionInstance: AppleAdsAttribution;
export default AppleAdsAttributionInstance;
