import * as React from 'react';

import { View } from 'react-native';
import AppleAdsAttribution from '@sodacrew/expo-apple-search-ads-attribution';

export default function App() {
  React.useEffect(() => {
    (async function () {
      const attributionData = await AppleAdsAttribution.getAttributionData();
      console.log({ attributionData });
    });
  }, []);

  return <View />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });
