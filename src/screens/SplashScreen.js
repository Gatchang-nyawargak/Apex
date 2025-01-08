import React from "react";
import { View, Text, StyleSheet, Animated, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export const SplashScreen = ({ navigation }) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current; 
  
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
  
      const timer = setTimeout(() => {
        navigation.replace("Home");
      }, 1000); 
  
      return () => clearTimeout(timer); 
    }, [navigation, fadeAnim]);
  
    return (
      <View style={styles.splashContainer}>
        <Animated.View style={{  opacity: fadeAnim }}>
          <Text style={styles.splashText}>Apex</Text>
        </Animated.View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f8f8f8",
      padding:30
    },
    splashText: {
      fontSize: 48,
      fontWeight: "bold",
      color: "#e63946",
      
    },
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    cardImage: {
        width: "70%",
        height: 100,
        borderRadius: 8,
      },
    
  })  
  
  export default SplashScreen