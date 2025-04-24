import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Dummy2() {
  return (
    <View style={styles.container}>
      <Text>Dummy Page 2</Text>
      <Link href="/dummy3" asChild>
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
