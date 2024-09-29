import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const ContactDetailScreen = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
     <Image source={require('../assets/dummy.png')} style={styles.image} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
      <Button title="Back to Contacts" color={"#EC1BE35C"}  onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    backgroundColor:"#EC1BE35C"

  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
});

export default ContactDetailScreen;
