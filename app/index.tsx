import AnimatedText from '../components/AnimatedText';
import { GetNatureColour } from '../components/RandomColours';
import { useVideoPlayer, VideoView, VideoSource } from 'expo-video';
import { useState, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const projects = [
  {
    video: require('../assets/video/garden.mp4'),
    title: 'Community Garden',
    description: `A web app for finding, contributing to, and managing community gardens. Users can submit new garden locations with coordinates and extra details. Implements authentication, Prisma with SQLite for data management, and Google Maps API for visualising location data. Built using Next.js, TypeScript, and Tailwind CSS with a focus on backend logic and user contributions.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
  },
  {
    video: require('../assets/video/hiking.mp4'),
    title: 'Hiking Trails',
    description: `A full-stack web app for browsing, sharing, and managing hiking tracks. Uses Google Maps API for map rendering, integrates external APIs for geolocation data, and stores trails in PostgreSQL. Implements authentication, geospatial logic, and API efficiency. Built to explore backend mapping tools, elevation overlays, and custom user-drawn routes.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
  },
  {
    video: require('../assets/video/subscribe.mp4'),
    title: 'Subscribe and Pay',
    description: `A full-stack app for handling subscriptions and payments using Paystation’s OAuth and Hosted Purchases API. Payment responses are validated before storing data in MongoDB. Features authentication with JWT, bcrypt, and Express, with Mongoose for managing database logic. Provides API endpoints for user auth, subscription setup, and payment handling.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
  },
  {
    video: require('../assets/video/keys.mp4'),
    title: 'Virtual Keyboard',
    description: `A mini piano app built with React, TypeScript, and Tone.js for real-time audio synthesis. Tracks keyboard input, plays chords, and handles user interaction with state-driven logic. Uses event listeners to manage key presses and trigger dynamic audio rendering. Focuses on real-time audio, sound accuracy, and performance optimisation.`,
    subtext:
      'Alias a dolore enim nesciunt blanditiis vero, animi iusto libero dignissimos voluptatibus optio.',
  },
];

const garden: VideoSource = require('../assets/video/garden.mp4');
const hiking: VideoSource = require('../assets/video/hiking.mp4');
const subscribe: VideoSource = require('../assets/video/subscribe.mp4');
const keys: VideoSource = require('../assets/video/keys.mp4');

export default function Home() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const player = useVideoPlayer(project.video, (player) => player.play());

  const replacePlayer = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <AnimatedText>Jack Crawford</AnimatedText>
      </View>

      <View style={styles.videoContainer}>
        <VideoView player={player} style={styles.video} nativeControls={true} />
      </View>

      <Text style={styles.header}>{project.title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{project.description}</Text>
        {/* <Text style={styles.text2}>{project.subtext}</Text> */}
      </View>

      <TouchableOpacity style={styles.button} onPress={replacePlayer}>
        <Text style={styles.buttonText}>Next Project</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingTop: 60,
    paddingBottom: 40,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
    fontSize: 26,
    color: '#eeeeee',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textContainer: {
    marginBottom: 2,
  },
  text1: {
    fontSize: 18,
    color: '#dddddd',
    textAlign: 'left',
    marginBottom: 12,
    lineHeight: 24,
  },
  text2: {
    fontSize: 18,
    color: '#dddddd',
    textAlign: 'left',
    lineHeight: 24,
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
});
