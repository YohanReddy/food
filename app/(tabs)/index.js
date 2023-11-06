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
import { SimpleLineIcons } from "@expo/vector-icons";

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
        <Text style={{ top: 90, fontWeight: "bold", fontSize: 18, left: 30 }}>
          What are we ordering today?
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 105 }}
            contentContainerStyle={{
              marginLeft: 20,
              padding: 10,
              columnGap: 20,
            }}
          >
            <View>
              <Button
                title="Popular🔥"
                buttonStyle={{
                  backgroundColor: "rgba(39, 39, 39, 1)",
                  borderRadius: 50,
                  padding: 6,
                }}
                titleStyle={{ color: "white" }}
              />
            </View>
            <View>
              <Button
                title="African 🫑"
                buttonStyle={{
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                  padding: 6,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white" }}
              />
            </View>
            <View>
              <Button
                title="Fresh 🍅"
                buttonStyle={{
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                  padding: 6,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white" }}
              />
            </View>
            <View>
              <Button
                title="Hot Sales 🧨"
                buttonStyle={{
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                  padding: 6,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white" }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ top: -30 }}>
          <ImageBackground
            source={require("../../assets/card.png")}
            imageStyle={{ borderRadius: 6 }}
            style={{
              width: 330,
              height: 150,
              left: 30,
              borderRadius: 5,
              marginTop: -55,
            }}
          >
            <View
              style={{
                position: "absolute",
                padding: 15,
              }}
            >
              <Text className="text-white font-black text-lg">
                Spaghetti Specials month
              </Text>
              <View>
                <Text
                  style={{ color: "white", fontSize: 12, margin: 5, top: 2 }}
                >
                  For all spaghetti lovers, get $10 off
                </Text>
                <Text style={{ color: "white", fontSize: 12, margin: 5 }}>
                  all spaghetti based meals
                </Text>
              </View>
              <Button
                title="Claim Now"
                buttonStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  padding: 6,
                  width: 120,
                  margin: 10,
                }}
                containerStyle={{}}
                titleStyle={{
                  color: "darkorange",
                  fontSize: 12,
                  fontWeight: 900,
                }}
              />
            </View>
          </ImageBackground>
          <Image
            source={require("../../assets/spaghetti.png")}
            style={{
              width: 150,
              height: 150,
              position: "absolute",
              right: -7,
              top: -55,
            }}
          />
        </View>
        <TextInput
          style={{
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#ccc",
            opacity: 0.5,
            padding: 15,
            width: 330,
            height: 50,
            left: 30,
            marginBottom: 15,
          }}
          placeholder="Find your favourite delicacy"
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              left: 40,
              fontSize: 17,
            }}
          >
            Popular Picks 🍜
          </Text>
          <Button
            title="See more..."
            buttonStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: 5,
              right: 30,
              width: 102,
              padding: 3,
              marginLeft: 40,
            }}
            containerStyle={{}}
            titleStyle={{ color: "#9ea7b7" }}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 30,
            padding: 10,
            columnGap: 30,
          }}
        >
          <View
            style={{
              width: 120,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/flour.png")}
              style={{ height: 150, width: 120, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Efo Riro</StyledText>
            <Text className="text-slate-500">INR 4,000</Text>
            <Text className="text-xs font-semibold	">Delivery Time | 30 m</Text>
          </View>
          <View
            style={{
              width: 120,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/egg.png")}
              style={{ height: 150, width: 120, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">
              Egg Ramen
            </StyledText>
            <Text className="text-slate-500">INR 3,500</Text>
            <Text className="text-xs font-semibold">Delivery Time | 30 m</Text>
          </View>
          <View
            style={{
              width: 120,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/crab.png")}
              style={{ height: 150, width: 120, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Crabfish</StyledText>
            <Text className="text-slate-500">INR 2,000</Text>
            <Text className="text-xs font-semibold	">Delivery Time | 30 m</Text>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              left: 40,
              fontSize: 17,
            }}
          >
            Today's favourites 🍝
          </Text>
          <Button
            title="See more..."
            buttonStyle={{
              backgroundColor: "#f9fafb",
              borderRadius: 5,
              right: 30,
              width: 102,
              padding: 3,
              marginLeft: 40,
            }}
            containerStyle={{}}
            titleStyle={{ color: "#9ea7b7" }}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 30,
            padding: 10,
            columnGap: 30,
          }}
        >
          <View
            style={{
              width: 120,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/chop.png")}
              style={{ height: 150, width: 120, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Efo Riro</StyledText>
            <Text className="text-slate-500">INR 4,000</Text>
            <Text className="text-xs font-semibold	">Delivery Time | 30 m</Text>
          </View>
          <View
            style={{
              width: 120,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/pasta.png")}
              style={{ height: 150, width: 120, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">
              Egg Ramen
            </StyledText>
            <Text className="text-slate-500">INR 3,500</Text>
            <Text className="text-xs font-semibold">Delivery Time | 30 m</Text>
          </View>
          <View
            style={{
              width: 120,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/crab.png")}
              style={{ height: 150, width: 120, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Crabfish</StyledText>
            <Text>INR 2,000</Text>
            <Text className="text-xs font-semibold	">Delivery Time | 30 m</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
}
