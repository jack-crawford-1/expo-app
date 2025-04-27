import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

export default function CustomVideoPlayer() {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = useState<{ isPlaying: boolean }>({
    isPlaying: false,
  });

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={require('../assets/video/keys.mp4')}
        useNativeControls={false}
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded) {
            setStatus({ isPlaying: status.isPlaying });
          }
        }}
      />
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() =>
            status.isPlaying
              ? videoRef.current?.pauseAsync()
              : videoRef.current?.playAsync()
          }
        >
          <Text style={styles.controlText}>
            {status.isPlaying ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
        {/* Add more custom controls as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
  controls: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
  },
  controlText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 10,
  },
});
