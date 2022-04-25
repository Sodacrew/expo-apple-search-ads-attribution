"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const {
  ExpoAppleSearchAdsAttribution
} = _reactNative.NativeModules;

class AppleAdsAttribution {
  getAttributionData() {
    return ExpoAppleSearchAdsAttribution.getAttributionData();
  }

}

const AppleAdsAttributionInstance = new AppleAdsAttribution();
var _default = AppleAdsAttributionInstance;
exports.default = _default;
//# sourceMappingURL=index.js.map