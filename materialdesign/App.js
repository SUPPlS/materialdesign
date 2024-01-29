import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'kayttaja' && password === 'salasana') {
      alert('Kirjautuminen onnistui!');
    } else {
      alert('Kirjautuminen epäonnistui. Tarkista käyttäjätunnus ja salasana.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kirjaudu sisään</Text>
      <TextInput
        style={styles.input}
        label="Käyttäjätunnus"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        label="Salasana"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Kirjaudu
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
    color: '#000000',
    padding: 16,
    borderRadius: 25,
    backgroundColor: '#00a6a1',
  },
  input: {
    width: '100%',
    marginVertical: 8,
    backgroundColor: '#00a6a1',
    color: '#000000',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#00a6a1',
    color: '#000000',
  },
});