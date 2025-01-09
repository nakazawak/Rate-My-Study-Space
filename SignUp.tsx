import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signUp } from '../firebaseConfig';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert('User Registered!');
    } catch (error) {
        const errMessage = (error as Error).message || 'An unknown error occurred.';
        alert('Error: ' + errMessage);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
