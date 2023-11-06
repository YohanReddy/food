import { View, ScrollView, ImageBackground, Text } from "react-native";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

const StyledText = styled(Text);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ position: "absolute", top: 45, left: 15, zIndex: 1 }}>
          <Icon name="chevron-left" size={32} color="black" padding={10} />
        </View>

        <View style={{ position: "absolute", top: 45, right: 15, zIndex: 1 }}>
          <Icon name="mail-outline" size={32} color="black" padding={10} />
        </View>
        <Text style={{ top: 130, fontWeight: "bold", fontSize: 20, left: 30 }}>
          Favourites
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginLeft: 20,
              padding: 10,
              columnGap: 20,
              marginTop: 150,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 20,
              }}
            >
              <ImageBackground
                style={{
                  height: 150,
                  width: 150,
                  justifyContent: "flex-end",
                  padding: 10,
                  tintColor: "#000000",
                }}
                imageStyle={{ borderRadius: 10 }}
                source={require("../../assets/pasta-tint.jpg")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Egg Ramen
                </Text>
                <Text
                  style={{
                    color: "#98a2b3",
                    fontWeight: "light",
                    fontSize: 10,
                  }}
                >
                  INR 1,999
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "light", fontSize: 11 }}
                >
                  Delivery Time | 10mins
                </Text>
              </ImageBackground>
              <ImageBackground
                style={{
                  height: 150,
                  width: 150,
                  justifyContent: "flex-end",
                  padding: 10,
                  tintColor: "#000000",
                }}
                imageStyle={{ borderRadius: 10 }}
                source={require("../../assets/egg.png")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Egg Ramen
                </Text>
                <Text
                  style={{
                    color: "#98a2b3",
                    fontWeight: "light",
                    fontSize: 10,
                  }}
                >
                  INR 1,999
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "light", fontSize: 11 }}
                >
                  Delivery Time | 10mins
                </Text>
              </ImageBackground>
              <ImageBackground
                style={{
                  height: 150,
                  width: 150,
                  justifyContent: "flex-end",
                  padding: 10,
                  tintColor: "#000000",
                }}
                imageStyle={{ borderRadius: 10 }}
                source={require("../../assets/chop-tint.jpg")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Egg Ramen
                </Text>
                <Text
                  style={{
                    color: "#98a2b3",
                    fontWeight: "light",
                    fontSize: 10,
                  }}
                >
                  INR 1,999
                </Text>
                <Text
                  style={{ color: "white", fontWeight: "light", fontSize: 11 }}
                >
                  Delivery Time | 10mins
                </Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        <Text
          style={{
            marginLeft: 85,
            marginTop: 50,
            color: "grey",
          }}
        >
          You can add upto 12 dishes here...
        </Text>
      </ScrollView>
    </>
  );
}
