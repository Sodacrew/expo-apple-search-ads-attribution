"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var RNAppleAdsAttribution = react_native_1.NativeModules.RNAppleAdsAttribution;
var AppleAdsAttribution = /** @class */ (function () {
    function AppleAdsAttribution() {
    }
    AppleAdsAttribution.prototype.getAttributionData = function () {
        return RNAppleAdsAttribution.getAttributionData();
    };
    return AppleAdsAttribution;
}());
var AppleAdsAttributionInstance = new AppleAdsAttribution();
exports.default = AppleAdsAttributionInstance;
