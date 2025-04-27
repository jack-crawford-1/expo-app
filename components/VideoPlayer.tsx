// VideoPlayer.tsx
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRef, useState } from 'react';
import Video from 'expo-av/build/Video';

export default function CustomVideoPlayer({
  videoSource,
}: {
  videoSource: any;
}) {
  const videoRef = useRef<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await videoRef.current.playAsync();
        setIsPlaying(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={videoSource}
        useNativeControls={false}
        resizeMode="contain"
        style={styles.videoContainer}
        videoStyle={styles.video}
      />

      <TouchableOpacity style={styles.button} onPress={togglePlayPause}>
        <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
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
  button: {
    position: 'absolute',
    bottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
