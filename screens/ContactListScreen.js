import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const contacts = [
  { id: '1', name: 'John', phone: '333-555-333', image: "" },
  { id: '2', name: 'Ali', phone: '987-654-3210' , image: ''},
  { id: '3', name: 'Alex', phone: '555-123-4567', image: 'https://via.placeholder.com/150'},
  { id: '4', name: 'Farmaan', phone: '123-456-7890', image: 'https://via.placeholder.com/150'},
  { id: '5', name: 'Zack', phone: '444-444-444' , image: 'https://via.placeholder.com/150'},
  { id: '6', name: 'Yasir', phone: '555-333-111', image: 'https://via.placeholder.com/150'},
  { id: '7', name: 'Faisal', phone: '123-456-7890', image: 'https://via.placeholder.com/150'},
  { id: '8', name: 'Raheel', phone: '987-654-3210' , image: 'https://via.placeholder.com/150'},
  { id: '9', name: 'Hamza', phone: '555-123-455', image: 'https://via.placeholder.com/150'},
  { id: '10', name: 'Awais', phone: '555-123-4522', image: 'https://via.placeholder.com/150'},
];

const ContactListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ContactDetail', { contact: item })}>
      
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#888',
  },
});

export default ContactListScreen;