// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   Animated,
// } from 'react-native';
// import { useEffect, useRef, useState } from 'react';
// import Video from 'expo-av/build/Video';

// export default function CustomVideoPlayer({
//   videoSource,
//   posterSource,
// }: {
//   videoSource: any;
//   posterSource: any;
// }) {
//   const videoRef = useRef<Video | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [key, setKey] = useState(0);
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const [showPoster, setShowPoster] = useState(true);

//   const togglePlayPause = async () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         await videoRef.current.pauseAsync();
//         setIsPlaying(false);
//       } else {
//         await videoRef.current.playAsync();
//         setIsPlaying(true);
//       }
//     }
//   };

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.pauseAsync();
//       setIsPlaying(false);
//       setKey((prev) => prev + 1);
//       fadeAnim.setValue(0);
//       setShowPoster(true);
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [videoSource]);

//   const handleLoadStart = () => {
//     setShowPoster(true);
//   };

//   const handleReadyForDisplay = () => {
//     setShowPoster(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim, width: '100%' }}>
//         <Video
//           key={key}
//           ref={videoRef}
//           source={videoSource}
//           useNativeControls={false}
//           resizeMode={'contain'}
//           style={styles.videoContainer}
//           videoStyle={styles.video}
//           usePoster={true}
//           posterSource={posterSource}
//           shouldPlay={false}
//           isLooping={false}
//           onLoadStart={handleLoadStart}
//           onReadyForDisplay={handleReadyForDisplay}
//           // posterStyle={{ opacity: showPoster ? 1 : 0 }}
//           posterStyle={{
//             width: '100%',
//             height: '100%',
//             resizeMode: 'cover',
//             opacity: showPoster ? 1 : 0,
//           }}
//         />
//       </Animated.View>

//       <TouchableOpacity style={styles.button} onPress={togglePlayPause}>
//         <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   videoContainer: {
//     width: '100%',
//     height: 250,
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     position: 'relative',
//   },
//   button: {
//     position: 'absolute',
//     bottom: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

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
  const videoFadeAnim = useRef(new Animated.Value(0)).current;
  const posterFadeAnim = useRef(new Animated.Value(1)).current;

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

      videoFadeAnim.setValue(0);
      posterFadeAnim.setValue(1);

      Animated.timing(videoFadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [videoSource]);

  const handleLoadStart = () => {
    posterFadeAnim.setValue(1);
  };

  const handleReadyForDisplay = () => {
    Animated.timing(posterFadeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', aspectRatio: 16 / 9 }}>
        <Animated.Image
          source={posterSource}
          style={[
            styles.poster,
            {
              opacity: posterFadeAnim,
            },
          ]}
          resizeMode="cover"
        />

        <Animated.View
          style={{ opacity: videoFadeAnim, ...StyleSheet.absoluteFillObject }}
        >
          <Video
            key={key}
            ref={videoRef}
            source={videoSource}
            useNativeControls={false}
            resizeMode="contain"
            style={styles.videoContainer}
            videoStyle={styles.video}
            usePoster={false}
            shouldPlay={false}
            isLooping={false}
            onLoadStart={handleLoadStart}
            onReadyForDisplay={handleReadyForDisplay}
          />
        </Animated.View>
      </View>

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
    paddingLeft: 10,
    paddingRight: 10,
  },
  videoContainer: {
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  poster: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'gray',
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
