import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Home");

  const data = [
    {
      text: "Navigating Male and Female Infertility: Diagnosis and Solutions",
      image:
        "https://media.istockphoto.com/id/1006452362/photo/a-condom-and-birth-control-pills.jpg?s=1024x1024&w=is&k=20&c=Eu2bpglWLYXMKqlSAYOlvuAoqrGfOPbCxOWXxd8JobI=",
    },
    {
      text: "Understanding Sexual Dysfunction: Causes and Treatments",
      image:
        "https://cdn.create.vista.com/api/media/small/558749896/stock-photo-frustrated-depressed-millennial-african-american-female-sad-and-ignoring-husband-after-quarrel-sits-at-bed",
    },
    {
      text: "The Role of Testosterone Replacement Therapy",
      image:
        "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg",
    },
    {
      text: "Sexual Desire, Arousal, and Pleasure",
      image:
        "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
    },
  ];

  const filteredData = data.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>APEX SEXUAL HEALTH CLINIC</Text>
          <Text style={styles.headerText}>ASHC</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.headlines}>
          <Text style={styles.sectionTitle}>RESULTS</Text>
          {filteredData.length > 0 ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {filteredData.map((item, index) => (
                <View key={index} style={styles.headlineCard}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.headlineImage}
                  />
                  <Text style={styles.headlineText}>{item.text}</Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            <View style={{ flexDirection: "column" }}>
              <Ionicons
                name="alert-circle-outline"
                color="gray"
                size={48}
                margin={10}
                style={{ textAlign: "center" }}
              />
              <Text style={styles.noResultsText}>No results found</Text>
            </View>
          )}
        </View>

        {activeTab === "Home" && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sexual Education</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={[styles.card]}>
                  <Image
                    source={{
                      uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Understanding Romance, arousal and the human body
                  </Text>
                </View>
                <View style={styles.card}>
                  <Image
                    source={{
                      uri: "https://images.squarespace-cdn.com/content/v1/5bbe507a7980b35b9122eaa0/1602578067987-F6U03O4O0QE2P6Z2V41L/Conscious%2Brelationship%2B%286%29.jpeg",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Must Know data on Reproductive health
                  </Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Trending News</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={[styles.card, { flexDirection: "column", flex: 1 }]}
                >
                  <Image
                    source={{
                      uri: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    The Role of Testosterone Replacement Therapy
                  </Text>
                </View>
              </ScrollView>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sexual Dysfunction</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={[styles.card, { flexDirection: "column", flex: 1 }]}
                >
                  <Image
                    source={{
                      uri: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/01/couple-hug-bed-1296x728-header-1024x575.jpg",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Sexual dysfunction: Symptoms, causes, and treatment
                  </Text>
                </View>
                <View
                  style={[styles.card, { flexDirection: "column", flex: 1 }]}
                >
                  <Image
                    source={{
                      uri: "https://familydoctor.org/wp-content/uploads/2000/09/sexual-dysfunction.jpg",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Here are some articles about sexual dysfunction:
                  </Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
                Mental Health Content
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={[styles.card, { flexDirection: "column", flex: 1 }]}
                >
                  <Image
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Importance of Menta Health checkups
                  </Text>
                </View>
                <View
                  style={[styles.card, { flexDirection: "column", flex: 1 }]}
                >
                  <Image
                    source={{
                      uri: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Demystifying Mental Health:
                  </Text>
                </View>
              </ScrollView>
            </View>
          </>
        )}

        {activeTab === "Sexual Dysfunction" && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
              Sexual Dysfunction Content
            </Text>
            <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
              <Image
                source={{
                  uri: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/01/couple-hug-bed-1296x728-header-1024x575.jpg",
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>
                Sexual dysfunction: Symptoms, causes, and treatment
              </Text>
            </View>
            <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
              <Image
                source={{
                  uri: "https://familydoctor.org/wp-content/uploads/2000/09/sexual-dysfunction.jpg",
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>
                Here are some articles about sexual dysfunction:
              </Text>
            </View>
            <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
              <Image
                source={{
                  uri: "https://images.theconversation.com/files/557971/original/file-20231107-17-khqow.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=668&h=324&fit=crop",
                }}
                style={styles.cardImage}
              />
              <Text>
                Understanding Sexual Dysfunction: Causes and Treatments
              </Text>
            </View>
          </View>
        )}

        {activeTab === "Trending News" && (
          <>
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
                Trending News
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.card}>
                  <Image
                    source={{
                      uri: "https://images.theconversation.com/files/557971/original/file-20231107-17-khqow.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=668&h=324&fit=crop",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    Sexual Desire, Arousal, and Pleasure
                  </Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Health News</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.card}>
                  <Image
                    source={{
                      uri: "https://images.squarespace-cdn.com/content/v1/5ff7311ae94c0f7fad0167ec/1681715332762-IRGWICH3I5YZDPNA1T3N/muscular-male-torso-testosterone-formula-against-background.jpg",
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardText}>
                    The Role of Testosterone Replacement Therapy
                  </Text>
                </View>
              </ScrollView>
            </View>
          </>
        )}

        {activeTab === "Mental Health" && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { fontSize: 20 }]}>
              Mental Health Content
            </Text>
            <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
              <Image
                source={{
                  uri: "https://cdn.pixabay.com/photo/2022/07/15/18/27/mental-health-7323725_640.png",
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>
                Importance of Menta Health checkups
              </Text>
            </View>
            <View style={[styles.card, { flexDirection: "column", flex: 1 }]}>
              <Image
                source={{
                  uri: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=",
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Demystifying Mental Health:</Text>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.bottomNav}>
        {[
          "Home",
          "Trending News",
          "Sexual Dysfunction",
          "Mental Health",
          // "Reproductive Health",
        ].map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} 
          style={[
            styles.tab,
            activeTab === tab ? styles.activeTab : styles.inactiveTab,

          ]}
>
            <Text
              style={[
                styles.navText,
                activeTab === tab && styles.activeNavText,
              ]}
              color={'white'}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    inactiveTab:{
        borderColor:"red",  
        borderWidth:1,
        padding: 5,
        margin: 4,
        borderRadius: 10,


    },
    activeTab:{
        backgroundColor:"red",  
        padding: 5,
        margin: 5,
        borderRadius: 10,

    },
    activeNavText:{
        color:"white",

    },
  container: {
    flex: 1,
  },
  section: {
    padding: 10,
  },
  card: {
    marginRight: 10,
    width: 150,
  },
  cardImage: {
    width: "100%",
    height: 90,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
  },
  navBarIcon: {
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    lineHeight: 24,
    width: 24,
    height: 24,
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#e63946",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#8888",
    // backgroundColor: "grey",
  },
  navText: {
    fontSize: 12,
    color: "#e63946",
    fontWeight: "600",
  },
  searchBarContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  headlines: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#e63946",
  },
  headlineCard: {
    marginRight: 10,
    width: 180,
  },
  headlineImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  headlineText: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "500",
  },
  noResultsText: {
    fontSize: 20,
    color: "#666",
    marginTop: 10,
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f1f1f1",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
  },
});