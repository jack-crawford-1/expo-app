import AnimatedText from '../components/AnimatedText';
import { GetNatureColour, GetMidtoneColour } from '../components/RandomColours';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
} from 'react-native';

const projects = [
  {
    video: require('../assets/video/garden.mp4'),
    title: 'Community Gardens Sharing',
    description: `A web app for finding, contributing to, and managing community gardens. Users can submit new garden locations with coordinates and extra details. Implements authentication, Prisma with SQLite for data management, and Google Maps API for visualising location data. Built using Next.js, TypeScript, and Tailwind CSS with a focus on backend logic and user contributions.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
    gitHubUrl: 'https://github.com/jack-crawford-1/Community-Garden-App',
    icons: [
      {
        src: require('../assets/icons/nextjs.png'),
        alt: 'Next',
      },
      {
        src: require('../assets/icons/react.png'),
        alt: 'React',
      },

      {
        src: require('../assets/icons/sqlite.png'),
        alt: 'Sqlite',
      },
      {
        src: require('../assets/icons/tailwind.png'),
        alt: 'Tailwind CSS',
      },
      {
        src: require('../assets/icons/typescript.png'),
        alt: 'TypeScript',
      },
      {
        src: require('../assets/icons/prisma.png'),
        alt: 'Prisma',
      },
      {
        src: require('../assets/icons/googlemaps.png'),
        alt: 'GoogleMaps',
      },
    ],
  },
  {
    video: require('../assets/video/hiking.mp4'),
    title: 'DOC Hiking Trails Finder',
    description: `A full-stack web app for browsing, sharing, and managing hiking tracks. Uses Google Maps API for map rendering, integrates external APIs for geolocation data, and stores trails in PostgreSQL. Implements authentication, geospatial logic, and API efficiency. Built to explore backend mapping tools, elevation overlays, and custom user-drawn routes.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
    gitHubUrl: 'https://github.com/jack-crawford-1/Hiking-App',
    icons: [
      {
        src: require('../assets/icons/react.png'),
        alt: 'React',
      },
      {
        src: require('../assets/icons/maptiler.png'),
        alt: 'Maptiler',
      },

      {
        src: require('../assets/icons/googlemaps.png'),
        alt: 'GoogleMaps',
      },
      {
        src: require('../assets/icons/express.png'),
        alt: 'express ',
      },
      {
        src: require('../assets/icons/psql.png'),
        alt: 'PSQL',
      },
    ],
  },
  {
    video: require('../assets/video/subscribe.mp4'),
    title: 'Subscribe and Pay App',
    description: `A full-stack app for handling subscriptions and payments using Paystation’s OAuth and Hosted Purchases API. Payment responses are validated before storing data in MongoDB. Features authentication with JWT, bcrypt, and Express, with Mongoose for managing database logic. Provides API endpoints for user auth, subscription setup, and payment handling.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
    gitHubUrl: 'https://github.com/jack-crawford-1/Subscribe-and-Payments',
    icons: [
      {
        src: require('../assets/icons/react.png'),
        alt: 'React',
      },
      {
        src: require('../assets/icons/vite.png'),
        alt: 'Maptiler',
      },

      {
        src: require('../assets/icons/tailwind.png'),
        alt: 'GoogleMaps',
      },
      {
        src: require('../assets/icons/node.png'),
        alt: 'express ',
      },
      {
        src: require('../assets/icons/nodemon.png'),
        alt: 'PSQL',
      },
      {
        src: require('../assets/icons/mongo.png'),
        alt: 'PSQL',
      },
    ],
  },
  {
    video: require('../assets/video/keys.mp4'),
    title: 'Virtual Keyboard with ToneJS',
    description: `A mini piano app built with React, TypeScript, and Tone.js for real-time audio synthesis. Tracks keyboard input, plays chords, and handles user interaction with state-driven logic. Uses event listeners to manage key presses and trigger dynamic audio rendering. Focuses on real-time audio, sound accuracy, and performance optimisation.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
    gitHubUrl: 'https://github.com/jack-crawford-1/Keyboard-Player-React',
    icons: [
      {
        src: require('../assets/icons/react.png'),
        alt: 'React',
      },
      {
        src: require('../assets/icons/vite.png'),
        alt: 'Maptiler',
      },

      {
        src: require('../assets/icons/css.png'),
        alt: 'GoogleMaps',
      },
      {
        src: require('../assets/icons/typescript.png'),
        alt: 'express ',
      },
      {
        src: require('../assets/icons/tonejs.png'),
        alt: 'PSQL',
      },
    ],
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const player = useVideoPlayer(project.video, (player) => {
    player.play();
    player.muted;
  });

  const replacePlayer = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <AnimatedText>Jack Crawford</AnimatedText>
      </View>

      <View style={styles.videoContainer}>
        <VideoView
          player={player}
          style={styles.video}
          nativeControls={true}
          allowsFullscreen={false}
          startsPictureInPictureAutomatically={false}
          contentFit="contain"
        />
      </View>

      <Text style={styles.header}>{project.title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{project.description}</Text>
        {/* <Text style={styles.text1}>{project.subtext}</Text> */}
        <View style={styles.linkButtonRow}>
          <TouchableOpacity onPress={() => Linking.openURL(project.gitHubUrl)}>
            <Text style={styles.text2}>See Code ⤴︎ </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={replacePlayer}>
            <Text style={styles.buttonText}>Next Project</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconRow}>
          {project.icons?.map((icon, index) => (
            <Image
              key={index}
              source={icon.src}
              style={styles.icon}
              resizeMode="contain"
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,

    flexGrow: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#141414',
    paddingTop: 10,
  },
  titleContainer: {
    alignItems: 'center',
  },

  videoContainer: {
    width: '100%',
    height: 240,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 24,
    color: '#eeeeee',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'UbuntuBold',
  },
  textContainer: {
    marginBottom: 0,
  },
  text1: {
    fontSize: 18,
    fontFamily: 'UbuntuRegular',
    color: '#cccccc',
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 25,
  },
  text2: {
    fontSize: 18,
    color: 'lightgreen',
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 25,
    fontFamily: 'UbuntuBold',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: GetNatureColour(),
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  linkButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },

  icon: {
    width: 30,
    height: 30,
  },
});
