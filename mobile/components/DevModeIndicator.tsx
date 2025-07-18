import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DevModeIndicator = () => {
  if (!__DEV__) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>DEV MODE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 10,
    backgroundColor: '#FF6B2C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 9999,
  },
  text: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default DevModeIndicator; 