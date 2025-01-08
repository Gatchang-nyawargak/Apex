// import React from "react";
// import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
// import { WebView } from 'react-native-webview';

// function DetailScreen() {
//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{ uri: "https://www.youtube.com/embed/biwHSwpdTZ4" }}
//         style={styles.video}
//       />

//       {/* Sexual Health Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Sexual Health</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={styles.card}>
//             <Image
//               source={{
//                 uri: "https://possibilitiesforchange.org/wp-content/uploads/2023/05/image.png",
//               }}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Adolescent sexual health Archives</Text>
//           </View>
//           <View style={styles.card}>
//             <Image
//               source={{
//                 uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
//               }}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Must Know Data on Reproductive Health</Text>
//           </View>
//         </ScrollView>
//       </View>

//       {/* Reproductive Health Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Reproductive Health</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={styles.card}>
//             <Image
//               source={{
//                 uri: "https://www.thehealthsite.com/wp-content/uploads/2024/01/ReproductiveHealth.png",
//               }}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Why Is Education Regarding Reproduction Essential?</Text>
//           </View>
//           <View style={styles.card}>
//             <Image
//               source={{
//                 uri: "https://www.pharmacist.com/Portals/0/EasyDNNNews/1195/images/cpe-december-2022-600-600-p-L-97.jpg",
//               }}
//               style={styles.cardImage}
//             />
//             <Text style={styles.cardText}>Pharmacists increasing access to reproductive health care</Text>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     paddingTop: 20,
//   },
//   video: {
//     width: '100%',
//     height: 300, // Adjust as per your needs
//   },
//   section: {
//     marginBottom: 25, // Add space between sections
//   },
//   sectionTitle: {
//     fontSize: 24, // Larger font size for section titles
//     fontWeight: "700", // Bold font for emphasis
//     color: "#2e3b4e", // Darker color for the title
//     marginBottom: 15, // Space between title and content
//     textTransform: "capitalize", // Capitalize the first letter of each word
//   },
//   card: {
//     marginRight: 15, // Increase space between cards
//     width: 230, // Adjust card width to provide more space
//     borderRadius: 15, // Rounded corners for a softer look
//     backgroundColor: "#fff", // White background for each card
//     shadowColor: "#000", // Shadow for card for better elevation
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5, // Elevation for Android shadow
//   },
//   cardImage: {
//     width: "100%",
//     height: 140, // A slightly taller image for better proportion
//     borderTopLeftRadius: 15, // Rounded top-left corner for images
//     borderTopRightRadius: 15, // Rounded top-right corner for images
//   },
//   cardText: {
//     fontSize: 16, // Slightly larger font for text
//     fontWeight: "500", // Semi-bold for better readability
//     color: "#3e4e58", // Dark text for contrast
//     textAlign: "center",
//     padding: 10, // Add padding for better spacing around the text
//   },
// });

// export default DetailScreen;


import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { WebView } from 'react-native-webview';

function DetailScreen() {
  return (
    <View style={styles.container}>
      {/* YouTube Video Section */}
      <WebView
        source={{ uri: "https://www.youtube.com/embed/biwHSwpdTZ4" }}
        style={styles.video}
      />

      {/* Sexual Health Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sexual Health</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://possibilitiesforchange.org/wp-content/uploads/2023/05/image.png",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Adolescent sexual health Archives</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Must Know Data on Reproductive Health</Text>
          </View>
        </ScrollView>
      </View>

      {/* Reproductive Health Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reproductive Health</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://www.thehealthsite.com/wp-content/uploads/2024/01/ReproductiveHealth.png",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Why Is Education Regarding Reproduction Essential?</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://www.pharmacist.com/Portals/0/EasyDNNNews/1195/images/cpe-december-2022-600-600-p-L-97.jpg",
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Pharmacists increasing access to reproductive health care</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  video: {
    width: '100%',
    height: 300, // Adjust as per your needs
  },
  section: {
    marginBottom: 25, // Add space between sections
  },
  sectionTitle: {
    fontSize: 24, // Larger font size for section titles
    fontWeight: "700", // Bold font for emphasis
    color: "#2e3b4e", // Darker color for the title
    marginBottom: 15, // Space between title and content
    textTransform: "capitalize", // Capitalize the first letter of each word
  },
  card: {
    marginRight: 15, // Increase space between cards
    width: 230, // Adjust card width to provide more space
    borderRadius: 15, // Rounded corners for a softer look
    backgroundColor: "#fff", // White background for each card
    shadowColor: "#000", // Shadow for card for better elevation
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Elevation for Android shadow
  },
  cardImage: {
    width: "100%",
    height: 140, // A slightly taller image for better proportion
    borderTopLeftRadius: 15, // Rounded top-left corner for images
    borderTopRightRadius: 15, // Rounded top-right corner for images
  },
  cardText: {
    fontSize: 16, // Slightly larger font for text
    fontWeight: "500", // Semi-bold for better readability
    color: "#3e4e58", // Dark text for contrast
    textAlign: "center",
    padding: 10, // Add padding for better spacing around the text
  },
});

export default DetailScreen;
