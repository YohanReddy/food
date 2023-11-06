import {
  View,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  Text,
} from "react-native";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const StyledText = styled(Text);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ position: "absolute", top: 50, left: 15, zIndex: 1 }}>
          <SimpleLineIcons name="grid" size={25} color="black" padding={10} />
        </View>
        <View style={{ position: "center", top: 47, right: 65, zIndex: 1 }}>
          <Icon
            name="location-pin"
            size={20}
            color="black"
            padding={10}
            top={4}
          />
          <Text style={{ position: "absolute", right: 55, top: 15 }}>
            Area 7, Garki Abuja
          </Text>
        </View>
        <View style={{ position: "absolute", top: 45, right: 15, zIndex: 1 }}>
          <Icon name="mail-outline" size={32} color="black" padding={10} />
        </View>

        <View
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            style={{
              borderWidth: 3,
              borderRadius: 150,
              borderColor: "red",
              width: 100,
              height: 100,
            }}
            source={require("../../assets/image.png")}
          ></Image>
          <Text
            style={{
              marginTop: 20,
            }}
          >
            Profile
          </Text>
        </View>
        <View
          style={{
            gap: 20,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 0.5,
              padding: 10,
              borderColor: "#98a2b3",
              width: 340,
              height: 60,
              marginLeft: 25,
            }}
          >
            <FontAwesome5 name="user-circle" size={24} color="black" />
            <View
              style={{
                marginLeft: 35,
              }}
            >
              <Text className="text-slate-500">Full Name</Text>
              <StyledText className="font-extrabold text-m">
                Kiminonawa Okinawa
              </StyledText>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 0.5,
              padding: 10,
              borderColor: "#98a2b3",
              width: 340,
              height: 60,
              marginLeft: 25,
            }}
          >
            <AntDesign name="mail" size={25} color="black" />

            <View
              style={{
                marginLeft: 35,
              }}
            >
              <Text className="text-slate-500">Email</Text>
              <StyledText className="font-extrabold text-m">
                kiminonawa@gmail.com
              </StyledText>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 0.5,
              padding: 10,
              borderColor: "#98a2b3",
              width: 340,
              height: 60,
              marginLeft: 25,
            }}
          >
            <Ionicons name="call-outline" size={24} color="black" />

            <View
              style={{
                marginLeft: 35,
              }}
            >
              <Text className="text-slate-500">Phone Number</Text>
              <StyledText className="font-extrabold text-m">
                +234 901 540 6115
              </StyledText>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 0.5,
              padding: 10,
              borderColor: "#98a2b3",
              width: 340,
              height: 60,
              marginLeft: 25,
            }}
          >
            <Ionicons name="location-outline" size={24} color="black" />

            <View
              style={{
                marginLeft: 35,
              }}
            >
              <Text className="text-slate-500">Location</Text>
              <StyledText className="font-extrabold text-m">
                Area 7, Garki, Abuja
              </StyledText>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 0.5,
              padding: 10,
              borderColor: "#98a2b3",
              width: 340,
              height: 60,
              marginLeft: 25,
            }}
          >
            <FontAwesome name="credit-card" size={24} color="black" />

            <View
              style={{
                marginLeft: 35,
              }}
            >
              <Text className="text-slate-500">Payment Card</Text>
              <StyledText className="font-extrabold text-m">
                4232 **** **** **** 0678
              </StyledText>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
