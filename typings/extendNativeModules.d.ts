import 'react-native';

export interface ExpoAppleSearchAdAttributionData {
  [key: string]: {
    'iad-lineitem-name': string;
    'iad-attribution': string;
    'iad-campaign-name': string;
    'iad-org-name': string;
    'iad-conversion-type': string;
    'iad-org-id': string;
    'iad-campaign-id': string;
    'iad-adgroup-name': string;
    'iad-country-or-region': string;
    'iad-creativeset-name': string;
    'iad-keyword-matchtype': string;
    'iad-conversion-date': string;
    'iad-creativeset-id': string;
    'iad-keyword-id': string;
    'iad-lineitem-id': string;
    'iad-click-date': string;
    'iad-purchase-date': string;
    'iad-adgroup-id': string;
    'iad-keyword': string;
  };
}

export interface ExpoAppleSearchAdAttributionInterface {
  getAttributionData: () => Promise<ExpoAppleSearchAdAttributionData | null>;
}

// and extend them!
declare module 'react-native' {
  interface NativeModulesStatic {
    ExpoAppleSearchAdsAttribution: ExpoAppleSearchAdAttributionInterface;
  }
}
