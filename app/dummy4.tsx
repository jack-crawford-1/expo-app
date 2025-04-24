import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Dummy4() {
  return (
    <View style={styles.container}>
      <Text>Dummy Page 4</Text>
      <Link href="/dummy1" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Next →</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 6,
  },
  buttonText: { color: 'white' },
});
