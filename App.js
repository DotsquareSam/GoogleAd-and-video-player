import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
// import { TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import Video from 'react-native-video';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7217457469060779~4959760288';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
//   componentDidMount()
// {
//   admob()
//   .setRequestConfiguration({
//     // Update all future requests suitable for parental guidance
//     maxAdContentRating: MaxAdContentRating.PG,

//     // Indicates that you want your content treated as child-directed for purposes of COPPA.
//     tagForChildDirectedTreatment: true,

//     // Indicates that you want the ad request to be handled in a
//     // manner suitable for users under the age of consent.
//     tagForUnderAgeOfConsent: true,
//   })
//   .then(() => {
//     // Request config successfully set!
//   });
// }
  render() {
    return (
      <View> 
 <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
