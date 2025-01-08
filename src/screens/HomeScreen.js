// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";

// export const HomeScreen = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("Home");

//   const data = [
//     {
//       text: "Navigating Male and Female Infertility: Diagnosis and Solutions",
//       image:
//         "https://media.istockphoto.com/id/1006452362/photo/a-condom-and-birth-control-pills.jpg?s=1024x1024&w=is&k=20&c=Eu2bpglWLYXMKqlSAYOlvuAoqrGfOPbCxOWXxd8JobI=",
//     },
//     {
//       text: "Understanding Sexual Dysfunction: Causes and Treatments",
//       image:
//         "https://cdn.create.vista.com/api/media/small/558749896/stock-photo-frustrated-depressed-millennial-african-american-female-sad-and-ignoring-husband-after-quarrel-sits-at-bed",
//     },
//     {
//       text: "The Role of Testosterone Replacement Therapy",
//       image:
//         "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg",
//     },
//     {
//       text: "Sexual Desire, Arousal, and Pleasure",
//       image:
//         "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
//     },
//   ];

//   const filteredData = data.filter((item) =>
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>APEX SEXUAL HEALTH CLINIC</Text>
//           <Text style={styles.headerText}>ASHC</Text>
//         </View>

//         <View style={styles.searchBarContainer}>
//           <TextInput
//             style={styles.searchBar}
//             placeholder="Search..."
//             value={searchTerm}
//             onChangeText={(text) => setSearchTerm(text)}
//           />
//         </View>
//       </View>
//       <ScrollView style={styles.container}>
//         <View style={styles.headlines}>
//           <Text style={styles.sectionTitle}>RESULTS</Text>
//           {filteredData.length > 0 ? (
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {filteredData.map((item, index) => (
//                 <View key={index} style={styles.headlineCard}>
//                   <Image
//                     source={{ uri: item.image }}
//                     style={styles.headlineImage}
//                   />
//                   <Text style={styles.headlineText}>{item.text}</Text>
//                 </View>
//               ))}
//             </ScrollView>
//           ) : (
//             <View style={{ flexDirection: "column" }}>
//               <Ionicons
//                 name="alert-circle-outline"
//                 color="gray"
//                 size={48}
//                 margin={10}
//                 style={{ textAlign: "center" }}
//               />
//               <Text style={styles.noResultsText}>No results found</Text>
//             </View>
//           )}
//         </View>

//         {activeTab === "Home" && (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Sexual Education</Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View style={[styles.card]}>
//                   <Image
//                     source={{
//                       uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Understanding Romance, arousal and the human body
//                   </Text>
//                 </View>
//                 <View style={styles.card}>
//                   <Image
//                     source={{
//                       uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Must Know data on Reproductive health
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>

//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Trending News</Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View
//                   style={[styles.card, { flexDirection: "column", flex: 1 }]}
//                 >
//                   <Image
//                     source={{
//                       uri: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     The Role of Testosterone Replacement Therapy
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Sexual Dysfunction</Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View
//                   style={[styles.card, { flexDirection: "column", flex: 1 }]}
//                 >
//                   <Image
//                     source={{
//                       uri: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/01/couple-hug-bed-1296x728-header-1024x575.jpg",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Sexual dysfunction: Symptoms, causes, and treatment
//                   </Text>
//                 </View>
//                 <View
//                   style={[styles.card, { flexDirection: "column", flex: 1 }]}
//                 >
//                   <Image
//                     source={{
//                       uri: "https://familydoctor.org/wp-content/uploads/2000/09/sexual-dysfunction.jpg",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Here are some articles about sexual dysfunction:
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>

//             <View style={styles.section}>
//               <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
//                 Mental Health Content
//               </Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View
//                   style={[styles.card, { flexDirection: "column", flex: 1 }]}
//                 >
//                   <Image
//                     source={{
//                       uri: "https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Importance of Menta Health checkups
//                   </Text>
//                 </View>
//                 <View
//                   style={[styles.card, { flexDirection: "column", flex: 1 }]}
//                 >
//                   <Image
//                     source={{
//                       uri: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Demystifying Mental Health:
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>
//           </>
//         )}

//         {activeTab === "Sexual Dysfunction" && (
//           <View style={styles.section}>
//             <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
//               Sexual Dysfunction Content
//             </Text>
//             <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
//               <Image
//                 source={{
//                   uri: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/01/couple-hug-bed-1296x728-header-1024x575.jpg",
//                 }}
//                 style={styles.cardImage}
//               />
//               <Text style={styles.cardText}>
//                 Sexual dysfunction: Symptoms, causes, and treatment
//               </Text>
//             </View>
//             <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
//               <Image
//                 source={{
//                   uri: "https://familydoctor.org/wp-content/uploads/2000/09/sexual-dysfunction.jpg",
//                 }}
//                 style={styles.cardImage}
//               />
//               <Text style={styles.cardText}>
//                 Here are some articles about sexual dysfunction:
//               </Text>
//             </View>
//             <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
//               <Image
//                 source={{
//                   uri: "https://images.theconversation.com/files/557971/original/file-20231107-17-khqow.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=668&h=324&fit=crop",
//                 }}
//                 style={styles.cardImage}
//               />
//               <Text>
//                 Understanding Sexual Dysfunction: Causes and Treatments
//               </Text>
//             </View>
//           </View>
//         )}

//         {activeTab === "Trending News" && (
//           <>
//             <View style={styles.section}>
//               <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
//                 Trending News
//               </Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View style={styles.card}>
//                   <Image
//                     source={{
//                       uri: "https://images.theconversation.com/files/557971/original/file-20231107-17-khqow.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=668&h=324&fit=crop",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     Sexual Desire, Arousal, and Pleasure
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>

//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>Health News</Text>
//               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                 <View style={styles.card}>
//                   <Image
//                     source={{
//                       uri: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg",
//                     }}
//                     style={styles.cardImage}
//                   />
//                   <Text style={styles.cardText}>
//                     The Role of Testosterone Replacement Therapy
//                   </Text>
//                 </View>
//               </ScrollView>
//             </View>
//           </>
//         )}

//         {activeTab === "Mental Health" && (
//           <View style={styles.section}>
//             <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
//               Mental Health Content
//             </Text>
//             <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
//               <Image
//                 source={{
//                   uri: "https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png",
//                 }}
//                 style={styles.cardImage}
//               />
//               <Text style={styles.cardText}>
//                 Importance of Menta Health checkups
//               </Text>
//             </View>
//             <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
//               <Image
//                 source={{
//                   uri: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=",
//                 }}
//                 style={styles.cardImage}
//               />
//               <Text style={styles.cardText}>Demystifying Mental Health:</Text>
//             </View>
//           </View>
//         )}
//       </ScrollView>

//       <View style={styles.bottomNav}>
//         {[
//           "Home",
//           "Trending News",
//           "Sexual Dysfunction",
//           "Mental Health",
//           // "Reproductive Health",
//         ].map((tab) => (
//           <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} 
//           style={[
//             styles.tab,
//             activeTab === tab ? styles.activeTab : styles.inactiveTab,

//           ]}
// >
//             <Text
//               style={[
//                 styles.navText,
//                 activeTab === tab && styles.activeNavText,
//               ]}
//               color={'white'}
//             >
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//     inactiveTab:{
//         borderColor:"red",  
//         borderWidth:1,
//         padding: 5,
//         margin: 4,
//         borderRadius: 10,


//     },
//     activeTab:{
//         backgroundColor:"red",  
//         padding: 5,
//         margin: 5,
//         borderRadius: 10,

//     },
//     activeNavText:{
//         color:"white",

//     },
//   container: {
//     flex: 1,
//   },
//   section: {
//     padding: 10,
//   },
//   card: {
//     marginRight: 10,
//     width: 150,
//   },
//   cardImage: {
//     width: "100%",
//     height: 90,
//     borderRadius: 8,
//   },
//   cardText: {
//     fontSize: 13,
//     marginTop: 5,
//     fontWeight: "500",
//   },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 10,
//     backgroundColor: "#ffffff",
//     borderTopWidth: 1,
//     borderColor: "#ccc",
//   },
//   navItem: {
//     alignItems: "center",
//   },
//   navBarIcon: {
//     borderRadius: 4,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: 24,
//     lineHeight: 24,
//     width: 24,
//     height: 24,
//   },

//   safeArea: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     backgroundColor: "#e63946",
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#ffffff",
//   },
//   navBar: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 10,
//     margin: 5,
//     borderRadius: 5,
//     backgroundColor: "#8888",
//     // backgroundColor: "grey",
//   },
//   navText: {
//     fontSize: 12,
//     color: "#e63946",
//     fontWeight: "600",
//   },
//   searchBarContainer: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   headlines: {
//     padding: 10,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//     color: "#e63946",
//   },
//   headlineCard: {
//     marginRight: 10,
//     width: 180,
//   },
//   headlineImage: {
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//   },
//   headlineText: {
//     fontSize: 13,
//     marginTop: 5,
//     fontWeight: "500",
//   },
//   noResultsText: {
//     fontSize: 20,
//     color: "#666",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 10,
//     backgroundColor: "#f1f1f1",
//     borderTopWidth: 1,
//     borderColor: "#ccc",
//   },
//   navItem: {
//     alignItems: "center",
//   },
// });

// import React, { useState } from "react";
// import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";  // Icons for navigation
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // Using tab navigation

// // HomeScreen component
// export const HomeScreen = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("Home");

//   const data = [
//     { text: "Navigating Male and Female Infertility: Diagnosis and Solutions", image: "https://media.istockphoto.com/id/1006452362/photo/a-condom-and-birth-control-pills.jpg?s=1024x1024&w=is&k=20&c=Eu2bpglWLYXMKqlSAYOlvuAoqrGfOPbCxOWXxd8JobI=" },
//     { text: "Understanding Sexual Dysfunction: Causes and Treatments", image: "https://cdn.create.vista.com/api/media/small/558749896/stock-photo-frustrated-depressed-millennial-african-american-female-sad-and-ignoring-husband-after-quarrel-sits-at-bed" },
//     { text: "The Role of Testosterone Replacement Therapy", image: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg" },
//     { text: "Sexual Desire, Arousal, and Pleasure", image: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" },
//   ];

//   const filteredData = data.filter((item) =>
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>APEX SEXUAL HEALTH CLINIC</Text>
//       </View>

//       <View style={styles.searchBarContainer}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search..."
//           value={searchTerm}
//           onChangeText={(text) => setSearchTerm(text)}
//         />
//         <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
//       </View>

//       <ScrollView style={styles.container}>
//         <View style={styles.headlines}>
//           <Text style={styles.sectionTitle}>  Latest News</Text>
//           {filteredData.length > 0 ? (
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {filteredData.map((item, index) => (
//                 <View key={index} style={styles.headlineCard}>
//                   <Image source={{ uri: item.image }} style={styles.headlineImage} />
//                   <Text style={styles.headlineText}>{item.text}</Text>
//                 </View>
//               ))}
//             </ScrollView>
//           ) : (
//             <View style={styles.noResults}>
//               <Ionicons name="alert-circle-outline" color="gray" size={48} style={{ textAlign: "center" }} />
//               <Text style={styles.noResultsText}>No results found</Text>
//             </View>
//           )}
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Sexual Health</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={[styles.card]}>
//               <Image source={{ uri: "https://possibilitiesforchange.org/wp-content/uploads/2023/05/image.png" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Adoescent sexual health Archives - Possibilities for Change
// </Text>
//             </View>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Must Know Data on Reproductive Health</Text>
//             </View>
//           </ScrollView>
//         </View>
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Reproductive Health</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={[styles.card]}>
//               <Image source={{ uri: "https://www.thehealthsite.com/wp-content/uploads/2024/01/ReproductiveHealth.png" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>In Conclusion | Reproductive Health: Why Is Education Regarding Reproduction Essential?</Text>
//             </View>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://www.pharmacist.com/Portals/0/EasyDNNNews/1195/images/cpe-december-2022-600-600-p-L-97.jpg" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Pharmacists increasing access to reproductive health care
// </Text>
//             </View>
//           </ScrollView>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Tab Navigation setup
// const Tab = createBottomTabNavigator();

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen 
//           name="Home" 
//           component={HomeScreen} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="home" color={color} size={size} />
//             ),
//           }} 
//         />
//         <Tab.Screen 
//           name="Health Tips" 
//           component={HealthTipsScreen} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="healing" color={color} size={size} />
//             ),
//           }} 
//         />
//         <Tab.Screen 
//           name="Profile" 
//           component={ProfileScreen} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="person" color={color} size={size} />
//             ),
//           }} 
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// // Styles
// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//     paddingTop: 30,
//   },
//   header: {
//     alignItems: "center",
//     paddingBottom: 10,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#e63946",
//   },
//   searchBarContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   searchBar: {
//     flex: 1,
//     height: 40,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     paddingLeft: 10,
//   },
//   searchIcon: {
//     marginLeft: 10,
//   },
//   container: {
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginVertical: 10,
//   },
//   headlines: {
//     marginBottom: 20,
//   },
//   headlineCard: {
//     marginRight: 15,
//     width: 250,
//     borderRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   headlineImage: {
//     width: "100%",
//     height: 150,
//     borderRadius: 10,
//   },
//   headlineText: {
//     padding: 10,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   noResults: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   noResultsText: {
//     color: "gray",
//     fontSize: 18,
//   },
//   section: {
//     marginVertical: 20,
//   },
//   card: {
//     width: 200,
//     marginRight: 15,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     padding: 10,
//     alignItems: "center",
//   },
//   cardImage: {
//     width: "100%",
//     height: 120,
//     borderRadius: 10,
//   },
//   cardText: {
//     marginTop: 10,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
// });

// // Additional screens for navigation
// const HealthTipsScreen = () => (
//   <View style={styles.section}>
//     <Text>Health Tips content here</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={styles.section}>
//     <Text>Profile content here</Text>
//   </View>
// );

// export default AppNavigator;

// import React, { useState } from "react";
// import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // HomeScreen Component
// function HomeScreen() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const data = [
//     { text: "Navigating Male and Female Infertility: Diagnosis and Solutions", image: "https://media.istockphoto.com/id/1006452362/photo/a-condom-and-birth-control-pills.jpg?s=1024x1024&w=is&k=20&c=Eu2bpglWLYXMKqlSAYOlvuAoqrGfOPbCxOWXxd8JobI=" },
//     { text: "Understanding Sexual Dysfunction: Causes and Treatments", image: "https://cdn.create.vista.com/api/media/small/558749896/stock-photo-frustrated-depressed-millennial-african-american-female-sad-and-ignoring-husband-after-quarrel-sits-at-bed" },
//     { text: "The Role of Testosterone Replacement Therapy", image: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg" },
//     { text: "Sexual Desire, Arousal, and Pleasure", image: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" },
//   ];

//   const filteredData = data.filter((item) =>
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>APEX SEXUAL HEALTH CLINIC</Text>
//       </View>

//       <View style={styles.searchBarContainer}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search..."
//           value={searchTerm}
//           onChangeText={(text) => setSearchTerm(text)}
//         />
//         <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
//       </View>

//       <ScrollView style={styles.container}>
//         <View style={styles.headlines}>
//           <Text style={styles.sectionTitle}>Latest News</Text>
//           {filteredData.length > 0 ? (
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {filteredData.map((item, index) => (
//                 <View key={index} style={styles.headlineCard}>
//                   <Image source={{ uri: item.image }} style={styles.headlineImage} />
//                   <Text style={styles.headlineText}>{item.text}</Text>
//                 </View>
//               ))}
//             </ScrollView>
//           ) : (
//             <View style={styles.noResults}>
//               <Ionicons name="alert-circle-outline" color="gray" size={48} style={{ textAlign: "center" }} />
//               <Text style={styles.noResultsText}>No results found</Text>
//             </View>
//           )}
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Sexual Health</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={[styles.card]}>
//               <Image source={{ uri: "https://possibilitiesforchange.org/wp-content/uploads/2023/05/image.png" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Adolescent sexual health Archives</Text>
//             </View>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Must Know Data on Reproductive Health</Text>
//             </View>
//           </ScrollView>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Reproductive Health</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={[styles.card]}>
//               <Image source={{ uri: "https://www.thehealthsite.com/wp-content/uploads/2024/01/ReproductiveHealth.png" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Why Is Education Regarding Reproduction Essential?</Text>
//             </View>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://www.pharmacist.com/Portals/0/EasyDNNNews/1195/images/cpe-december-2022-600-600-p-L-97.jpg" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Pharmacists increasing access to reproductive health care</Text>
//             </View>
//           </ScrollView>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // Detail Screen Component
// function DetailScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Detail Screen Content</Text>
//     </View>
//   );
// }

// // Profile Screen Component
// function ProfileScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text>Profile Content</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// // Main App Component
// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: {
//             height: 60,
//             borderTopWidth: 1,
//             borderTopColor: '#e0e0e0',
//             backgroundColor: '#ffffff',
//           },
//           tabBarActiveTintColor: '#e63946',
//           tabBarInactiveTintColor: '#999999',
//           tabBarLabelStyle: {
//             fontSize: 12,
//             marginBottom: 5,
//           },
//         }}
//       >
//         <Tab.Screen 
//           name="Home" 
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome5 name="home" color={color} size={22} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Detail" 
//           component={DetailScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="article" color={color} size={24} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Profile" 
//           component={ProfileScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <FontAwesome5 name="user-alt" color={color} size={20} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//     paddingTop: 30,
//   },
//   header: {
//     alignItems: "center",
//     paddingBottom: 10,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#e63946",
//   },
//   searchBarContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   searchBar: {
//     flex: 1,
//     height: 40,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     paddingLeft: 10,
//   },
//   searchIcon: {
//     marginLeft: 10,
//   },
//   container: {
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginVertical: 10,
//   },
//   headlines: {
//     marginBottom: 20,
//   },
//   headlineCard: {
//     marginRight: 15,
//     width: 250,
//     borderRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   headlineImage: {
//     width: "100%",
//     height: 150,
//     borderRadius: 10,
//   },
//   headlineText: {
//     padding: 10,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   noResults: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   noResultsText: {
//     color: "gray",
//     fontSize: 18,
//   },
//   section: {
//     marginVertical: 20,
//   },
//   card: {
//     width: 200,
//     marginRight: 15,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     padding: 10,
//     alignItems: "center",
//   },
//   cardImage: {
//     width: "100%",
//     height: 120,
//     borderRadius: 10,
//   },
//   cardText: {
//     marginTop: 10,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

// import React, { useState } from "react";
// import { View, Text, ScrollView, Image, StyleSheet, TextInput } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // HomeScreen component
// export const HomeScreen = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const data = [
//     { text: "Navigating Male and Female Infertility: Diagnosis and Solutions", image: "https://media.istockphoto.com/id/1006452362/photo/a-condom-and-birth-control-pills.jpg?s=1024x1024&w=is&k=20&c=Eu2bpglWLYXMKqlSAYOlvuAoqrGfOPbCxOWXxd8JobI=" },
//     { text: "Understanding Sexual Dysfunction: Causes and Treatments", image: "https://cdn.create.vista.com/api/media/small/558749896/stock-photo-frustrated-depressed-millennial-african-american-female-sad-and-ignoring-husband-after-quarrel-sits-at-bed" },
//     { text: "The Role of Testosterone Replacement Therapy", image: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg" },
//     { text: "Sexual Desire, Arousal, and Pleasure", image: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" },
//   ];

//   const filteredData = data.filter((item) =>
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>APEX SEXUAL HEALTH CLINIC</Text>
//       </View>

//       <View style={styles.searchBarContainer}>
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search..."
//           value={searchTerm}
//           onChangeText={(text) => setSearchTerm(text)}
//         />
//         <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
//       </View>

//       <ScrollView style={styles.container}>
//         <View style={styles.headlines}>
//           <Text style={styles.sectionTitle}>Latest News</Text>
//           {filteredData.length > 0 ? (
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {filteredData.map((item, index) => (
//                 <View key={index} style={styles.headlineCard}>
//                   <Image source={{ uri: item.image }} style={styles.headlineImage} />
//                   <Text style={styles.headlineText}>{item.text}</Text>
//                 </View>
//               ))}
//             </ScrollView>
//           ) : (
//             <View style={styles.noResults}>
//               <Ionicons name="alert-circle-outline" color="gray" size={48} style={{ textAlign: "center" }} />
//               <Text style={styles.noResultsText}>No results found</Text>
//             </View>
//           )}
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Sexual Health</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://possibilitiesforchange.org/wp-content/uploads/2023/05/image.png" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Adolescent sexual health Archives</Text>
//             </View>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Must Know Data on Reproductive Health</Text>
//             </View>
//           </ScrollView>
//         </View>

//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Reproductive Health</Text>
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://www.thehealthsite.com/wp-content/uploads/2024/01/ReproductiveHealth.png" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Why Is Education Regarding Reproduction Essential?</Text>
//             </View>
//             <View style={styles.card}>
//               <Image source={{ uri: "https://www.pharmacist.com/Portals/0/EasyDNNNews/1195/images/cpe-december-2022-600-600-p-L-97.jpg" }} style={styles.cardImage} />
//               <Text style={styles.cardText}>Pharmacists increasing access to reproductive health care</Text>
//             </View>
//           </ScrollView>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // Detail Screen Component
// export const DetailScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Text>Detail Screen Content</Text>
//     </View>
//   );
// };

// // Profile Screen Component
// export const ProfileScreen = () => {
//   return (
//     <View style={styles.screen}>
//       <Text>Profile Content</Text>
//     </View>
//   );
// };

// const Tab = createBottomTabNavigator();

// // Main App Component
// export const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerShown: false,
//           tabBarStyle: {
//             height: 60,
//             borderTopWidth: 1,
//             borderTopColor: '#e0e0e0',
//             backgroundColor: '#ffffff',
//           },
//           tabBarActiveTintColor: '#e63946',
//           tabBarInactiveTintColor: '#999999',
//           tabBarLabelStyle: {
//             fontSize: 12,
//             marginBottom: 5,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="home" color={color} size={22} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Post"
//           component={DetailScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="article" color={color} size={24} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialIcons name="account-circle" color={color} size={24} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#f8f8f8",
//     paddingTop: 30,
//   },
//   header: {
//     alignItems: "center",
//     paddingBottom: 10,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#e63946",
//   },
//   searchBarContainer: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   searchBar: {
//     flex: 1,
//     height: 40,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     paddingLeft: 10,
//   },
//   searchIcon: {
//     marginLeft: 10,
//   },
//   container: {
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginVertical: 10,
//   },
//   headlines: {
//     marginBottom: 20,
//   },
//   headlineCard: {
//     marginRight: 15,
//     width: 250,
//     borderRadius: 10,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   headlineImage: {
//     width: "100%",
//     height: 150,
//     borderRadius: 10,
//   },
//   headlineText: {
//     padding: 10,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   noResults: {
//     alignItems: "center",
//     marginTop: 20,
//   },
//   noResultsText: {
//     color: "gray",
//     fontSize: 18,
//   },
//   section: {
//     marginVertical: 20,
//   },
//   card: {
//     width: 200,
//     marginRight: 15,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   cardImage: {
//     width: "100%",
//     height: 120,
//   },
//   cardText: {
//     padding: 10,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
// });

import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// HomeScreen component
export const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    { text: "Navigating Male and Female Infertility: Diagnosis and Solutions", image: "https://media.istockphoto.com/id/1006452362/photo/a-condom-and-birth-control-pills.jpg?s=1024x1024&w=is&k=20&c=Eu2bpglWLYXMKqlSAYOlvuAoqrGfOPbCxOWXxd8JobI=" },
    { text: "Understanding Sexual Dysfunction: Causes and Treatments", image: "https://cdn.create.vista.com/api/media/small/558749896/stock-photo-frustrated-depressed-millennial-african-american-female-sad-and-ignoring-husband-after-quarrel-sits-at-bed" },
    { text: "The Role of Testosterone Replacement Therapy", image: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg" },
    { text: "Sexual Desire, Arousal, and Pleasure", image: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" },
  ];

  const filteredData = data.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>APEX SEXUAL HEALTH CLINIC</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.headlines}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          {filteredData.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredData.map((item, index) => (
                <View key={index} style={styles.headlineCard}>
                  <Image source={{ uri: item.image }} style={styles.headlineImage} />
                  <Text style={styles.headlineText}>{item.text}</Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            <View style={styles.noResults}>
              <Ionicons name="alert-circle-outline" color="#bbb" size={48} style={{ textAlign: "center" }} />
              <Text style={styles.noResultsText}>No results found</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sexual Health</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Image source={{ uri: "https://possibilitiesforchange.org/wp-content/uploads/2023/05/image.png" }} style={styles.cardImage} />
              <Text style={styles.cardText}>Adolescent sexual health Archives</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg" }} style={styles.cardImage} />
              <Text style={styles.cardText}>Must Know Data on Reproductive Health</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reproductive Health</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Image source={{ uri: "https://www.thehealthsite.com/wp-content/uploads/2024/01/ReproductiveHealth.png" }} style={styles.cardImage} />
              <Text style={styles.cardText}>Why Is Education Regarding Reproduction Essential?</Text>
            </View>
            <View style={styles.card}>
              <Image source={{ uri: "https://www.pharmacist.com/Portals/0/EasyDNNNews/1195/images/cpe-december-2022-600-600-p-L-97.jpg" }} style={styles.cardImage} />
              <Text style={styles.cardText}>Pharmacists increasing access to reproductive health care</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Detail Screen Component
export const DetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Detail Screen Content</Text>
    </View>
  );
};

// Profile Screen Component
export const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Profile Content</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

// Main App Component
export const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            borderTopWidth: 1,
            borderTopColor: '#e0e0e0',
            backgroundColor: '#ffffff',
          },
          tabBarActiveTintColor: '#e63946',
          tabBarInactiveTintColor: '#999999',
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Articles"
          component={DetailScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="articles" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="account-circle" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: 30,
  },
  header: {
    alignItems: "center",
    paddingBottom: 10,
    backgroundColor: "#e63946",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  searchBarContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 25,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
  },
  searchBar: {
    flex: 1,
    height: 45,
    borderRadius: 8,
    paddingLeft: 15,
    fontSize: 16,
    color: "#333",
  },
  searchIcon: {
    marginLeft: 10,
  },
  container: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 15,
  },
  headlines: {
    marginBottom: 20,
  },
  headlineCard: {
    marginRight: 15,
    width: 260,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  headlineImage: {
    width: "100%",
    height: 170,
    borderRadius: 10,
  },
  headlineText: {
    padding: 12,
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  noResults: {
    alignItems: "center",
    marginTop: 20,
  },
  noResultsText: {
    color: "#aaa",
    fontSize: 18,
  },
  section: {
    marginVertical: 25,
  },
  card: {
    width: 210,
    marginRight: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 130,
    borderRadius: 10,
  },
  cardText: {
    padding: 12,
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
