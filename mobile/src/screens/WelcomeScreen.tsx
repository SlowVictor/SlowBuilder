import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SlowBuilder</Text>
      <Text style={styles.subtitle}>Day by day.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#171717',
  },
  subtitle: {
    fontSize: 18,
    color: '#737373',
    marginTop: 8,
  },
});
