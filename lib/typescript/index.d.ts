declare class AppleAdsAttribution {
    getAttributionData(): Promise<import("./typings").ExpoIadAdAttributionData | import("./typings").ExpoAdServicesAttributionData>;
    getiAdAttributionData(): Promise<import("./typings").ExpoIadAdAttributionData>;
    getAdServicesAttributionToken(): Promise<string>;
    getAdServicesAttributionData(): Promise<import("./typings").ExpoAdServicesAttributionData>;
}
declare const AppleAdsAttributionInstance: AppleAdsAttribution;
export default AppleAdsAttributionInstance;
