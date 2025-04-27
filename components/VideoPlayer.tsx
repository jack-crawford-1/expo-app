import { View, StyleSheet } from 'react-native';
import Video from 'expo-av/build/Video';

export default function MyVideoScreen() {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'https://your-video-url.mp4' }}
        useNativeControls={false}
        resizeMode="contain"
        style={styles.videoContainer}
        videoStyle={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 250,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});
