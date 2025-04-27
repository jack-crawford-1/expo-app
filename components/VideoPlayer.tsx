import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import Video from 'expo-av/build/Video';

export default function CustomVideoPlayer({
  videoSource,
  posterSource,
}: {
  videoSource: any;
  posterSource: any;
}) {
  const videoRef = useRef<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pauseAsync();
      setIsPlaying(false);
      setKey((prev) => prev + 1);
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [videoSource]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, width: '100%' }}>
        <Video
          key={key}
          ref={videoRef}
          source={videoSource}
          useNativeControls={false}
          resizeMode={'contain'}
          style={styles.videoContainer}
          videoStyle={styles.video}
          usePoster={true}
          posterSource={posterSource}
        />
      </Animated.View>

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
