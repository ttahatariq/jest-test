import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client';
// import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, BannerAdSize, AdEventType, RewardedAdEventType } from 'react-native-google-mobile-ads';
// import React, { useEffect } from 'react';

// const adUnitId =  'ca-app-pub-9152919921144751/7643014312';
// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   // keywords: ['fashion', 'clothing'],
// });

// const adUnitId =  TestIds.REWARDED;
// const adUnitId = 'ca-app-pub-9152919921144751/6845340913'
// const rewarded = RewardedAd.createForAdRequest(adUnitId, {
//   requestNonPersonalizedAdsOnly: true,
//   // keywords: ['fashion', 'clothing'],
// });

export default function App() {

  // useEffect(() => {
  //   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
  //       interstitial.show();
  //   });
  //   // Start loading the interstitial straight away
  //   interstitial.load();
  //   // Unsubscribe from events on unmount
  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   // console.log('Called')
  //   const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
  //     console.log('Loaded ??')  
  //     rewarded.show();
  //   });
  //   const unsubscribeEarned = rewarded.addAdEventListener(
  //     RewardedAdEventType.EARNED_REWARD,
  //     reward => {
  //       console.log('User earned reward of ', reward);
  //     },
  //   );

  //   // Start loading the rewarded ad straight away
  //   rewarded.load();

  //   // Unsubscribe from events on unmount
  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeEarned();
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      
      <Text> In the name of Allah......!!!!!!! </Text>
      <Text> In the name of Allah </Text>
      <Text> In the name of Allah </Text>
      <Text> In the name of Allah </Text>
      <Text> In the name of Allah </Text>

      {/* <Text> In the Name of Allah </Text>
      <StatusBar style="auto" /> */}

      {/* <BannerAd 
      size={BannerAdSize.BANNER} 
      unitId={TestIds.BANNER} 
      // unitId={"ca-app-pub-9152919921144751/4080981743"} 
      // requestOptions={{
      //   requestNonPersonalizedAdsOnly:true,
      // }}
      /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
