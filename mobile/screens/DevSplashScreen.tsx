import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, ActivityIndicator } from 'react-native';

const DevSplashScreen = ({ navigation }: any) => {
  const logoAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Quick animation for development
    Animated.sequence([
      Animated.timing(logoAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.bezier(0.4, 0.8, 0.2, 1),
      }),
      Animated.timing(textAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.exp),
      })
    ]).start(() => {
      // Quick transition to Welcome screen to start the full flow
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 800); // Reduced from 1500ms to 800ms for faster development
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          opacity: logoAnim,
          transform: [
            {
              scale: logoAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
            {
              translateY: logoAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [40, 0],
              }),
            },
          ],
        }}
      >
        <Image source={require('../assets/Asset37.png')} style={styles.logo} resizeMode="contain" />
      </Animated.View>
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: textAnim,
            transform: [
              {
                translateY: textAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        Not Just Collabs. Real Connections.
      </Animated.Text>
      <Animated.View style={{ opacity: textAnim, marginTop: 32 }}>
        <ActivityIndicator size="large" color="#fff" />
      </Animated.View>
      
      {/* Development indicator */}
      <View style={styles.devIndicator}>
        <Text style={styles.devText}>DEV MODE - Quick Start</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FC5213',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '400',
    textAlign: 'center',
  },
  devIndicator: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  devText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DevSplashScreen; 