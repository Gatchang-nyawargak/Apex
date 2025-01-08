import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

function HealthProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        {/* Image placeholder */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://www.shutterstock.com/image-photo/happy-smiling-african-black-man-260nw-510712756.jpg" }} // Placeholder image URL
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.title}>Your Health Profile</Text>

        <View style={styles.profileDetail}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.detail}>Andrew Karioki</Text>
        </View>

        <View style={styles.profileDetail}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.detail}>30</Text>
        </View>

        <View style={styles.profileDetail}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.detail}>Male</Text>
        </View>

        <View style={styles.profileDetail}>
          <Text style={styles.label}>Blood Type</Text>
          <Text style={styles.detail}>O+</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 30,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the image circular
    borderWidth: 4,
    borderColor: "#e63946", // Red border around the image
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e63946",
    textAlign: "center",
    marginBottom: 20,
  },
  profileDetail: {
    marginBottom: 15,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  detail: {
    fontSize: 18,
    color: "#555",
    fontWeight: "400",
  },
});

export default HealthProfileScreen;
