import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Rate My Study Space!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // Makes the View take up the full height
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
  },
});

