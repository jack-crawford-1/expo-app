import CustomVideoPlayer from '@/components/VideoPlayer';
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
  Button,
} from 'react-native';

const projects = [
  {
    video: require('../assets/video/garden.mp4'),
    title: 'Community Gardens',
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
    title: 'DOC Hiking Trails',
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
    title: 'Payments App',
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
    title: 'Virtual Keyboard',
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

export default function newIndex() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const player = useVideoPlayer(project.video, (player) => player.play());

  const replacePlayer = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.heading}>
          <AnimatedText>Jack Crawford</AnimatedText>
        </View>
        <View>
          <CustomVideoPlayer />
        </View>
        <View style={styles.video}>
          <VideoView
            player={player}
            style={styles.videoPH}
            nativeControls={true}
            allowsFullscreen={false}
            startsPictureInPictureAutomatically={false}
            contentFit="contain"
          />
        </View>
        <View style={styles.projectTitle}>
          <Text style={styles.header}>{project.title}</Text>
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{project.description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => Linking.openURL(project.gitHubUrl)}
            >
              <Text style={styles.text2}>See Code ⤴︎ </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={replacePlayer}>
            <Text style={styles.buttonText}>Next Project</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inner: {
    flexGrow: 1,
    paddingBottom: 70,
    paddingTop: 70,
  },
  heading: {
    height: 'auto',
    backgroundColor: 'black',
    justifyContent: 'center',
    marginBottom: 40,
  },
  video: {
    height: '30%',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  videoPH: { width: '100%', height: '100%' },

  projectTitle: {
    height: 'auto',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  textcontainer: {
    padding: 20,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 19,
    fontFamily: 'UbuntuRegular',
    color: '#cccccc',
  },
  text2: {
    fontSize: 18,
    color: 'lightgreen',
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 25,
    fontFamily: 'UbuntuBold',
  },
  header: {
    fontSize: 24,
    color: '#eeeeee',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 20,
    fontFamily: 'UbuntuBold',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    alignSelf: 'center',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: GetNatureColour(),
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  links: {},
  icons: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },

  iconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  icon: {
    width: 40,
    height: 40,
  },
});
